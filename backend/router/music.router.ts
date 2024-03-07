//music router

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

export default router;