const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Create
router.post("/", async (req, res) => {
    const contact = new Contact(req.body);
    await contact.save();
    res.json(contact);
});

// Read
router.get("/", async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

// Update
router.put("/:id", async (req, res) => {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// Delete
router.delete("/:id", async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});

module.exports = router;
