const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "sophiesportal",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO nannies (name, email, password) VALUES (?,?,?)",
      [name, email, hash],
      (err, result) => {
        if (err) {
                     console.log(err);
                   } else {
                     res.send("Values Inserted");
                 }
      }
    );
  });
});


app.post("/parent", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      }
  
      db.query(
        "INSERT INTO parents (name, email, password) VALUES (?,?,?)",
        [name, email, hash],
        (err, result) => {
          if (err) {
                       console.log(err);
                     } else {
                       res.send("Values Inserted");
                   }
        }
      );
    });
  });
  
  


app.get("/nannys", (req, res) => {
  db.query("SELECT * FROM nannys", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});