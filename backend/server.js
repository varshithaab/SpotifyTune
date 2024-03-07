
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/Spotify-Tune', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

// Mongo model songs
const songSchema = new mongoose.Schema({
    id: Number,
    title: String,
    artist: String,
    album: String,
    image: String,
    audio: String
});
// Mongoose model podcasts
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

//songs
app.get('/api/songs', async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
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

//podcasts
app.get('/api/podcasts', async (req, res) => {
    try {
        const podcasts = await Podcast.find();
        res.json(podcasts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
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
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});

