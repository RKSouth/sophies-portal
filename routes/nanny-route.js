app.post("/createNanny", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  // const photo = req.body.photo;
  // const availability = req.body.availability;
  // const phone = req.body.phone;
  // const emergencyContact = req.body.emergencyContact;
  // const children = req.body.children;
  // const schedule = req.body.schedule;
  const password = req.body.password;
  // const wage = req.body.wage;

  

  bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      }
  
      db.query(
        "INSERT INTO nannys (name, email, password) VALUES (?,?, ?)",
        [name,email, hash],
        (err, result) => {
          console.log(err);
        }
      );
    });
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