const API_KEY = "93b1d3d702c99ad2e1888d01604dfb21";

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
