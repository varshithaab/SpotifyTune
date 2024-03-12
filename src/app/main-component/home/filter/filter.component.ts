import { Component } from '@angular/core';
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
  isArtistFlow: boolean = false;

  songs: Song[] = [];
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
    this.SongService.a.subscribe((message) => (this.isGenreFlow = message));
    this.SongService.b.subscribe((message) => (this.isArtistFlow = message));
  }

  
}
