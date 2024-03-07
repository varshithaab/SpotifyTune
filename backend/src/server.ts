// Server.ts

import dotenv from 'dotenv';
dotenv.config();
import { dbConnect } from '../configs/database.config';
dbConnect();
import express from "express";
import musicRouter from "../router/music.router";
import podcastRouter from "../router/podcast.router";
import cors from "cors";

const app = express();

app.use(cors({ credentials: true, origin: ["http://localhost:4200"] }));

app.use("/api/music", musicRouter);
app.use("/api/podcast", podcastRouter);

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
});
