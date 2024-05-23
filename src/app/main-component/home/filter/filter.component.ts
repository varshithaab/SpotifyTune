import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Song } from '../../../shared/models/song';
import { SongService } from '../../../services/song.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  isGenreFlow: boolean = false;
  isArtistFlow: boolean = false;
  isFilter: boolean = false;
  songs: Song[] = [];
  isFilterView: boolean = false;

  isFilterActive: boolean = true;
  showFilter: boolean = true;
  showGenreComponent: boolean = false;
  showArtistComponent: boolean = false;
  showSongList: boolean = false;

  constructor(
    private router: Router,
    private songService: SongService,
    private activatedRoute: ActivatedRoute
  ) {
    let songsObservable: Observable<Song[]>;

    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        songsObservable = this.songService.getAllSongsBySearchTerm(params.searchTerm);
      } else if (params['genre']) {
        songsObservable = this.songService.getAllSongsByGenre(params['genre']);
      } else if (params['artist']) {
        songsObservable = this.songService.getAllSongsByArtist(params['artist']);
      } else {
        songsObservable = this.songService.getAll();
      }

      songsObservable.subscribe((serverSongs) => {
        this.songs = serverSongs;
      });
    });
  }

  ngOnInit(): void {
    this.isFilterView = true;

    this.songService.a.subscribe((message) => (this.isGenreFlow = message));
    this.songService.b.subscribe((message) => (this.isArtistFlow = message));
    this.songService.c.subscribe((message) => {
      this.isFilter = message;
      if (this.isFilter) {
        this.showFilter = true;
      }
    });

    console.log(this.isFilter);
  }

  toggleGenreAndArtist(component: string): void {
    this.showFilter = false;
    this.showGenreComponent = false;
    this.showArtistComponent = false;

    if (component === 'genre') {
      this.router.navigate(['/home/filter/genre']);
      this.showGenreComponent = true;
      this.showSongList = true;
    } else if (component === 'artist') {
      this.router.navigate(['/home/filter/artist']);
      this.showArtistComponent = true;
      this.showSongList = true;
    }
  }

  backToFilter(): void {
    this.showFilter = true;
    this.showGenreComponent = false;
    this.showArtistComponent = false;
    this.showSongList = false;
  }
}
