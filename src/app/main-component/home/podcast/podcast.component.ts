import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PodcastService } from '../../../services/podcast.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.css'
})
export class PodcastComponent implements OnInit {
  podcasts: any[] = [];

  constructor(private router: Router,private podcastService: PodcastService, private http: HttpClient) { }

     ngOnInit(): void {
    
      this.podcastService.getPodcasts().subscribe(
        (data: any[]) => {
          this.podcasts = data;
        } );
}
goToPlay(id: number) {
  this.router.navigate(['/play', id]);
  console.log("going to play");
}
}