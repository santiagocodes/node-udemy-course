const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

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
    title: "Help",
    name: "Maria del Carmen",
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

app.get("/help/*", (req, res) => {
  res.render("404 Help", {
    title: "404",
    name: "Maria del Carmen ",
    errorTxt: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Maria del Carmen ",
    errorTxt: "Page not found.",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
