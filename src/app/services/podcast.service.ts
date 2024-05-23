import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Podcast } from '../shared/models/podcast';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  private apiUrl = 'http://localhost:5000/api/podcast';
  constructor(private http: HttpClient) {}

  getPodcasts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getPodcastById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  getPodcastByTitle(title: string): Observable<Podcast> {
    
    return this.http.get<Podcast>(`${this.apiUrl}/title/${title}`);
  }


}
