import express, { Router } from "express";
import asyncHandler from "express-async-handler";
import { MusicModel } from "../models/music.model";

const router: Router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const music = await MusicModel.find();
    res.json(music);
}));

router.get("/:id", asyncHandler(async (req, res) => {
    const musicId = req.params.id;

    const music = await MusicModel.findById(musicId);
    if (!music) {
        res.status(404).json({ error: 'Music not found' });
    } else {
        res.json(music);
    }
}));

// Get music by title
router.get('/title/:title', asyncHandler(async (req, res) => {
    const title = req.params.title;
    const music = await MusicModel.findOne({ title: title }).exec();
  
    if (!music) {
      res.status(404).json({ error: 'Music not found' });
    } else {
      res.json(music);
    }
  }));
//Delete Code - Admin Functionality
// Delete music by ID
router.delete('/:id', asyncHandler(async (req, res) => {
    const musicId = req.params.id;
    const deletedMusic = await MusicModel.findByIdAndDelete(musicId);
    
    if (!deletedMusic) {
        res.status(404).json({ error: 'Music not found' });
    } else {
        res.json({ message: 'Music deleted successfully', deletedMusic });
    }
}));

export default router;
