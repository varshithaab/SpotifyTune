import express, { Router } from "express";
const router=Router();
import cors from "cors";
import asyncHandler  from "express-async-handler";
import { SongModel } from "../models/song.model";


// router.get("/seed",asyncHandler(

//     async(req,res)=>
//     {
//         const songsCOunt=await SongModel.countDocuments();
//         if(songsCOunt>0)
//         {
//             res.send("Seed is already done");
//             return;
//         }
//         await SongModel.create(sample_songs);

//         res.send("Seed is done");
//     }
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
    
   
    const songsBySongName = await SongModel.find({ songName: { $regex: searchRegex } });
    const songsByGenre = await SongModel.find({ genre: { $regex: searchRegex } });
    const songsByArtistName = await SongModel.find({artistName:{$regex:searchRegex}});

    const songs = [...songsBySongName, ...songsByGenre, ...songsByArtistName];
res.send(songs);
    
}))

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

export default router;
