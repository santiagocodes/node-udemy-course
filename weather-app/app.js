const request = require("postman-request");
require("dotenv").config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.accessKey_weatherStack}&query=`;

request({ url: url, json: true }, (error, response) => {
  //   const data = JSON.parse(response.body); no longer needed because of `json: true`
  if (error) {
    console.log("Unable to connect to weather service :/");
  } else if (response.body.error) {
    console.log("Unable to find location.");
  } else {
    const degree = response.body.current.temperature;
    const degreeFeel = response.body.current.feelslike;
    const description = response.body.current.weather_descriptions[0];
    console.log(
      `${description}. It is currently ${degree} degrees out. It feels like ${degreeFeel} degrees.`
    );
  }
});

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?proximity=-74.70850,40.78375&access_token=${process.env.accessKey_mapBox}&limit=1`;

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to geocoding service :/");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try another search.");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
