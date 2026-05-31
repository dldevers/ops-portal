const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    if (req.url === "/health") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify({ status: "ok" }));
        return;
    }

    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end("<h1>Ops Portal</h1>");
        return;
    }

    res.writeHead(404, {
        "Content-Type": "text/plain"
    });
    res.end("Not Found");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});