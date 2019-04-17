const { createServer } = require("http");
const PORT = process.env.PORT || 5000;
const server = createServer();

server.on("request", (request, response) => {
	switch (request.url) {
		case "/":
			response.statusCode = 200;
			response.end("200 OKAY");
			break;
		default:
			response.statusCode = 404;
			response.end("Page not found!");
	}
			
});

server.listen(PORT, () => {
	console.log('starting server at port ${PORT}');
});