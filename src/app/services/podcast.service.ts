import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getPodcasts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/podcasts');
  }

  getPodcastById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/podcasts/${id}`);
  }

}