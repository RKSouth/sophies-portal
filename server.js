const express = require('express'); 
const mysql = require('mysql');
const cors = require('cors');

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
      key: "nannyId",
      secret: "subscribe",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 60 * 60 * 24,
      },
    })
  );
  
const db = mysql.createConnection({
    nanny:'root',
    host:'localhost',
    password:'root',
    port: 3001,
    database: 'sophiesportal'
})

app.post("/createNanny", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    // bcrypt.hash(password, saltRounds, (err, hash) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //         console.log(res)
    //     }
    
        db.query(
          "INSERT INTO nannys (name, email, password) VALUES (?,?,?)",
          [name, email, password],
          (err, res) => {
            console.log(err);
            console.log(result)
          }
        );
      });
    // });


app.listen(3001, () => {
    console.log('running on port 3001');
})