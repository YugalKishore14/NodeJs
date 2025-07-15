import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.get("/register", (req, res) => {
    res.render("register", { name: "Yugal" });
});

export default router;