const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const router = require("./router");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "hbs");

app.use("/", router);

// app.get("/", (req, res) => {
//   res.sendFile("index.html", {
//     root: path.join(__dirname, "../public/"),
//   });
// });

// app.get("/about", (req, res) => {
//   res.sendFile("about.html", {
//     root: path.join(__dirname, "../public/"),
//   });
// });

app.listen(PORT, () =>
  console.log(`The server is now running on Port ${PORT}`)
);
