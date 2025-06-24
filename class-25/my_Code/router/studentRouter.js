const express = require('express');
const router = express.Router();
const Student = require('../models/student_models');


router.get('/api/student', async (req, res) => {
    const student = await Student.find();
    res.json(student);
    res.status(500).json({ message: err.message });
});

module.exports = router;