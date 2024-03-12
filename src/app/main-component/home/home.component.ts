import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { SearchBarService } from '../../services/search-bar.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { Song } from '../../shared/models/song';
import { Router } from '@angular/router';

import { SongService } from '../../services/song.service';
import { FilterComponent } from './filter/filter.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isShowHome: boolean = true;
  isshowSearch: boolean = false;
  songs: Song[] = [];

  message: boolean = false;

  filter: boolean = false;
  constructor(
    public sb: SearchBarService,
    private SongService: SongService,
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
    this.SongService.currentMessage.subscribe(
      (message) => (this.message = message)
    );

  
   
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
        console.log("In filter");
        break;
      case 'library':
        this.showLIBRARY = true;
        break;
      case 'createplaylist':
        this.showPLAYLIST = true;

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
    this.SongService.filterdisplay(true);
  }
 

  play(musicId: string): void {
    console.log(musicId);
    this.router.navigate(['/play', musicId]);
  }
  
}




