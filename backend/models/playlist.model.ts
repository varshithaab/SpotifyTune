// import { Schema, Types, model } from "mongoose";
// import { Music } from "./music.model";

// export interface Playlist {
//     id: string;
//     playlistName: string;
//  playlistSongs: Types.ObjectId[] |Music[];
//     // playlistSongs:number[];//try
//     description: string;
// }

// const PlaylistSchema = new Schema<Playlist>(
//     {
//         id: { type:String},
//         playlistName: { type: String, required: true },
//         playlistSongs: [{ type: Schema.Types.ObjectId, ref: 'Music' }],
//         // playlistSongs:[{type:Number,ref:'Music'}],//try
//         description: { type: String, required: true }
//     },
//     {
//         toJSON: {
//             virtuals: true
//         },
//         toObject: {
//             virtuals: true
//         },
//         timestamps: true
//     }
// );
// PlaylistSchema.methods.addSong=async function(songId:Types.ObjectId){
//     const playlist=this as Playlist;
//     playlist.playlistSongs.push(songId);
//     return playlist.save();
// }
// export const PlaylistModel = model<Playlist>('Playlist', PlaylistSchema);


// import { Schema, Types, model } from "mongoose";
// import { Music } from "./music.model";

// export interface Playlist {
//     id: string;
//     playlistName: string;
//     playlistSongs: Music[];
//     description: string;
// }

// const PlaylistSchema = new Schema<Playlist>(
//     {
//         id: { type: String },
//         playlistName: { type: String, required: true },
//         playlistSongs: [{ type: Schema.Types.ObjectId, ref: "Music" }],
//         description: { type: String, required: true }
//     },
//     {
//         toJSON: {
//             virtuals: true
//         },
//         toObject: {
//             virtuals: true
//         },
//         timestamps: true
//     }
// );

// PlaylistSchema.methods.addSong = async function (songId: Types.ObjectId) {
//     const playlist = this as PlaylistModel;
//     const song = await Music.findById(songId);
//     if (!song) {
//         throw new Error("Song not found");
//     }
//     playlist.playlistSongs.push(songId);
//     await playlist.save();
// }
//export const PlaylistModel = model<Playlist>("Playlist", PlaylistSchema);

import { Schema, model } from "mongoose";

const PlaylistSchema = new Schema({
  id: { type: String, required: true, unique: true },
  playlistName: { type: String, required: true },
  playlistSongs: [{ type: Schema.Types.ObjectId, ref: "Music" }],
  description: { type: String, required: true },
});

export const PlaylistModel = model("Playlist", PlaylistSchema);


