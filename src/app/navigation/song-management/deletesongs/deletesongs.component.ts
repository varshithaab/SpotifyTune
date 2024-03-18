import { Component } from '@angular/core';
import { MusicService } from '../../../services/music.service';
import { Music } from '../../../../../backend/models/music.model';

@Component({
  selector: 'app-deletesongs',
  templateUrl: './deletesongs.component.html',
  styleUrl: './deletesongs.component.css'
})
export class DeletesongsComponent {
  musicList: Music[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.loadMusic();
  }

  loadMusic() {
    this.musicService.getSongs().subscribe(
      (response) => {
        this.musicList = response;
        console.log('Music loaded successfully:', this.musicList);
      },
      (error) => {
        console.error('Error loading music:', error);
      }
    );
  }

  deleteMusic(id: number) {
    this.musicService.deleteSong(id).subscribe(
      (response) => {
        console.log('Music deleted successfully:', response);
        // Optionally, update the musicList after deletion
        this.loadMusic();
      },
      (error) => {
        console.error('Error deleting music:', error);
      }
    );
  }
}
