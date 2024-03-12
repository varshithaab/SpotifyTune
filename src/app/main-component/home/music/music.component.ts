// music.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../../../services/music.service';
import { Music } from '../../../Models/playlistModel';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  musics: Music[] = [];

  constructor(private router: Router, private musicService: MusicService) { }

  ngOnInit(): void {
    this.musicService.getSongs().subscribe(
      (data: any[]) => {
        this.musics = data;
      });
  }

  goToPlay(id: number): void {
    this.router.navigate(['/play/music', id]);
  }
  play(musicId: number): void {
   
    this.router.navigate(['/play', musicId]);
  }
  // play(musicId: string): void {
  //   this.router.navigate(['/play', musicId]);
  // }
  addToPlaylist(musicId:number) {
   this.router.navigate(['/library',musicId]);
    }
    
   }