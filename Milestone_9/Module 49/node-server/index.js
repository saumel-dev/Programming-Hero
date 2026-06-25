const http = require('http');
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end('Hello from node server');
    }
});
server.listen(5000, () => {
    console.log('server running in port 5000');
})