require("dotenv").config();
const mysql = require("mysql2");
const dbConnection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

dbConnection.getConnection((err, conn) => {
  if (!err) {
    console.log("Connection with DB ok");
  } else {
    console.log(err);
  }
});

module.exports = dbConnection;
