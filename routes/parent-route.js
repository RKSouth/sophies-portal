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