const express = require("express");
const router = express.Router();
const dbConnection = require("../database/connection");

const findAll = "SELECT * FROM users";
const findById = "SELECT * FROM users where id = ?";
router.get("/", (req, res) => {
  dbConnection.query(findAll, (err, result, fields) => {
    if (!err) {
      res.json(result);
    } else {
      res.json({ error: err.sqlMessage });
    }
  });
});
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