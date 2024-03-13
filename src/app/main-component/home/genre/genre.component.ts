import { Component, Input } from '@angular/core';
import { Genre } from '../../../shared/models/genre';
import { SongService } from '../../../services/song.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Song } from '../../../shared/models/song';
@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css',
})
export class GenreComponent {
  // genres?:Genre[];
  // constructor(SongService:SongService) {
  //   SongService.getAllGenre().subscribe(serverGenres => {

  //     this.genres = serverGenres;

  //   });
  //  }

  // ngOnInit(): void {
  // }
  @Input() isGenrePage: boolean = false;
  genres?: Genre[];

  message: boolean = true;
  isshowFilter: boolean = false;
  songs: Song[] = [];

  constructor(
    private songService: SongService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadGenres();
    this.songService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
  loadGenres(): void {
    this.songService.getAllGenre().subscribe((serverGenres) => {
      this.genres = serverGenres;
    });
  }
  navigateToGenre(genreName: string): void {
    this.isshowFilter = true;
    this.songService.genreFlow(true);
    this.songService.getAllSongsByGenre(genreName).subscribe((res) => {
      this.songs = res;
    });
   
  }
  navigateBackToFilter(): void {
    // Navigate back to the parent route ("/home")
    this.router.navigate(['/filter']);
  }
}
