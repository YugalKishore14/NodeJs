const http = require('http');
const myserver = http.createServer((req, res) => {
    console.log("hello india");
    res.end("hello india 2");
});
myserver.listen(8000, () => {
    console.log("start server");

})