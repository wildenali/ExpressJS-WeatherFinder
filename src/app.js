const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Cek");
});

app.listen(3000);
