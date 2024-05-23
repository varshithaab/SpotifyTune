// import { Component, EventEmitter, Output } from '@angular/core';
// import { Location } from '@angular/common';
// import { MatMenuTrigger } from '@angular/material/menu';

// import { Router } from '@angular/router';
// import { SearchBarService } from '../services/search-bar.service';
// import { SongService } from '../services/song.service';
// import { LoginService } from '../services/login.service';

// @Component({
//   selector: 'app-navigation',
//   templateUrl: './navigation.component.html',
//   styleUrl: './navigation.component.css',
// })
// export class NavigationComponent {
//   // message: boolean =true;
//   showDropdown:boolean = false;
  

//   isAdminFlow:boolean = true;
//   hasLoggedUser:boolean = false;

  
//   public isSearchFieldVisible: boolean = false;
//   @Output() public inputFilterRes: EventEmitter<any> = new EventEmitter();
//   constructor(
//     private router: Router,
//     private sb: SearchBarService,
//     private SongService: SongService, 
//     private loginService :LoginService
//   ) {}

//   @Output() public forwardButtonClick: EventEmitter<void> = new EventEmitter();
//   @Output() public backwardButtonClick: EventEmitter<void> = new EventEmitter();

//   ngOnInit(): void {
//     this.loginService.currentMessage1.subscribe(isLogged => {
//       console.log("isLogged",isLogged)
//       this.hasLoggedUser = isLogged});
// console.log("sriii",this.hasLoggedUser)
//     this.sb.isSearchVisible.subscribe((status) => {
//       this.isSearchFieldVisible = status;
//     });
  
//     this.loginService.currentMessage.subscribe(isAdmin => this.isAdminFlow = isAdmin);
//     console.log("shilpa",this.isAdminFlow)
    
//   }



//   onNavigateToLogin() {
//     this.router.navigate(['/', 'login']);
//   }
//   onForwardButtonClick(): void {
//     this.forwardButtonClick.emit();
//   }

//   onBackwardButtonClick(): void {
//     this.backwardButtonClick.emit();
  
  
  
//   }

//   Dropdowns() {
//     this.showDropdown = !this.showDropdown;
//   }


  


//   usermanagement(): void {
//     // Implement the logic to navigate to the User Management component
//     console.log('Opening User Management');
//     this.Dropdowns(); // Close the dropdown after selection (optional)
//     this.router.navigate(['/user-management']); // Navigate to UserManagement component

//   }

//   songmanagement(): void {
//     // Implement the logic to navigate to the Song Management component
//     console.log('Opening Song Management');
//     this.Dropdowns(); // Close the dropdown after selection (optional)
//     this.router.navigate(['/song-management']); // Navigate to UserManagement component

//   }
 
  

  
 
// }



import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from '../services/search-bar.service';
import { SongService } from '../services/song.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  showDropdown: boolean = false;
  isAdminFlow: boolean = true;
  hasLoggedUser: boolean = false;
  username: string = '';

  public isSearchFieldVisible: boolean = false;
  @Output() public inputFilterRes: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private sb: SearchBarService,
    private songService: SongService,
    private loginService: LoginService
  ) {}

  @Output() public forwardButtonClick: EventEmitter<void> = new EventEmitter();
  @Output() public backwardButtonClick: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    this.loginService.currentMessage1.subscribe(isLogged => {
      this.hasLoggedUser = isLogged;
      if (isLogged) {
        this.username = this.loginService.getUsername();
      }
    });

    this.sb.isSearchVisible.subscribe((status) => {
      this.isSearchFieldVisible = status;
    });

    this.loginService.currentMessage.subscribe(isAdmin => this.isAdminFlow = isAdmin);
  }

  onNavigateToLogin() {
    this.router.navigate(['/', 'login']);
  }

  onForwardButtonClick(): void {
    this.forwardButtonClick.emit();
  }

  onBackwardButtonClick(): void {
    this.backwardButtonClick.emit();
  }

  Dropdowns() {
    this.showDropdown = !this.showDropdown;
  }

  usermanagement(): void {
    console.log('Opening User Management');
    this.Dropdowns();
    this.router.navigate(['/user-management']);
  }

  songmanagement(): void {
    console.log('Opening Song Management');
    this.Dropdowns();
    this.router.navigate(['/song-management']);
  }

  logout(): void {
    this.loginService.logout();
    this.hasLoggedUser = false;
    this.router.navigate(['/login']);
  }
}
