const http = require('http');
const fs = require('fs')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const data = fs.readFileSync('example.txt', 'utf8');
        res.end(data);
    }
    else if (req.url === '/about') {
        const data = fs.readFileSync('about.txt', 'utf8');
        res.end(data);
    }
})
server.listen(8000, () => {
    console.log("server runing at http");

})