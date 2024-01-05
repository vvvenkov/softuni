const express = require("express");
const server = express();

server.get("/", function (req, res) {    // "/" is like root directoru, default local host
    res.send("Hello World")
})

server.listen(8080, () => console.log("App starter")); //log in the console when you start the server