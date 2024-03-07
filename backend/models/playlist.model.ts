import { Schema, Types, model } from "mongoose";
import { Music } from "./music.model";

export interface Playlist {
    id: string;
    playlistName: string;
    playlistSongs: Types.ObjectId[] | Music[];
    description: string;
}

const PlaylistSchema = new Schema<Playlist>(
    {
        id: { type:String},
        playlistName: { type: String, required: true },
        playlistSongs: [{ type: Schema.Types.ObjectId, ref: 'Music' }],
        description: { type: String, required: true }
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

export const PlaylistModel = model<Playlist>('Playlist', PlaylistSchema);




