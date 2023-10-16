var http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    if (req.url === "/api" && req.method === "GET") {  
        // create end points and use on client
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Api Is Called');
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('incorrect API');
    } 
});

server.listen(port, hostname, () => {
    console.log("Server is started on ", hostname, port);
})