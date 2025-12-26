const express = require("express");
const app = express();

// connect database
require("./db");

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});node index.js


// server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
