import { Component } from '@angular/core';
import { MusicService } from '../../../services/music.service';
@Component({
  selector: 'app-viewsongs',
  templateUrl: './viewsongs.component.html',
  styleUrl: './viewsongs.component.css'
})
export class ViewsongsComponent {
  songs: any[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.loadSongs();
  }

  loadSongs() {
    this.musicService.getSongs().subscribe(
      (response) => {
        this.songs = response;
        console.log('Songs loaded successfully:', this.songs);
      },
      (error) => {
        console.error('Error loading songs:', error);
      }
    );
  }
}
