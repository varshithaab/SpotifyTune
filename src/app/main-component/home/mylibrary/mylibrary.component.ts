import { Component } from '@angular/core';
import { Music, PlayList } from '../../../Models/playlistModel';
import { PlaylistService } from '../../../services/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from '../../../services/music.service';

@Component({
  selector: 'app-mylibrary',
  templateUrl: './mylibrary.component.html',
  styleUrl: './mylibrary.component.css'
})
export class MylibraryComponent {
  playlistData:PlayList[]=[];
  playlist:PlayList;
    music:Music;//try
  selectedPlaylist:PlayList |null=null;
  
  constructor(private playlistservice:PlaylistService,private router:Router,private route: ActivatedRoute,private musicservice:MusicService){}
  
  ngOnInit(): void {
    this.getAllPlaylists();
  }
  getAllPlaylists(){
    console.log("showing all playlist")
    this.playlistservice.getAllPlaylists().subscribe(playlists => {
      this.playlistData = playlists;
    });

  }
  musicIdToAdd:string='';

  addMusicToPlaylist(): void {
    this.musicIdToAdd = this.route.snapshot.paramMap.get('musicId');
    console.log(this.musicIdToAdd);
    const stringMusicId = this.musicIdToAdd.toString();

    this.musicservice.getSongById(stringMusicId).subscribe(
        (response) => {
            console.log("response :", response);
            // Check if the song already exists in the playlist
            const songExists = this.selectedPlaylist.playlistSongs.some(song => song === response);

            if (songExists) {
                console.log("That song already exists in the playlist");
            } else {
                // Push the song to the playlist
                this.selectedPlaylist.playlistSongs.push(response);
                console.log("Updated the playlist with song:", this.selectedPlaylist);
                
                // Save or update the playlist in MongoDB
                this.playlistservice.updatePlaylist(this.selectedPlaylist,this.selectedPlaylist.playlistSongs).subscribe(
                    (updatedPlaylist) => {
                      
                        console.log("Playlist updated in MongoDB:", updatedPlaylist);
                    }
                );
            }
        }
    )
}




  
    
  

  showPlaylist(id:string){
    
    console.log("id:",id);
    this.playlistservice.getPlaylistById(id).subscribe(selectedplaylist=>{
      this.selectedPlaylist=selectedplaylist;
      console.log(this.selectedPlaylist);

    });
    
  }
  // play(songId: string): void {
  //   this.router.navigate(['/play', songId]);
  // }
  play(musicId: number): void {
    this.router.navigate(['/play', musicId]);
  }
}
