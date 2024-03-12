import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Genre } from '../../../shared/models/genre';
import { SongService } from '../../../services/song.service';


import { Song } from '../../../shared/models/song';
import { Router } from '@angular/router';
@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css',
})
export class GenreComponent {
 
  @Input() isGenrePage: boolean = false;
  genres?: Genre[];

  message: boolean = true;
  isshowFilter: boolean = false;
  songs: Song[] = [];

  constructor(
    private songService: SongService,private router:Router
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

}
