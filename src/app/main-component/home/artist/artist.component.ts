import { Component, Input } from '@angular/core';
import { Artist } from '../../../shared/models/artist';
import { SongService } from '../../../services/song.service';
import { Song } from '../../../../../backend/models/song.model';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css',
})
export class ArtistComponent {
  @Input() isArtistPage: boolean = false;

  message: boolean = true;
  isshowFilter: boolean = false;
  songs: Song[] = [];

  artists?: Artist[];
  constructor(private SongService: SongService) {}

  ngOnInit(): void {
    this.loadArtists();
    this.SongService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
  loadArtists(): void {
    this.SongService.getAllArtist().subscribe((serverArtists) => {
      this.artists = serverArtists;
    });
  }
  navigateToArtist(artistName: string): void {
    this.isshowFilter = true;
    this.SongService.artistFlow(true);
    this.SongService.getAllSongsByArtist(artistName).subscribe((res) => {
      this.songs = res;
    });
  }
}
