const express = require('express');
const app = express();
const port = 5000;
const morgan = require('morgan');

app.use(express.json());
app.get('/', (req, res) => {
    res.send('<h1>hello</h1>');
})

app.post('/page', (req, res) => {
    const { name, email, number, course, city } = req.body;
    res.json({
        success: true,
        name: name,
        email: email,
        number: number,
        course: course,
        city: city
    })
})

app.listen(port, () => {
    console.log('server is runing', port, morgan());
})