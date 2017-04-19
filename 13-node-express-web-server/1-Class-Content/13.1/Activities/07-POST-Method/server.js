// Dependencies
var http = require("http");

var PORT = 8080;

var server = http.createServer(function(req, res) {

  // Saving the request method as a variable.
  var requestData = "";

  // When the server receives data, it will add it to requestData.
  req.on("data", function(data) {
    requestData += data;
    console.log("You just posted some data to the server!");
    console.log("Your data was " + requestData);
  });

  // When the request has ended...
  req.on("end", function() {
    res.write("<html><head><title>Hello Noder!</title></head><body>");
    res.write("<h1>Thank You!</h1>");
    res.write("</body></html>");
    res.end();
  });

});

// Starts our server.
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});
