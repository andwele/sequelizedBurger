// Requiring dependencies
var http = require("http");
var fs = require("fs");
var url = require("url");

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var urlParts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {

    // Depending on the URL we display a different HTML file.
    case "/":
      fs.readFile("index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    case "/food":
      fs.readFile("food.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    case "/movies":
      fs.readFile("movies.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    case "/frameworks":
      fs.readFile("frameworks.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    default:
      fs.readFile("index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
  }
}

// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
