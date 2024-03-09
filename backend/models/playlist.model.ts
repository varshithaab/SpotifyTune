import { Schema, model } from "mongoose";
import { Song } from "../models/song.model";

export interface Playlist {
    id: number;
    playlistName: string;
    songsPlaylist: Array<Song>;
    description: string;
}

export const PlaylistSchema = new Schema<Playlist>(
    {
        playlistName: { type: String, required: true },
        songsPlaylist: [{ type: Schema.Types.ObjectId, ref: 'Song' }], // Reference to SongModel
        description: { type: String }
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

