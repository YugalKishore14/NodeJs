import express from 'express';
const app = express();
import bcrypt from 'bcryptjs';
import User from './model/user_models.js';
import session from 'express-session';
import { connectDb } from './config/connectDatabase.js';
import contactsRouter from './routes/contacts.routes.js';
import { config } from 'dotenv';
import { name } from 'ejs';
config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true
}))

connectDb();
app.use('/', contactsRouter);


app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    const existengUser = await User.findOne({ email });
    if (existengUser) {
        return res.send('User Allready exists. < ahref="/signup">Try Again</a>');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        username: req.body.username,
        email,
        password: hashedPassword
    });

    await newUser.save();
    res.send('Signup Successful !! <a href="/">Login</a>');
})


app.get("/login", (req, res) => {
    res.render("login", { name: name });
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
    res.render("profile", {
        name: req.session.user ? req.session.user.username : 'Guest',
        email: req.session.user ? req.session.user.email : 'Not logged in'
    });
});
app.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/')
    }
    res.redirect('/profile');
})


app.listen(process.env.PORT_NUMBER, () => {
    console.log("server running this port " + process.env.PORT_NUMBER);
})