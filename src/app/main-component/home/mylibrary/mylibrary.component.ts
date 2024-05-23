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
  getPlaylistBackgroundImage(playlist: PlayList): string {
    if (playlist.playlistSongs.length > 0 && playlist.playlistSongs[0].image) {
      console.log("Image path:", playlist.playlistSongs[0].image); // Check if the image path is correct
      return 'url(' + playlist.playlistSongs[0].image + ')';
    } else {
      console.log("No image found for playlist:", playlist.playlistName); // Check if the playlist has no songs or if the image path is missing
      return 'url(default-image-path.jpg)';
    }
  }
  
  
  backToList() {
    this.selectedPlaylist = null;
  }

  musicIdToAdd:string='';
  addingsongmessage='';
  addedflag:boolean=false;
  addMusicToPlaylist(): void {
    this.musicIdToAdd = this.route.snapshot.paramMap.get('musicId');
    console.log(this.musicIdToAdd);
    const stringMusicId = this.musicIdToAdd.toString();

    this.musicservice.getSongById(stringMusicId).subscribe(
        (response) => {
            console.log("response :", response);
           
            const songExists = this.selectedPlaylist.playlistSongs.some(song => song.id === response.id);

            if (songExists) {
                console.log("That song already exists in the playlist");
                this.addedflag=!this.addedflag;
                this.addingsongmessage="That song already exists in the playlist";

            } else {
               
                this.selectedPlaylist.playlistSongs.push(response);
                console.log("Updated the playlist with song:", this.selectedPlaylist);
              
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
 
  play(musicId: number): void {
    
    this.router.navigate(['/play', musicId]);
  }

  navigateBackToHome(): void {
  
    this.router.navigate(['/home/']);
  }
}
