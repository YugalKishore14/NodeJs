const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Student = require('./models/student_models');
const studentRouter = require('./router/studentRouter');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));


// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', studentRouter);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ejs_insert', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.log("MongoDB Connection Error:", err);
});


// app.post('/api/insert', async (req, res) => {
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
app.post('/api/insert', async (req, res) => {
    await Student.create(req.body)
    res.redirect('/api/student');
})



// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/api/insert', (req, res) => {
    res.render('insert');
});

app.get('/api/student', async (req, res) => {
    try {
        const student = await Student.find();
        res.render('student', { student });
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Something went wrong!");
    }
});


// Server Start
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
