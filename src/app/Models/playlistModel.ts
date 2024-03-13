

export interface PlayList {
    id: string;
    playlistName: string;
    playlistSongs: Music[]; // Change this line
    description: string;
  }

  export interface Music{
    id:number,//try
    title:string,
    artist:string,
    album:string,
    
    image:string,
    genre:string,
    audio:string
}