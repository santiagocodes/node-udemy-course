const path = require("path");
const express = require("express");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");

// Setup handlebars engine and views location
app.set("view engine", "hbs");

// // to customize the default location 'views' folder...
// // // const viewsPath = path.join(__dirname, "../templates");
// // // app.set("view engine", "hbs");
// // // app.set("views", viewsPath);

// Setup static directory to server
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Maria del Carmen",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Maria del Carmen",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpTxt: "Help text printing...",
  });
});

// app.com/weather
app.get("/weather", (req, res) => {
  res.send([
    {
      forecast: 30,
      location: "Madrid",
    },
    {
      forecast: 25,
      location: "London",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
