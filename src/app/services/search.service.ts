// search.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = '/api/search'; // Assuming your API endpoint is /api/search

  constructor(private http: HttpClient) { }

  search(query: string): Observable<any> {
    const params = { search: query };
    return this.http.get<any>(this.apiUrl, { params });
  }
}
