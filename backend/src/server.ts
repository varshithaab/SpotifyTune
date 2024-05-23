import dotenv from 'dotenv';
dotenv.config();
import { dbConnect } from '../configs/database.config';
dbConnect();
import express from "express";
import RegRouter from "../router/reg.router";
import PremiumRouter from '../router/premium.router';
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
 app.use("/api/subscribe",PremiumRouter)


 app.post('/chatbot', (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    let botReply = '';
  
    // Basic response logic tailored for a music app
    if (userMessage.includes('hello')) {
      botReply = 'Hello! How can I assist you with your music experience today?';
    } else if (userMessage.includes('playlist')) {
      botReply = 'You can create a new playlist by going to the "My Music" section and clicking on "Create Playlist".';
    } else if (userMessage.includes('subscription')) {
      botReply = 'Our subscription plans include Basic, Premium, and Family. You can view and manage your subscription in the "Account" section.';
    } else if (userMessage.includes('song')) {
      botReply = 'You can search for songs by using the search bar at the top of the app. Just type the song name or artist.';
    } else if (userMessage.includes('support')) {
      botReply = 'Our support team is here to help. You can reach out to them via the "Support" section in the app or call us at 1-800-MUSIC-HELP.';
    } else if (userMessage.includes('playlists') && userMessage.includes('view')) {
      botReply = 'You can see all your playlists in the "My Library" section under the "MyLibrary" tab.';
    } else if (userMessage.includes('podcast')) {
      botReply = 'You can find and listen to podcasts in the "Podcasts" section. You can also filter them by genre or topic.';
    } else if (userMessage.includes('filter by genre')) {
      botReply = 'To filter by genre, Go to filter section and the click on filter by genre and you can see all the genres. click on any gnere and find the songs';
    } else if (userMessage.includes('filter by artist')) {
      botReply = 'To filter by artist, Go to filter section  and the click on filter by artist';
    } else if (userMessage.includes('add') && userMessage.includes('playlist')) {
      botReply = 'To add a song to a playlist, navigate to the song you want to add, click on the "Plus" option. Then, choose the playlist you want to add the song to. and then click on plus button';
    }else if (userMessage.includes('premium')) {
      botReply = 'To upgrade to Premium, visit the "Premium" section and select the Premium subscription plan.';
    } else if (userMessage.includes('contact')) {
      botReply = 'For any further assistance or inquiries, please contact our support team at support@example.com.';
    } else  {
      botReply = 'I am sorry, I did not understand that. Can you please provide more details or rephrase your question?';
    }
     
    
  
    res.json({ reply: botReply });
  });

  
const port = 5000;
app.listen(port,()=>
{
    console.log("Website served on http://localhost:"+port);

})

function asynchandler(arg0: (req: any, res: any) => Promise<void>): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
    throw new Error('Function not implemented.');
}

