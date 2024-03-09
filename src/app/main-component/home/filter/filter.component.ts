import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Song } from '../../../shared/models/song';
import { SongService } from '../../../services/song.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  

  
  message: boolean=false;
  songs:Song[]=[];
  constructor(private router: Router,private SongService:SongService,activatedRoute:ActivatedRoute){

    let songsObservable:Observable<Song[]>;
    
    activatedRoute.params.subscribe((params)=>
    {
      if(params.searchTerm)
      {
        songsObservable=this.SongService.getAllSongsBySearchTerm(params.searchTerm);

      }
      else if (params['genre'])
      songsObservable = this.SongService.getAllSongsByGenre(params['genre']);
      else if (params['artist'])
      songsObservable = this.SongService.getAllSongsByArtist(params['artist']);
      else{
        songsObservable=SongService.getAll();
      }
      songsObservable.subscribe((serverSongs)=>
      {
        this.songs=serverSongs;
      })
      
    })
   
  }
  isFilterActive = true;
  showFilter = true;
  showGenreComponent = false;
  showArtistComponent = false;
  showSongList=false;

  toggleGenreAndArtist(component: string) {
    // Reset both genre and artist flags to false
    this.showFilter = false;
    this.showGenreComponent = false;
    this.showArtistComponent = false;

    // Set the flag for the clicked component to true
    if (component === 'genre') {
      this.showGenreComponent = true;
      this.showSongList = true;
      
    } else if (component === 'artist') {
      this.showArtistComponent = true;
      this.showSongList = true;
    }
  }
//   ngOnInit(): void {
//     this.SongService.currentMessage.subscribe(message => this.message = message);
// console.log("sharanya",this.message);
//   }

//   newMessage() {
//     this.SongService.changeMessage(true);
//   }

  
}
