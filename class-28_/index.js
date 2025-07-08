const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const User = require('./model/user_models');
const session = require('express-session');
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true
}))

mongoose.connect('mongodb://localhost:27017/userDB');

app.get('/', (req, res) => {
    res.render('login');
});






app.get("/register", (req, res) => {
    // res.send("Register Page");
    res.render("register", { name: "Yugal" });
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    const existengUser = await User.findOne({ email });
    if (existengUser) {
        return res.send('User Allready exists. < ahref="/signup">Try Again</a>');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        email,
        password: hashedPassword
    });

    await newUser.save();
    res.send('Signup Successful !! <a href="/">Login</a>');
})








app.get("/login", (req, res) => {
    // res.send("Login Page");
    res.render("login", { name: "Yugal" });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
        req.session.user = user;
        return res.redirect('/profile');
    } else {
        return res.send("Invalid Email or Password");
    }
});







app.get("/profile", (req, res) => {
    res.render("profile", { name: "Yugal" });
});

app.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/')
    }
    res.redirect('/profile');
})


app.listen(port, () => {
    console.log("server running this port " + port);
})