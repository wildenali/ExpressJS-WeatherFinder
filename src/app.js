const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Cek");
});

app.get("/about", (req, res) => {
  res.send("Ini di About");
});

app.listen(PORT, () =>
  console.log(`The server is now running on Port ${PORT}`)
);
