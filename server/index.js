const express = require("express");

// port
const PORT = 8000;

const app = express();

// define routes

app.get("/api", (req, res) => {
  res.send({ message: "yo yo fro the server" });
});

app.get("/api", (req, res) => {
  res.json({ message: "yo yo fro the server" });
});

app.listen(PORT, () => {
  console.log("server is lesting on PORT ");
});
