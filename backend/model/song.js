const mongoose = require("mongoose");
const Joi = require("joi");

const songSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    image: { type: String, required: true },
    audio: { type: String, required: true }
});

const validate = (song) => {
    const schema = Joi.object({
        id: Joi.number().required(),
        title: Joi.string().required(),
        artist: Joi.string().required(),
        album: Joi.string().required(),
        image: Joi.string().required(),
        audio: Joi.string().required()
    });
    return schema.validate(song);
};

const Song = mongoose.model('Song', songSchema);

module.exports = { Song, validate };
