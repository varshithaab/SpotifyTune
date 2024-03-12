import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayList } from '../../../Models/playlistModel';
import { PlaylistService } from '../../../services/playlist.service';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrl: './create-playlist.component.css'
})
export class CreatePlaylistComponent {
  constructor(private playlistservice: PlaylistService,private http:HttpClient) { }

playlistData: PlayList[] = [];
NewPlayListForm: FormGroup;


ngOnInit(): void {
  this.NewPlayListForm = new FormGroup({
    newplaylistname: new FormControl(null, [Validators.required]),
    newplaylistdesc: new FormControl(null)
  });
  this.getAllPlaylists();
}
getAllPlaylists(){
this.playlistservice.getAllPlaylists().subscribe(playlists => {
  this.playlistData = playlists;
  console.log(this.playlistData);
});
}


onCreatePlaylist(): void {
  const newPlaylist: PlayList = {
    id: '',
    playlistName: '',
    description: '',
    playlistSongs: []
  };
  
  
  newPlaylist.playlistName = this.NewPlayListForm.get('newplaylistname').value;
  newPlaylist.description = this.NewPlayListForm.get('newplaylistdesc').value;
  console.log(newPlaylist)
  this.playlistservice.createPlaylist(newPlaylist).subscribe((response) => {
      console.log('Playlist created successfully:', response);
      this.playlistData.push(response);
      this.getAllPlaylists();
      this.NewPlayListForm.reset();
  });
}










}
