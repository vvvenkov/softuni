let http = require("http");

http.createServer((request, response) => {
    response.writeHead(200)
    response.write("Hello SoftUni");
    response.end();
}).listen(3000)