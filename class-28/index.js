const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/login", (req, res) => {
    // res.send("Login Page");
    res.render("login", { name: "Yugal" });
});

app.get("/register", (req, res) => {
    // res.send("Register Page");
    res.render("register", { name: "Yugal" });
});

app.get("/profile", (req, res) => {
    res.render("profile", { name: "Yugal" });
});



app.listen(port, () => {
    console.log("server running this port " + port);
})