import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongService } from '../../../services/song.service';
import { catchError, debounceTime, distinctUntilChanged, switchMap, throwError } from 'rxjs';
import { FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchTerm = '';
  isshowSearch: boolean = false;

  searchControl = new FormControl(); // Define searchControl property
  suggestions: any[] = [];
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
  
        this.SongService.getRecommendations(term).subscribe(
          (data: any[]) => {
            console.log('Received suggestions:', data);
          },
          (error) => {
            console.error('Error fetching suggestions:', error);
          }
        );
      }
    }
    
  
  message: boolean = true;
 
  recommendations: any[] = [];
  error: string | null = null;


  
    
    ngOnInit(): void {
      this.searchControl.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((searchTerm: string) => this.SongService.getRecommendations(searchTerm))
      ).subscribe(
        (data: any[]) => {
          this.recommendations = data;
        },
        (error) => {
          console.error('Error fetching recommendations:', error);
        }
      );
    
      this.SongService.currentMessage.subscribe(
        (message) => (this.message = message)
      );
    }
    
  }

  




