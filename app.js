const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;
const userRouter = require("./routes/user");

app.get("/", (req, res) => {
  res.send("USER DB");
});
app.use("/api/users", userRouter);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});