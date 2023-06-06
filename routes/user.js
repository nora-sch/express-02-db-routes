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

module.exports = router;
