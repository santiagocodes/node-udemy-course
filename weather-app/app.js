const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const address = process.argv[2];

if (!address) {
  console.log("Please provide a location.");
} else {
  geocode(address, (error, data) => {
    //geocode(address, (error, { latitude, longitude, location } = {}) => {    // Destructuring and Default Function Parameters
    if (error) {
      return console.log("Error: ", error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      //forecast( latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log("Error: ", error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
}
