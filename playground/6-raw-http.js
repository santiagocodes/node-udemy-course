// Making requests using core modules, instead of with libraries.

const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=${yourAccessKey_weatherStack}&query=40,35`;

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", () => {
  console.log("Error: ", error);
});

request.end();
