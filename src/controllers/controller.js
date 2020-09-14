exports.renderHomePage = (req, res) => {
  res.render("index");
};

exports.getWeather = (req, res) => {
  console.log(req);
  res.send(`You typed ${req.body.city}`);
};

exports.renderAboutPage = (req, res) => {
  res.render("about");
};
