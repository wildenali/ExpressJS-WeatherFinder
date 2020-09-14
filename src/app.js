const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

// app.get("/", (req, res) => {
//   res.send("Cek");
// });

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "../public/"),
  });
});

app.get("/about", (req, res) => {
  res.send("Ini di About");
});

app.listen(PORT, () =>
  console.log(`The server is now running on Port ${PORT}`)
);
