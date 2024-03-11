import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongService } from '../../../services/song.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchTerm = '';
  isshowSearch: boolean = false;
  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
    private SongService: SongService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }

  search(term: string): void {
    if (term) {
      this.isshowSearch = true;
      this.SongService.changeMessage(true);
      this.router.navigateByUrl('/search/' + term);
    }
  }
  message: boolean = true;
  ngOnInit(): void {
    this.SongService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
}
