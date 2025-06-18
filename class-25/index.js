const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/user_models');

const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ejs_insert', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.log("MongoDB Connection Error:", err);
});

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/insert', (req, res) => {
    res.render('insert');
});


// app.post('/insert', async (req, res) => {
//     try {
//         const { email, name, password, course, mobile } = req.body;
//         const newUser = new User({
//             userName: name, // match schema field
//             email,
//             password,
//             course,
//             mobile
//         });
//         await newUser.save();
//         res.send('User inserted successfully!');
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error inserting user');
//     }
// });
app.post('/insert', async (req, res) => {
    await User.create(req.body)
    res.redirect('/insert');
})


// Server Start
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
