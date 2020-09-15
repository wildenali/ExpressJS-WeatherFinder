const axios = require("axios");
const API_KEY = "93b1d3d702c99ad2e1888d01604dfb21";

const Weather = require("../model/Weather");

exports.renderHomePage = (req, res) => {
  res.render("index");
};

exports.getWeather = (req, res) => {
  // console.log(req);
  // res.send(`You typed ${req.body.city}`);
  const city = req.body.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const weather = new Weather(req.body.city);
  weather.validateUserInput();

  if (weather.errors.length) {
    res.render("index", {
      error: weather.errors.toString(),
    });
  } else {
    axios
      .get(url)
      .then((response) => {
        // console.log(response);
        // console.log(`It is currenty ${response.data.main.temp} in ${response.data.name}`);
        // res.render("index", {
        //   weather: `It is currenty ${response.data.main.temp} in ${response.data.name}`,
        // });

        const { temp: temperature } = response.data.main;
        const { name: location } = response.data;
        res.render("index", {
          weather: `It is currenty ${temperature} in ${location}`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

exports.renderAboutPage = (req, res) => {
  res.render("about");
};
