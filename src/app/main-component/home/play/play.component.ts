import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from '../../../services/music.service';
import { HttpClient } from '@angular/common/http';
// import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})
export class PlayComponent implements OnInit{
  song: any;
  isPlaying: boolean = false;
  songs: any[] = []; 
  currentSongIndex: number = 0;
  isRepeat: boolean = false;
  audio: HTMLAudioElement | null = null;
  
  // @Inject(DOCUMENT) private document: Document,
  constructor(private route: ActivatedRoute, private router: Router, private musicService: MusicService, private http: HttpClient ){ }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const songId = params['id'];
      this.loadSongs();
      this.loadSong(songId); 
  });
  }

  loadSongs(): void {
    this.http.get<any[]>('http://localhost:3000/api/songs').subscribe(
      (songs: any[]) => {
        this.songs = songs;
      }
    );
  }

  loadSong(id: number): void {
    this.http.get<any>(`http://localhost:3000/api/songs/${id}`).subscribe(
      (song: any) => {
        this.song = song;
        this.playSong();
      });
  }


  playSong(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.audio = new Audio(`http://localhost:3000/${this.song.audio}`);
    this.audio.load();
    this.audio.play();
    this.isPlaying = true;
  }

  pauseSong(): void {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  previousSong(): void {
  this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
  this.loadSong(this.songs[this.currentSongIndex].id);
  this.isPlaying = false;
}

  nextSong(): void {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.loadSong(this.songs[this.currentSongIndex].id);
    this.isPlaying = false;
  }

togglePlayPause(): void {
  if (this.isPlaying) {
    this.pauseSong();
  } else {
    this.playSong();
  }
}
addToPlaylist(): void {
//logic
}

}