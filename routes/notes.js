// Adding the CRUD Operations

const express = require('express');

const router = express.Router();
const Note = require('../models/Note');

// creating New Route
router.post('/', async (req, res) => {
    try {
        const note = new Note({
            title: req.body.title,
            content: req.body.content,
        });
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// to  Read all notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// to read a single note
router.get('/:id', async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: 'Note not found' });
        res.json(note);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// to update a note
router.put('/:id', async (req, res) => {
    try {
        const updateNote = await Note.findByIdAndUpdate(req.params.id, { title: req.body.title }, { new: true });
        if (!updateNote) return res.status(404).json({ message: 'Note not found' });
        res.json(updateNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// to delete a note
router.delete('/:id', async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) return res.status(404).json({ message: 'Note not found' });
        res.json({ message: 'Note deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
