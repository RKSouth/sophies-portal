const express = require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

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
  

app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
    nanny:'root',
    host:'localhost',
    password:'root',
    database: 'sophiesportal'
})

app.post("/createNanny", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const photo = req.body.photo;
    const availability = req.body.availability;
    const phone = req.body.phone;
    const emergencyContact = req.body.emergencyContact;
    const children = req.body.children;
    const schedule = req.body.schedule;
    const password = req.body.password;
    const wage = req.body.wage;
    db.query(
      "INSERT INTO nannys (name, email, photo, availability, venmoId, phone, emergencyContact, children, schedule, password) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
      [name, email, photo, availability, venmoId, phone, emergencyContact, children, schedule, password,wage],
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

  app.post("/createParent", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const emergencyContact = req.body.emergencyContact;
    const children = req.body.children;
    const nanny = req.body.nanny;
    const password = req.body.password;
  
    db.query(
      "INSERT INTO parents (name, email, phone, emergencyContact, children, nanny, password) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
      [name, email, phone, emergencyContact, children, nanny, password],
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });


  app.post("/login", (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM nannys WHERE email = ?;",
        email,
        (err, result) => {
          if (err) {
            res.send({ err: err });
          }
    
          if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, response) => {
              if (response) {
                req.session.nanny = result;
                console.log(req.session.nanny);
                res.send(result);
              } else {
                res.send({ message: "Wrong email/password combination!" });
              }
            });
          } else {
            res.send({ message: "nanny doesn't exist" });
          }
        }
      );
  });

  app.post("/login", (req,res) => {
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
                req.session.parent = result;
                console.log(req.session.parent);
                res.send(result);
              } else {
                res.send({ message: "Wrong email/password combination!" });
              }
            });
          } else {
            res.send({ message: "parent doesn't exist" });
          }
        }
      );
  })

  app.get("/nannys", (req, res) => {
    db.query("SELECT * FROM nannys", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  app.put("/update", (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    db.query(
      "UPDATE nannys SET wage = ? WHERE id = ?",
      [wage, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
  
  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM nannys WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, () => {
    console.log('running on port 3001');
})