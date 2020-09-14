const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Express Weather Finder",
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
