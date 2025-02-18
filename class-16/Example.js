const http = require('http');
const server = http.createServer((req, res) => {
    const obj = {
        t1: 'html',
        t2: 'css',
        t3: 'javascript',
        t4: 'react',
        t5: 'node'
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(obj));
});
server.listen(5000, () => {
    console.log('server is runig');
});