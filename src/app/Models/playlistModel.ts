

export interface PlayList {
    id: string;
    playlistName: string;
    playlistSongs: Music[]; // Change this line
    description: string;
  }

  export interface Music{
    id:string,
    title:string,
    artist:string,
    album:string,
    genre:string,
    image:string,
    audio:string
}