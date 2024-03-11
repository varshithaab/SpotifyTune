import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from '../services/search-bar.service';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  public isSearchFieldVisible: boolean = false;
  @Output() public inputFilterRes: EventEmitter<any> = new EventEmitter();
  constructor(
    private router: Router,
    private sb: SearchBarService,
    private SongService: SongService
  ) {}

  @Output() public forwardButtonClick: EventEmitter<void> = new EventEmitter();
  @Output() public backwardButtonClick: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    this.sb.isSearchVisible.subscribe((status) => {
      this.isSearchFieldVisible = status;
    });
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
}
