import dotenv from 'dotenv';
dotenv.config();
import { dbConnect } from '../configs/database.config';
dbConnect();
import express from "express";
import songRouter from "../router/song.router"
 import cors from "cors";


const app=express();

app.use(
    cors(
        {
            credentials:true,
            origin:["http://localhost:4200"]
    
    
        }
    )
);
app.use("/api/songs",songRouter)



const port = 5000;
app.listen(port,()=>
{
    console.log("Website served on http://localhost:"+port);
})
