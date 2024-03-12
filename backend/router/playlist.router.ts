const express=require('express');


const router = express.Router();
import asyncHandler from "express-async-handler";
import { PlaylistModel } from "../models/playlist.model";
import { MusicModel } from "../models/music.model";

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


  router.post('/:id/add', asyncHandler(async (req, res) => {
    const playlistId = req.params.id;
    const music = req.body;
  
    const playlist = await PlaylistModel.findOne({ id: playlistId });
    if (!playlist) {
      res.status(404).json({ error: 'Playlist not found' });
      return;
    }
  
    playlist.playlistSongs.push(music._id);
    await playlist.save();
  
    res.json({ message: 'Music added to playlist successfully' });
  }));
  



// Route to handle updating a playlist
router.put('/:id', async (req:any, res:any) => {
  const plid = req.params.id;
  console.log("in router post",plid);

  try {
    // Find the playlist by ID
    const playlist = await PlaylistModel.findOne({id:plid});

    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }

    // Update the playlist with the request body

    playlist.playlistSongs= req.body.songs; // Update with the new songs
    console.log(req.body);

    // Save the updated playlist
    const updatedPlaylist = await playlist.save();
    console.log("in router post ",playlist);

    res.status(200).json(updatedPlaylist);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});



export default router;

