const express = require("express");

const app = express();

// app.com
app.get("", (req, res) => {
  res.send("<h1>Weather</h1>");
});

// app.com/help
app.get("/help", (req, res) => {
  res.send({
    name: "Maria",
    age: 30,
  });
});

// app.com/about
app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
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
