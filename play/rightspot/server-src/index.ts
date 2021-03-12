import express from 'express';

let app = express();

app.use((req, res) => {
    res.send("Hello!");
});

app.listen(8080);
console.log("Listening.");

process.on('SIGTERM', () => {
    console.log("Closing app...");
});