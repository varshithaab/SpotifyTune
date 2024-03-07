import { Schema, model } from "mongoose";

export interface Music {
    id: number;
    title: string;
    artist: string;
    album: string;
    genre: string;
    image: string;
    audio: string;
}

const MusicSchema = new Schema<Music>(
    {
        title: { type: String, required: true },
        artist: { type: String, required: true },
        album: { type: String, required: true },
        genre: { type: String, required: true },
        image: { type: String, required: true },
        audio: { type: String, required: true }
    },
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
);


export const MusicModel = model<Music>('Music', MusicSchema);
