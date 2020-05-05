const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

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
