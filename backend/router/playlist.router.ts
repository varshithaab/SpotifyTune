const express=require('express');
// import express from "express";

const router = express.Router();
import asyncHandler from "express-async-handler";
import { PlaylistModel } from "../models/playlist.model";




router.get("/", asyncHandler(async (req, res) => {
  const playlists = await PlaylistModel.find().populate({
    path: "playlistSongs",
    select: "id,title,artist,album,genre,image,audio"
  });
  res.json(playlists);
}));

router.get("/:id", asyncHandler(async (req, res) => {
  const playlistId = req.params.id;
  const playlist = await PlaylistModel.findOne({ id: playlistId }).populate('playlistSongs');
  if (!playlist) {
    res.status(404).json({ error: 'Playlist not found' });
  } else {
    res.json(playlist);
  }
}));



router.post("/", asyncHandler(async (req, res) => {
    const {playlistName,playlistSongs,description}=req.body;
    const newPlaylist = new PlaylistModel({
      id: (await PlaylistModel.countDocuments()) + 1,
      playlistName: playlistName,
      playlistSongs:playlistSongs,
      description: description,
    });
    
  
    try {
      const createdNewPl = await newPlaylist.save();
      res.status(201).json({
        message: 'playlist added Successfully',
        playlist: createdNewPl,
      });
    } catch (error) {
      console.error('Error while adding playlist:', error);
      res.status(500).json({
        message: 'An error occurred while adding the playlist.',
      });
    }
  }));


export default router;

