const express = require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'root',
    database: 'sophiesportal'
})

app.post("/create", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const photo = req.body.photo;
    const availability = req.body.availability;

  
    db.query(
      "INSERT INTO nannys (name, email, photo, availability, venmoId, phone, emergencyContact) VALUES (?,?,?,?,?,?,?)",
      [name, email, photo, availability, venmoId, phone, emergencyContact],
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