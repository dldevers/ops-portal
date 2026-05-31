const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  switch (req.url) {
    case "/health":
      res.writeHead(200, {"Content-Type": "application/json"});
      res.end(JSON.stringify({status: "ok"}));
    break;
    
    case "/":
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end("<h1>Ops Portal</h1>");
    break;

    default:
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("Not Found");
    break;
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});