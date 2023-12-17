let http = require("http");

let server = http.createServer(handler)
server.listen(8080, () => console.log("server start"));

function handler(request, response) {
    response.writeHead(200);
    response.write("Hello World");
    response.end();
}