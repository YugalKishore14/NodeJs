require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT_NUMBER;
const Users = require("./models/users_model")


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.DATA_BASE_URL,)
    .then(() => console.log("database Connected"));



app.get('/', (req, res) => {
    let ducat = "Home"
    res.render('home', { ducat })
})
app.get('/insert', (req, res) => {
    let ducat = req.path
    res.render('insert', { ducat })
})

app.post('/insert', async (req, res) => {
    await Users.insertOne({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userMobile: req.body.userMobile,
    })

    res.redirect("/view")
})

app.get('/view', async (req, res) => {
    const users = await Users.find()
    // res.json(users);
    res.render('view', { users })
})

app.get('/view/:id', async (req, res) => {
    const users = await Users.findOne({ _id: req.params.id })
    res.render('profile', { users })
})




//  Edit data

app.get('/edit/:id', async (req, res) => {
    const users = await Users.findOne({ _id: req.params.id })
    res.render('edit', { users })
})

app.post('/edit/:id', async (req, res) => {
    const { userName, userEmail, userMobile } = req.body;

    try {
        await Users.findByIdAndUpdate(req.params.id, {
            userName,
            userEmail,
            userMobile
        });

        res.redirect('/view');
    } catch (err) {
        res.status(500).send('Error updating user');
    }
});




// Delete data
app.get('/delete/:id', async (req, res) => {
    const user = await Users.findById(req.params.id);
    res.render('delete', { users: user });
});

app.get('/delete/:id/confirm', async (req, res) => {
    try {
        await Users.findByIdAndDelete(req.params.id);
        res.redirect('/view');
    } catch (err) {
        res.status(500).send("Failed to delete user");
    }
});



app.listen(port, () => {
    console.log(`server Start : http://localhost:${port}`)
})