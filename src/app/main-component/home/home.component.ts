import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { SearchBarService } from '../../services/search-bar.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { Song } from '../../shared/models/song';
import { Router } from '@angular/router';

import { SongService } from '../../services/song.service';
import { Podcast } from '../../shared/models/podcast';
import { MusicService } from '../../services/music.service';
import { Music } from '../../Models/playlistModel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  [x: string]: any;
  isShowHome: boolean = true;
  isAdminFlow: boolean = false;
  isshowSearch: boolean = false;
  songs: Song[] = [];

  musics: Music[] = [];

  podcasts:Podcast[]=[];
  message: boolean = false;

  filter: boolean = false;
  loginService: any;
  constructor(
    public sb: SearchBarService,
    private SongService: SongService,private musicService: MusicService,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    let songsObservable: Observable<Song[]>;


    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        songsObservable = this.SongService.getAllSongsBySearchTerm(
          params.searchTerm
        );

       
      }
       else {
        songsObservable = SongService.getAll();
      }
  

      songsObservable.subscribe((serverSongs) => {
        this.songs = serverSongs;
      });

     
    });
  }

  ngOnInit(): void {

    this.musicService.getSongs().subscribe(
      (data: any[]) => {
        this.musics = data;
        
      });
    this.SongService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  
   
  }

  newMessage() {
    this.SongService.changeMessage(true);
  }
 playSong(musicId: number): void {
   
    this.router.navigate(['/play', musicId]);
  }

  onNavigation(pageName: string) {
    if (pageName === 'search') {
      this.sb.isSearchVisible.next(true);
    } else {
      this.sb.isSearchVisible.next(false);
    }

    this.isshowSearch = false;
  
  }

  showFAQ: boolean = false;

  toggleFAQ(): void {
    this.isShowHome = true;
    this.showFAQ = !this.showFAQ;
  }

  showMUSIC: boolean = false;

  

  toggleMUSIC(): void {
    this.isShowHome = true;
    this.showMUSIC = !this.showMUSIC;
  }

  showPODCAST:boolean=false;
  togglePODCAST():void {
    this.isShowHome=true;
    this.showPODCAST=!this.showPODCAST;
  }

  showFilter: boolean = false;
  toggleFilter(): void {
    this.isShowHome = true;
    this.showFilter = !this.showFilter;
  }

  showPremium : boolean =false;
  togglePremium():void{
    this.isShowHome=true;
    this.showPremium=!this.showPremium;
  }

  showSupport:boolean=false;

  toggleSupport():void{
    this.isShowHome=true;
    this.showSupporrt=!this.showSupport;
  }
  showLIBRARY:boolean=false;
  showPLAYLIST:boolean=false;
  showSUPPORT:boolean=false;

  displayContent(pageName: string) {
    // Reset all flags
    this.isShowHome = false;
    this.isshowSearch = false;
    this.showMUSIC = false;
    this.showPODCAST = false;
    this.showFilter = false;
    this.showLIBRARY=false;
  this.showPLAYLIST=false;
  this.showSUPPORT=false;
  this.showFAQ=false;
this.showPremium=false;
    // Set the flag for the selected page
    switch (pageName) {
      case 'home-side':
        this.isShowHome = true;
        break;
      case 'search':
        // this.onNavigation('search');
        this.isshowSearch=true;
        break;
      case 'music':
        this.showMUSIC = true;
        break;
      case 'podcast':
        this.showPODCAST = true;
        break;
      case 'filter':
        this.showFilter = true;
        this.router.navigate(['/home/filter']);
        // this.SongService.filterdisplay(true);
        // console.log("In filter");
        break;
      case 'library':
        this.showLIBRARY = true;
        break;
      case 'createplaylist':
        this.showPLAYLIST = true;

        break;
      case 'Premium':
        this.showPremium=true;
        break;
      case 'faq':
        this.showFAQ = true;
        break;
      case 'support':
        this.showSUPPORT = true;
        break;
      default:
        break;
    }
  }
  navigateToFilter(){
    // this.SongService.filterdisplay(true);
  }
 

  navigateToPlay(song:Song){
    console.log(song);
    const songTitle=song.title;
    this.musicService.getSongByTitle(songTitle).subscribe(
      (res)=>{
        console.log("REsopnse",res.id);
        this.router.navigate(['/play',res.id]);
      }
    );

  }

  
}



