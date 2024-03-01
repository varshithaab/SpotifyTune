import { Component, EventEmitter, Output } from '@angular/core';
import { SearchBarService } from '../../services/search-bar.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public sb: SearchBarService) {}

  ngOnInit(): void {}

 

  onNavigation(pageName: string) {
    if (pageName === 'search') {
      this.sb.isSearchVisible.next(true);
    } else {
      this.sb.isSearchVisible.next(false);
    }
  }

 
 
}
