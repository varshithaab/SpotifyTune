import { Component } from '@angular/core';
import { Genre } from '../../../shared/models/genre';
import { SongService } from '../../../services/song.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
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
  genres?: Genre[];

  message: boolean=true;
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.loadGenres();
    // this.songService.changeFilter(true);
  //  this.songService.currentMessage.subscribe(message => this.message = message);
  
  }

  loadGenres(): void {

    // console.log("varshitha",this.message)
    // this.songService.changeMessage(true);
   
    this.songService.getAllGenre().subscribe(serverGenres => {
    //  console.log("varshitha",this.message)
    //   this.songService.changeMessage(true);
      this.genres = serverGenres;
    });
  }

 

}

