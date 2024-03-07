import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  getSongs(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/api/songs');
  }

  getSongById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/songs/${id}`);
  }
}
