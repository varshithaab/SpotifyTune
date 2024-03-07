import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { PodcastService } from '../../../services/podcast.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.css'
})
export class PodcastComponent implements OnInit {
addToPlaylist() {
throw new Error('Method not implemented.');
}
  podcasts: any[] = [];

  constructor(private router: Router,private podcastService: PodcastService) { }

    ngOnInit(): void {
      this.podcastService.getPodcasts().subscribe(
        (data: any[]) => {
          this.podcasts = data;
        } );
      }

goToPlay(id: number): void {
  this.router.navigate(['/play/podcast', id]);
}
play(musicId: number): void {
  this.router.navigate(['/play', musicId]);
}
}