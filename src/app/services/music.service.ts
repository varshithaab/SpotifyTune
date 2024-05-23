import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from '../Models/playlistModel';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'http://localhost:5000/api/music';
  constructor(private http: HttpClient) { }

  getSongs(): Observable<Music[]> {
    return this.http.get<Music[]>(`${this.apiUrl}`);
  }

  
  getSongById(id: string): Observable<Music> {
    
    return this.http.get<Music>(`${this.apiUrl}/${id}`);
  }
  
  getSongByTitle(title: string): Observable<Music> {
    
    return this.http.get<Music>(`${this.apiUrl}/title/${title}`);
  }


  
//ADMIN FUNCTIONALITY
  deleteSong(id: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${id}`;
    return this.http.delete(deleteUrl);
  }

}

