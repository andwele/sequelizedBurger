// The url library allows us to parse parts of the request url.
var url = require("url");

var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Lets start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

// We need a function which handles requests and send response
function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var urlParts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {
    case "/":
      displayRoot(urlParts.pathname, req, res);
      break;
    case "/portfolio":
      displayPortfolio(urlParts.pathname, req, res);
      break;
    case "/edit":
      console.log("display edit");
      break;
    default:
      display404(urlParts.pathname, req, res);
  }
}

// When we visit the "http://localhost:8080/" path, this function is run.
function displayRoot(url, req, res) {
  var myHTML = "<html>";
  myHTML += "<body><h1>Home Page</h1>";
  myHTML += "<a href='/portfolio'>Portfolio</a>";
  myHTML += "</body></html>";
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(myHTML);
}

// When we visit the "http://localhost:8080/portfolio" path, this function is run.
function displayPortfolio(url, req, res) {
  var myHTML = "<html>";
  myHTML += "<body><h1>My Portfolio</h1>";
  myHTML += "<a href='/'>Go Home</a>";
  myHTML += "</body></html>";
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(myHTML);
}

// When we visit any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}
