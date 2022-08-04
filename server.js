const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "sophiesportal",
});

app.post("/createNanny", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;


  db.query(
    "INSERT INTO nannys (name, email, password) VALUES (?,?,?)",
    [name, email, password],
    (err, result) => {
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
    const password = req.body.password;
    const phone = req.body.phone;
    const children = req.body.children;
    const nanny = req.body.nanny;
    const emergencyContact = req.body.emergencyContact
  
  
    db.query(
      "INSERT INTO parents (name, email, password, phone, children, nanny, emergencyContact) VALUES (?,?,?,?,?,?,?)",
      [name, email, password, phone, children, nanny, emergencyContact],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
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