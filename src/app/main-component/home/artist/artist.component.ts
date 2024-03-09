import { Component } from '@angular/core';
import { Artist } from '../../../shared/models/artist';
import { SongService } from '../../../services/song.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {
  artists?:Artist[];
  constructor(SongService:SongService) {
    SongService.getAllArtist().subscribe(serverArtists => {
      this.artists = serverArtists;
    });
   }

  ngOnInit(): void {
  }

}
