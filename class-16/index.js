const http = require('http');

const server = http.createServer((req, res) => {
    // res.writeHead(200);
    res.writeHead(200, { 'Content-Type': 'text/plan' })
    res.end('hello server');
});

server.listen(5000, () => {
    console.log('server is runig');
})


