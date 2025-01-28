const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('home.txt', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                return res.end('Error Reading File');
            }
            res.end(data);
        });
    }
    else if (req.url === '/about') {
        fs.readFile('about.txt', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                return res.end('Error Reading File');
            }
            res.end(data);
        });
    }
});
server.listen(8000, () => {
    console.log('server runing at http://localhost:8000');

});