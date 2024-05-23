import { Component, Input } from '@angular/core';
import { Artist } from '../../../shared/models/artist';
import { SongService } from '../../../services/song.service';
import { Song } from '../../../shared/models/song';
import { Router } from '@angular/router';
import { MusicService } from '../../../services/music.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css',
})
export class ArtistComponent {
  artistsimg = [
    { name: 'All', image: 'assets/all.jpg.jpg' },

    { name: 'Arijit Singh', image: 'assets/arijit.jpg' },
    { name: 'Sid Sriram', image: 'assets/sid.jpg' },
    { name: 'KK', image: 'assets/kk.jpg' },
    { name: 'Atif Aslam', image: 'assets/atifaslam.jpg' },
    { name: 'Jaspreet Jasz', image: 'assets/jaspreetjasz.jpg' },
    { name: 'Mohana Bhogaraju', image: 'assets/mohanabhogaraju.jpg' },
    { name: 'Gajendra Verma', image: 'assets/gajendraverma.jpg' },
    { name: 'Vishal and Shekhar', image: 'assets/vishalandshekar.jpg' },
    { name: 'Tulsi Kumar, Akhil Sachdeva', image: 'assets/tulsikumarakhilsachdeva.jpg' }, // Update with correct filename
    { name: 'Eagles', image: 'assets/eagles.jpg' },
    { name: 'Mark Ronson', image: 'assets/markronson.jpg' },
    { name: 'Journey', image: 'assets/journey.jpg' },
    { name: 'Neeraj Shridhar', image: 'assets/neerajshridhar.jpg' },
    { name: 'Queen', image: 'assets/queen.jpg' },
    { name: 'Ed Sheeran', image: 'assets/edsheeran.jpg' },
    { name: 'Sachin and Jigar', image: 'assets/sachinandjigar.jpg' }, // Ensure this image exists
    { name: 'Shreya Ghoshal', image: 'assets/shreya.jpg' },
    { name: 'Ved Sharma', image: 'assets/vedsharma.jpg' },
    { name: 'Badshah', image: 'assets/badshah.jpg' },
    { name: 'Armaan Malik', image: 'assets/armaanmalik.jpg' }
  ];
  
  
  @Input() isArtistPage: boolean = false;

  message: boolean = true;
  isshowFilter: boolean = false;
  showResults: boolean = false;

  songs: Song[] = [];
  artists?: Artist[];

  constructor(private songService: SongService, private router: Router ,private musicservice:MusicService) {}

  ngOnInit(): void {
    this.loadArtists();
    this.songService.currentMessage.subscribe((message) => (this.message = message));
  }

  loadArtists(): void {
    this.songService.getAllArtist().subscribe((serverArtists) => {
      this.artists = serverArtists;
      console.log('Loaded artists:', this.artists); // Debugging log
    });
  }

  navigateToArtist(artistName: string): void {
    this.isshowFilter = true;
    this.showResults = true;
    this.songService.artistFlow(true);
    this.songService.getAllSongsByArtist(artistName).subscribe((res) => {
      this.songs = res;
    });
  }

  navigateBackToArtists(): void {
    this.showResults = false;
    this.isshowFilter = false;
    this.router.navigate(['/artist']);
  }

  getArtistImage(artistName: string): string | undefined {
    const artistImage = this.artistsimg.find((img) => img.name.toLowerCase() === artistName.toLowerCase());
    console.log(`Artist: ${artistName}, Image: ${artistImage?.image}`); // Debugging log
    return artistImage ? artistImage.image : undefined;
  }

  navigateToPlay(song:Song){
    console.log(song);
    const songTitle=song.title;
    this.musicservice.getSongByTitle(songTitle).subscribe(
      (res)=>{
        console.log("REsopnse",res.id);
        this.router.navigate(['/play',res.id]);
      }
    );

  }

}
