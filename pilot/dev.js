const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);

app.use('/pilot', (req, res, next) => {
    express.static(path.join(__dirname, '/public'))(req, res, next);
});

server.listen(5000);
console.log("Server listening on port 5000");