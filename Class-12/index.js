const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('run server');
});
app.listen(port, () => {
    console.log(`run code this ${port}`);

})