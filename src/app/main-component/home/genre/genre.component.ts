import { Component, Input } from '@angular/core';
import { Genre } from '../../../shared/models/genre';
import { SongService } from '../../../services/song.service';
import { Song } from '../../../shared/models/song';
import { Router } from '@angular/router';
import { Music } from '../../../Models/playlistModel';
import { MusicService } from '../../../services/music.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
})
export class GenreComponent {
[x: string]: any;
  genresimg = [
    { name: 'All', image: 'assets/all.jpg' },
    { name: 'Happy', image: 'assets/happy.jpg' },
    { name: 'Nostalgic', image: 'assets/nostalgic.jpg' },
    { name: 'Melody', image: 'assets/melody.jpg' },
    { name: 'Romantic', image: 'assets/romantic.jpg' },
    { name: 'Soulful', image: 'assets/soulful.jpg' },
    { name: 'Epic', image: 'assets/epic.jpg' },
    { name: 'Enthusiastic', image: 'assets/enthusiastic.jpg' },
    { name: 'Dreamy', image: 'assets/dreamy.jpg' },
    { name: 'Funky', image: 'assets/funky.jpg' },
    { name: 'melancholic', image: 'assets/melancholic.jpg' },
    { name: 'mystical', image: 'assets/mystical.jpg' },
    { name: 'upbeat', image: 'assets/upbeat.jpg' },
    { name: 'energetic', image: 'assets/energetic.jpg' },
    {
      name:'inspirational',image:'assets/inspirational.jpg' }
  ];

  @Input() isGenrePage: boolean = false;
  genres?: Genre[];
  showResults: boolean = false;
  message: boolean = true;
  isshowFilter: boolean = false;
  songs: Song[] = [];
  i: any;


  musics: Music[] = [];


  constructor(
    private songService: SongService,
    private router: Router
, private musicservice :MusicService  ) {}

  ngOnInit(): void {
    this.loadGenres();
    this.songService.currentMessage.subscribe(
      (message) => (this.message = message)
    ); 
    this.route.params.subscribe(params => {
      const genreId = params['genreId'];
      if (genreId) {
      
      }
    });
  }

  loadGenres(): void {
    this.songService.getAllGenre().subscribe((serverGenres) => {
      this.genres = serverGenres;
    });
  }

  navigateToGenre(genreName: string): void {
    this.showResults = true;
    this.isshowFilter = true;
    this.songService.genreFlow(true);
    this.songService.getAllSongsByGenre(genreName).subscribe((res) => {
      this.songs = res;
    });
  }

  navigateBackToGenres(): void {
    this.showResults = false;
    this.isshowFilter = false;
    this.router.navigate(['/home/filter/genre']);
  }

  navigateBackToFilter(): void {
    this.showResults = false;
    this.isshowFilter = false;
    this.router.navigate(['/home/filter']);
  }

  

  
  getGenreImage(genreName: string): string | undefined {
    const genreImage = this.genresimg.find((img) => img.name.toLowerCase() === genreName.toLowerCase());
    console.log(`genre: ${genreName}, Image: ${genreImage?.image}`); // Debugging log
    return genreImage ? genreImage.image : undefined;
  }

  navigateToPlay(song:Song){
    console.log(song);
    const songTitle=song.title;
    this.musicservice.getSongByTitle(songTitle).subscribe(
      (res)=>{
        console.log("REsopnse",res.id);
        this.router.navigate(['/home/play',res.id]);
      }
    );

  }


  
  
}
