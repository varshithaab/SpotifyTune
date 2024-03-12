import dotenv from 'dotenv';
dotenv.config();
import { dbConnect } from '../configs/database.config';
dbConnect();
import express from "express";
import songRouter from "../router/song.router";
import musicRouter from "../router/music.router"
import playlistRouter from '../router/playlist.router';
 import cors from "cors";
 import bodyParser from 'body-parser';
import podcastRouter from '../router/podcast.router';



const app=express();

app.use(bodyParser.json());
app.use(cors());
app.use(
    cors(
        {
            credentials:true,
            origin:["http://localhost:4200"]
    
    
        }
    )
);
app.use("/api/songs",songRouter);
app.use("/api/music",musicRouter);
app.use("/api/podcast", podcastRouter);
app.use("/api/playlists",playlistRouter);

const port = 5000;
app.listen(port,()=>
{
    console.log("Website served on http://localhost:"+port);

})

function asynchandler(arg0: (req: any, res: any) => Promise<void>): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
    throw new Error('Function not implemented.');
}

