// server.js
/*
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Spotify-Tune', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

// Define Mongoose schema and model
const songSchema = new mongoose.Schema({
    id: Number,
    title: String,
    artist: String,
    album: String,
    image: String,
    audio: String
});
// Define Mongoose schema and model for podcasts
const podcastSchema = new mongoose.Schema({
    id: Number,
    title: String,
    artist: String,
    album: String,
    image: String,
    audio: String
});

const Podcast = mongoose.model('Podcast', podcastSchema);
const Song = mongoose.model('Song', songSchema);

// API routes
app.get('/api/songs', async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Retrieve song by id
app.get('/api/songs/:id', async (req, res) => {
    try {
        const song = await Song.findOne({ id: req.params.id });
        if (!song) {
            return res.status(404).json({ error: 'Song not found' });
        }
        res.json(song);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API routes for podcasts
app.get('/api/podcasts', async (req, res) => {
    try {
        const podcasts = await Podcast.find();
        res.json(podcasts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Retrieve podcast by id
app.get('/api/podcasts/:id', async (req, res) => {
    try {
        const podcast = await Podcast.findOne({ id: req.params.id });
        if (!podcast) {
            return res.status(404).json({ error: 'Podcast not found' });
        }
        res.json(podcast);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});

*/