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
    newplaylistdesc: new FormControl(null,Validators.required)
  });
  this.getAllPlaylists();
}
getAllPlaylists(){
this.playlistservice.getAllPlaylists().subscribe(playlists => {
  this.playlistData = playlists;
  console.log(this.playlistData);
});
}
newplaylistcreated:boolean=false;
createdmessage='';



nameExists: boolean = false;

onCreatePlaylist(): void {
    const newPlaylistName = this.NewPlayListForm.get('newplaylistname').value;
    const existingPlaylist = this.playlistData.find(pl => pl.playlistName === newPlaylistName);

    if (existingPlaylist) {
      this.nameExists = true;
      this.createdmessage = 'Playlist name already exists. Please choose a different name.';
      this.NewPlayListForm.reset();
      return;
    }

    const newPlaylist: PlayList = {
      id: '',
      playlistName: newPlaylistName,
      description: this.NewPlayListForm.get('newplaylistdesc').value,
      playlistSongs: []
    };

    this.playlistservice.createPlaylist(newPlaylist).subscribe((response) => {
      console.log('Playlist created successfully:', response);
      this.playlistData.push(response);
      this.getAllPlaylists();
      this.NewPlayListForm.reset();
      this.createdmessage = 'Created Playlist successfully. Go to Library to check out your new playlist.';
      this.newplaylistcreated = true;
      this.nameExists = false;
    });
  }



}
