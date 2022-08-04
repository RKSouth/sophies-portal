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
  
  


// app.get("/nannys", (req, res) => {
//   db.query("SELECT * FROM nannys", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });



app.get("/login", (req, res) => {
    if (req.session.nanny) {
      res.send({ loggedIn: true, nanny: req.session.nanny });
    } else {
      res.send({ loggedIn: false });
    }
  });
  
  app.post("/nannylogin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    db.query(
      "SELECT * FROM nannies WHERE email = ?;",
      email,
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
  
        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              req.session.user = result;
              console.log(req.session.user);
              res.send(result);
            } else {
              res.send({ message: "Wrong username/password combination!" });
            }
          });
        } else {
          res.send({ message: "User doesn't exist" });
        }
      }
    );
    
  })

  app.post("/parentlogin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    db.query(
      "SELECT * FROM parents WHERE email = ?;",
      email,
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
  
        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              req.session.user = result;
              console.log(req.session.user);
              res.send(result);
            } else {
              res.send({ message: "Wrong username/password combination!" });
            }
          });
        } else {
          res.send({ message: "User doesn't exist" });
        }
      }
    );
    
  })

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});