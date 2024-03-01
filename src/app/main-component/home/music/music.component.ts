import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../../../services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent  implements OnInit {
  songs: any[]=[]
  constructor(private router: Router,private musicService: MusicService) { }

  
    ngOnInit(): void {
      this.musicService.getSongs().subscribe(
        (data: any[]) => {
          this.songs = data;
        } );
       }

goToPlay(id: number) {
  this.router.navigate(['/play', id]);
  console.log("going to play");
}
}
