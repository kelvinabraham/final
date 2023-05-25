const express = require("express");
const path = require("path");
const db = require("./queries");

// port
const PORT = 8000;

const app = express();

//middleware app.use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "./client/build")));
// define routes

app.get("/api", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.get("/api", (req, res) => {
  res.json({ message: "yo yo fro the server" });
});

app.listen(PORT, () => {
  console.log("server is lesting on PORT ");
});
