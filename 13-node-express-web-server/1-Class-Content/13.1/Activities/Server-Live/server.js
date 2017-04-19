var http = require('http');
var url = require('url');
var fs = require('fs');

var PORT = 8080;

function serverResponse( request, response ) {

	var urlParts = url.parse(request.url);
	switch (urlParts.pathname) {
		case '/':
		case '/home':
			fs.readFile("index.txt", function (err, data) {
				response.writeHead(200, { 'Content-Type': 'text/html' });
				response.end(data);
			});
			break;
		case '/portfolio':
			fs.readFile("portfolio.html", function (err, data) {
				response.end(data);
			});
			break;
		case '/style.css':	
			fs.readFile("style.css", function (err, data) {
				response.writeHead(200, { 'Content-Type': 'text/css' });
				response.end(data);
			});
			break;
		default:
			response.writeHead(404);
			response.end('<h1>404 Not Found</h1> <a href="/home">Go Home!</a>');
	}
}

var server = http.createServer(serverResponse);

server.listen(PORT, function () {
	// Do something when we start up the server.
	console.log('Server has been started, listening on: http://localhost:' + PORT);
});