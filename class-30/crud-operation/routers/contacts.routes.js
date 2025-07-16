import express from 'express';
const router = express.Router();
import Users from '../models/users_model.js';


router.get('/', (req, res) => {
    let ducat = "Home"
    res.render('home', { ducat })
})
router.get('/insert', (req, res) => {
    let ducat = req.path
    res.render('insert', { ducat })
})

router.post('/insert', async (req, res) => {
    await Users.insertOne({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userMobile: req.body.userMobile,
    })

    res.redirect("/view")
})

router.get('/view', async (req, res) => {
    const users = await Users.find()
    // res.json(users);
    res.render('view', { users })
})

router.get('/view/:id', async (req, res) => {
    const users = await Users.findOne({ _id: req.params.id })
    res.render('profile', { users })
})




//  Edit data

router.get('/edit/:id', async (req, res) => {
    const users = await Users.findOne({ _id: req.params.id })
    res.render('edit', { users })
})

router.post('/edit/:id', async (req, res) => {
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
router.get('/delete/:id', async (req, res) => {
    const user = await Users.findById(req.params.id);
    res.render('delete', { users: user });
});

router.get('/delete/:id/confirm', async (req, res) => {
    try {
        await Users.findByIdAndDelete(req.params.id);
        res.redirect('/view');
    } catch (err) {
        res.status(500).send("Failed to delete user");
    }
});

export default router;