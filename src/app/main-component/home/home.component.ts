import { Component, EventEmitter, Output } from '@angular/core';
import { SearchBarService } from '../../services/search-bar.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { Song } from '../../shared/models/song';
import { Router } from '@angular/router';

import { SongService } from '../../services/song.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isShowHome:boolean = false;
  isshowSearch:boolean = false;
  songs:Song[]=[];

  message: boolean=false;

  filter : boolean =false;
  constructor(public sb: SearchBarService,private SongService:SongService,activatedRoute:ActivatedRoute,private router: Router  ){
    let songsObservable:Observable<Song[]>;
    
    activatedRoute.params.subscribe((params)=>
    {
      if(params.searchTerm)
      {
        songsObservable=this.SongService.getAllSongsBySearchTerm(params.searchTerm);

      }
      
      else{
        songsObservable=SongService.getAll();
      }
      songsObservable.subscribe((serverSongs)=>
      {
        this.songs=serverSongs;
      })
      
    })
   
  }

  ngOnInit(): void {
    this.SongService.currentMessage.subscribe(message => this.message = message);
console.log("sharanya",this.message);


  }

  newMessage() {
    this.SongService.changeMessage(true);
  }

 

 

  onNavigation(pageName: string) {
    if (pageName === 'search') {
      
      this.sb.isSearchVisible.next(true);
    } else {
      this.sb.isSearchVisible.next(false);
    }

    this.isshowSearch = true;
    //this.isShowHome=false;
  }


  
  showFAQ: boolean = false;

  toggleFAQ(): void {
    this.isShowHome=true;
    this.showFAQ = !this.showFAQ;
  }


  showFilter: boolean = false;
  toggleFilter(): void {
    this.isShowHome = true;
    this.showFilter = !this.showFilter;
   
  }

}
