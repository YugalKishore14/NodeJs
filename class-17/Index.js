const fs = require('fs');
const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', 'utf8', (error, data) => {
            res.end(data);
        })
    }

    else if (req.url === '/Home') {
        fs.readFile('./Home.html', 'utf8', (error, data) => {
            res.end(data);
        })
    }
    else if (req.url === '/About') {
        fs.readFile('./About.html', 'utf8', (error, data) => {
            res.end(data);
        })
    }
    else if (req.url === '/Skills') {
        fs.readFile('./Skills.html', 'utf8', (error, data) => {
            res.end(data);
        })
    }
    else {
        res.end('404 Page Not Found');
    }
})
server.listen(port, () => {
    console.log('server is runing ');
})


