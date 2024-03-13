import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MusicService } from '../../../services/music.service';
import { PodcastService } from '../../../services/podcast.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  music: any;
  musics: any[] = [];
  podcasts: any[] = [];
  podcast: any;
  isPlaying: boolean = false;
  currentMusicIndex: number = 0;
  currentPodcastIndex: number = 0;
  audio: HTMLAudioElement | null = null;
  displayMusic: boolean = false;
  displayPodcast: boolean = false;
  progressValue: number = 0;
  currentTime: string = '00:00';
  duration: string = '00:00';
  @ViewChild('progressSlider') progressSlider!: ElementRef<HTMLInputElement>;

  constructor(private route: ActivatedRoute, private router: Router, private musicService: MusicService, private podcastService: PodcastService, private http: HttpClient) { }

  ngOnInit(): void {
  
    this.loadMusics();
    this.loadPodcasts();

    this.route.params.subscribe(params => {
     
      const musicId = params['musicId'];
      const podcastId = params['podcastId'];
     

      if (podcastId) {
        this.loadPodcast(podcastId);
      } else if (musicId) {
        this.loadMusic(musicId);
        console.log("in load muisc ngoninit:",musicId);
      }
    });
  }

  loadMusic(id: number): void {
  
    this.http.get<any>(`http://localhost:5000/api/music/${id}`).subscribe(
      (music: any) => {
        this.music = music;
        this.displayMusic = true;
        this.displayPodcast = false;
        this.play();
      }
    );
  }
  loadMusics(): void {
    this.http.get<any[]>('http://localhost:5000/api/music').subscribe(
      (musics: any[]) => {
        this.musics = musics;
      }
    );
  }

  loadPodcast(id: number): void {
    this.http.get<any>(`http://localhost:5000/api/podcast/${id}`).subscribe(
      (podcast: any) => {
        this.podcast = podcast;
        this.displayPodcast = true;
        this.displayMusic = false;
        this.play();
      }
    );
  }

  loadPodcasts(): void {
    this.http.get<any[]>('http://localhost:5000/api/podcast').subscribe(
      (podcasts: any[]) => {
        this.podcasts = podcasts;
      }
    );
  }

  play(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.audio = new Audio(this.displayMusic ? `${this.music.audio}` : `${this.podcast.audio}`);
    this.audio.load();
    this.audio.play();
    this.isPlaying = true;
    this.audio.addEventListener('timeupdate', this.updateProgress.bind(this));
    this.audio.addEventListener('ended', this.onAudioEnded.bind(this));
}

  pause(): void {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  togglePlayPause(): void {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  onAudioEnded(): void {
    this.isPlaying = false;
    this.next();
  }

  previous(): void {
    console.log("previous,", this.musics.length )
    if (this.displayMusic && this.musics.length > 0) {
      this.currentMusicIndex = (this.currentMusicIndex - 1 + this.musics.length) % this.musics.length;
      this.loadMusic(this.musics[this.currentMusicIndex].id);
    } else if (this.displayPodcast && this.podcasts.length > 0) {
      this.currentPodcastIndex = (this.currentPodcastIndex - 1 + this.podcasts.length) % this.podcasts.length;
      this.loadPodcast(this.podcasts[this.currentPodcastIndex].id);
    }
  }

  next(): void {
    if (this.displayMusic && this.musics.length > 0) {
      this.currentMusicIndex = (this.currentMusicIndex + 1) % this.musics.length;
      this.loadMusic(this.musics[this.currentMusicIndex].id);
    } else if (this.displayPodcast && this.podcasts.length > 0) {
      this.currentPodcastIndex = (this.currentPodcastIndex + 1) % this.podcasts.length;
      this.loadPodcast(this.podcasts[this.currentPodcastIndex].id);
    }
  }

   seek(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = parseFloat(target.value);
    const duration = this.audio ? this.audio.duration : 0;
    const seekTime = duration * (value / 100);
    if (this.audio) {
      this.audio.currentTime = seekTime;
    }
  }

  updateProgress(): void {
    if (this.audio) {
      this.progressValue = (this.audio.currentTime / this.audio.duration) * 100;
      this.currentTime = this.formatTime(this.audio.currentTime);
      this.duration = this.formatTime(this.audio.duration);
    }
  }

  formatTime(time: number): string {
    const minutes: string = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds: string = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  

  addToPlaylist() {
    throw new Error('Method not implemented.');
    }
}