const express = require("express");
const router = express.Router();
const dbConnection = require("../database/connection");

// const userPostBodyExemple = {
//   "firstname": "Nora",
//   "lastname": "Sumane",
//   "username": "nora-sch",
//   "email": "norah@inbox.lv",
//   "age": 36
// } // for JSON body POSTMAN

const findAll = "SELECT * FROM users";
const findById = "SELECT * FROM users where id = ?";
const postOne =
  "INSERT INTO users (firstname, lastname, username, email, age) VALUES(?, ?, ?, ?, ?)";
const updateOne =
  "UPDATE users SET firstname = ?, lastname = ?, username = ?, email = ?, age= ? WHERE id = ?";

// ROUTE "/"
router.get("/", (req, res) => {
  dbConnection.query(findAll, (err, result, fields) => {
    if (!err) {
      res.json(result);
    } else {
      res.json({ error: err.sqlMessage });
    }
  });
});

router.post("/", (req, res) => {
  const { firstname, lastname, username, email, age } = req.body;
  dbConnection.query(
    postOne,
    [firstname, lastname, username, email, age],
    (err, result, fields) => {
      if (!err) {
        res.location(`/${result.insertId}`).sendStatus(201);
      } else {
        res.status(500).send("Error saving the user");
      }
    }
  );
});

// ROUTE "/:id"
router.get("/:id", (req, res) => {
  dbConnection.query(findById, [req.params.id], (err, result, fields) => {
    if (!err) {
      if (result.length > 0) {
        res.json(result);
      } else {
        res.send("Not found");
      }
    } else {
      res.json({ error: err.sqlMessage });
    }
  });
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { firstname, lastname, username, email, age } = req.body;
  dbConnection.query(
    updateOne,
    [firstname, lastname, username, email, age, id],
    (err, result, fields) => {
      console.log(result)
      if (!err) {
        if (result.affectedRows === 0) {
          res.status(404).send("Not Found");
        } else {
          res.sendStatus(204);
        }
      } else {
        res.status(500).send("Error editing the user");
      }
    }
  );
});

// const getUserById = (req, res) => {
//   const id = parseInt(req.params.id);

//   database
//     .query("SELECT * FROM users WHERE id=?", [id])
//     .then(([user]) => {
//       user[0] != null ? res.status(200).json(user[0]) : res.status(404).send("Page not found");
//     })
//     .catch(err => res.status(500).send("Error retrieving data from database"));
// }

module.exports = router;
