// Dependencies
var http = require("http");

var PORT = 8080;

var server = http.createServer(function(req, res) {

  // Saving the request method as a variable.
  var method = req.method.toLowerCase();
  var requestData = "";
  var output = "";

  // When the server receives data..
  req.on("data", function(data) {

    // Add it to requestData.
    requestData += data;
  });

  // When the request has ended...
  req.on("end", function() {

    // We display the request method, as well as the data received!
    output = "You just " + method + "\n";
    output += requestData.toString();
    console.log(output);
    res.end();
  });

});

// Starts our server.
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});
