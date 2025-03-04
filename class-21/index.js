const express = require("express");
const app = express();
const port = 4000;
app.use(express.json())

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render("index");
    res.send('hello')
})

app.get('/news', (req, res) => {
    res.send([
        { id: 1, message: "This is Article one" },
        { id: 2, message: "This is Article Two" },
        { id: 3, message: "This is Article Three" },
        { id: 4, message: "This is Article Four" }
    ]);
})

// params
app.get('/post/:id', (req, res) => {
    let dataId = req.params.id;
    console.log("Post Id is" + dataId);
    res.send(dataId)
})

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send(
        {
            id: 1,
            message: "login",
            data: req.body,
            query: req.query
        })
})

app.listen(port, () => {
    console.log(`Sever Is live http://localhost:${port}`);
})