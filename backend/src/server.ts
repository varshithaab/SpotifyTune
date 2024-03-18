import dotenv from 'dotenv';
dotenv.config();
import { dbConnect } from '../configs/database.config';
dbConnect();
import express from "express";
import RegRouter from "../router/reg.router";

import songRouter from "../router/song.router";
import musicRouter from "../router/music.router"
import playlistRouter from '../router/playlist.router';
 import cors from "cors";

 import { isValidUser } from '../router/reg.router'; // Import isValidUser function

 

 
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
app.use(express.json());
app.post('/api/login' ,async (req,res)=>{
    console.log('Received POST request');
    const { email, password } = req.body;

    try {
        const isValid = await isValidUser(email, password);

        if (isValid) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.get('/', (req, res) => {
    res.send('Hello, Express is running!');
  });

app.use("/api/songs",songRouter);
app.use("/api/music",musicRouter);
app.use("/api/podcast", podcastRouter);
 app.use("/api/regs",RegRouter);
 app.use("/api/playlists",playlistRouter);

const port = 5000;
app.listen(port,()=>
{
    console.log("Website served on http://localhost:"+port);

})

function asynchandler(arg0: (req: any, res: any) => Promise<void>): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
    throw new Error('Function not implemented.');
}

