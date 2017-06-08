var http = require("http");

var PORT = 80;

function serverResponse(request, response) {
    // Do something here.
    response.end("It works! Path hit: " + request.url);
}

var server = http.createServer(serverResponse);

server.listen(8080 /* that was the PORT*/ , function() {
    // Do something when we start up the server. 
    console.log("Server has been started, listening on: http://localhost:" + PORT);
});