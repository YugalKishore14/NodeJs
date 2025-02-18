const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<h1>hello yugal</h1>')
})
server.listen(5000, () => {
    console.log('server is running');
})