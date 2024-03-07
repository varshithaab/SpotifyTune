// Song.model.ts
import { Schema, model } from "mongoose";

export interface Song{
    id:number;
    title:string;
    artist:string;
    album:string;
    genre:string;
    image: string;
    audio: string
}
export const SongSchema = new Schema<Song>(
    {
        title: {type: String, required:true},
        artist:{type:String,required:true},
        genre:{type:String,required:true},
        image: {type: String, required:true},
        audio: {type: String, required:true}
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
    
)

export const SongModel =model<Song>('Song',SongSchema);
