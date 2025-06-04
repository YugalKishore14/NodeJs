const express = require('express');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('home', { title: 'Home', logoText: 'Home' });
});

app.get('/page', (req, res) => {
    res.render('page', { title: 'Page', logoText: 'Page' });
});

app.get('/insert', (req, res) => {
    res.render('insert', { title: 'Insert Contact', logoText: 'Insert' });
});

app.get('/view', (req, res) => {
    res.render('view', { title: 'View Contacts', logoText: 'View' });
});

app.get('/edit', (req, res) => {
    res.render('edit', { title: 'Edit Contact', logoText: 'Edit' });
});

app.get('/delete', (req, res) => {
    res.render('delete', { title: 'Delete Contact', logoText: 'Delete' });
});

app.listen(port, () => {
    console.log(`Server started at http://127.0.0.1:${port}`);
});
