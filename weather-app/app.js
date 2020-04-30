const request = require("postman-request");
require("dotenv").config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.accessKey_weatherStack}&query=18.466333,-66.105721`;

request({ url: url, json: true }, (error, response) => {
  //   const data = JSON.parse(response.body); no longer needed because of `json: true`
  const degree = response.body.current.temperature;
  const degreeFeel = response.body.current.feelslike;
  const description = response.body.current.weather_descriptions[0];
  console.log(
    `${description}. It is currently ${degree} degrees out. It feels like ${degreeFeel} degrees out.`
  );
});
