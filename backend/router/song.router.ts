import express, { Router } from "express";
const router=Router();
import cors from "cors";
import asyncHandler  from "express-async-handler";
import { SongModel } from "../models/song.model";

import {PlaylistModel} from "../models/playlist.model"



// ))
router.get("/",asyncHandler(
async(req,res)=>{

    const songs = await SongModel.find();
    res.send(songs);
}))





router.get("/search/:searchTerm",asyncHandler(
async(req,res)=>
{
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    
   
    const songsBySongName = await SongModel.find({ title: { $regex: searchRegex } });
    const songsByGenre = await SongModel.find({ genre: { $regex: searchRegex } });
    const songsByArtistName = await SongModel.find({artist:{$regex:searchRegex}});

    const songsByAlbumName = await SongModel.find({album:{$regex:searchRegex}});

  
    const songs = [...songsBySongName, ...songsByGenre, ...songsByArtistName,...songsByAlbumName];
res.json(songs);


    
}))

router.get("/recommendations/:searchTerm", asyncHandler(async (req, res) => {
  try {
      const searchRegex = new RegExp(req.params.searchTerm, 'i');

      const songsBySongName = await SongModel.find({ title: { $regex: searchRegex } });
      const songsByGenre = await SongModel.find({ genre: { $regex: searchRegex } });
      const songsByArtistName = await SongModel.find({ artist: { $regex: searchRegex } });
      const songsByAlbumName = await SongModel.find({ album: { $regex: searchRegex } });

      const recommendations = [...songsBySongName, ...songsByGenre, ...songsByArtistName, ...songsByAlbumName];
      
      res.json(recommendations);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
}));



router.get(
    '/genre',
    asyncHandler(async (req, res) => {
      const genre = await SongModel.aggregate([
        {
          $unwind: '$genre',
        },
        {
          $group: {
            _id: '$genre',
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            name: '$_id',
            count: '$count',
          },
        },
      ]).sort({ count: -1 });
  
      const all = {
        name: 'All',
        count: await SongModel.countDocuments(),
      };
  
      genre.unshift(all);
      res.send(genre);
    })
  );
  router.get(
    '/genre/:genreName',
    asyncHandler(async (req, res) => {
      const songs = await SongModel.find({ genre: req.params.genreName });
      res.send(songs);
    })
  );


  router.get(
    '/artist',
    asyncHandler(async (req, res) => {
      const artist = await SongModel.aggregate([
        {
          $unwind: '$artist',
        },
        {
          $group: {
            _id: '$artist',
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            name: '$_id',
            count: '$count',
          },
        },
      ]).sort({ count: -1 });
  
      const all = {
        name: 'All',
        count: await SongModel.countDocuments(),
      };
  
      artist.unshift(all);
      res.send(artist);
    })
  );
  router.get(
    '/artist/:artistName',
    asyncHandler(async (req, res) => {
      const songs = await SongModel.find({ artist: req.params.artistName });
      res.send(songs);
    })
  );


  router.get("/api/playlists",asyncHandler(
    async(req,res)=>{
    
        const songs = await PlaylistModel.find();
        res.send(songs);
    }))
    

export default router;