const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' })
    const html = fs.readFileSync('./index.html', 'utf-8');
    res.end(html);
});

server.listen(5000, () => {
    console.log('server is runig');
});