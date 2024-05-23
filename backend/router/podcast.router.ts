import express, { Router } from "express";
import asyncHandler from "express-async-handler";
import { PodcastModel } from "../models/podcast.model";

const router: Router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const podcasts = await PodcastModel.find();
    res.json(podcasts);
}));

router.get("/:id", asyncHandler(async (req, res) => {
    const podcastId = req.params.id;
    const podcast = await PodcastModel.findById(podcastId);
    if (!podcast) {
        res.status(404).json({ error: 'Podcast not found' });
    } else {
        res.json(podcast);
    }
}));


router.get('/title/:title', asyncHandler(async (req, res) => {
    const title = req.params.title;
    const music = await PodcastModel.findOne({ title: title }).exec();
  
    if (!music) {
      res.status(404).json({ error: 'Music not found' });
    } else {
      res.json(music);
    }
  }));

export default router;
