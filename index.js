const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    // If it's an HTTP GET request, regardless of path, send a simple static reply
    if (req.method == 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1> You found us! </h1></body></html>');
        return;
    // If It's another HTTP method, send a 404
    } else {
        res.statusCode = 404;
        res.setHeader=('Content-Type','text/html');
        res.end('<html><body><h1>Error: HTTP ' + req.method + ' method is not supported</h1></body></html>');
        return;
    }
})

// start HTTP server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})