import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { Song } from '../../../shared/models/song';
import { SongService } from '../../../services/song.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  isGenreFlow: boolean = false;
<<<<<<< HEAD
  isArtistFlow: boolean = false;
 isFilter:Boolean=false;
=======
 isFilter:boolean=false;
>>>>>>> f63f43071cda5c3820a55961dba797b6cbd3414a
  songs: Song[] = [];
  isFilterView;
  constructor(
    private router: Router,
    private SongService: SongService,
    activatedRoute: ActivatedRoute
  ) {
    let songsObservable: Observable<Song[]>;

    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        songsObservable = this.SongService.getAllSongsBySearchTerm(
          params.searchTerm
        );
      } else if (params['genre'])
        songsObservable = this.SongService.getAllSongsByGenre(params['genre']);
      else if (params['artist'])
        songsObservable = this.SongService.getAllSongsByArtist(
          params['artist']
        );
      else {
        songsObservable = SongService.getAll();
      }
      songsObservable.subscribe((serverSongs) => {
        this.songs = serverSongs;
      });
    });
  }
  isFilterActive = true;
  showFilter = true;
  showGenreComponent = false;
  showArtistComponent = false;
  showSongList = false;
  message: boolean = false;

  toggleGenreAndArtist(component: string) {
    this.showFilter = false;
    this.showGenreComponent = false;
    this.showArtistComponent = false;

    if (component === 'genre') {
      this.showGenreComponent = true;
      this.showSongList = true;
    } else if (component === 'artist') {
      this.showArtistComponent = true;
      this.showSongList = true;
    }
  }

  ngOnInit(): void {
    this.isFilterView = true;
    this.SongService.a.subscribe((message) => (this.isGenreFlow = message));
<<<<<<< HEAD
    this.SongService.b.subscribe((message) => (this.isArtistFlow = message));
    this.SongService.c.subscribe((message)=>(this.isFilter=message));
=======
    this.SongService.c.subscribe((message)=>{
      this.isFilter=message;
      if(this.isFilter){
        this.showFilter = true;
      }
    });
>>>>>>> f63f43071cda5c3820a55961dba797b6cbd3414a
    console.log(this.isFilter)
    
  }
<<<<<<< HEAD

  
  

  


  
=======
>>>>>>> f63f43071cda5c3820a55961dba797b6cbd3414a
}
