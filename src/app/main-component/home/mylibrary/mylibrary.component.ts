import { Component } from '@angular/core';
import { PlayList } from '../../../Models/playlistModel';
import { PlaylistService } from '../../../services/playlist.service';

@Component({
  selector: 'app-mylibrary',
  templateUrl: './mylibrary.component.html',
  styleUrl: './mylibrary.component.css'
})
export class MylibraryComponent {
  playlistData:PlayList[]=[];

  selectedPlaylist:PlayList |null=null;
  
  constructor(private playlistservice:PlaylistService){}
  
  ngOnInit(): void {
    this.getAllPlaylists();
  }
  getAllPlaylists(){
    console.log("showing all playlist")
    this.playlistservice.getAllPlaylists().subscribe(playlists => {
      this.playlistData = playlists;
    });

  }


  

  showPlaylist(id:string){
    
    console.log("id:",id);
    this.playlistservice.getPlaylistById(id).subscribe(selectedplaylist=>{
      this.selectedPlaylist=selectedplaylist;
      console.log(this.selectedPlaylist);

    });
    
  }
  

}
