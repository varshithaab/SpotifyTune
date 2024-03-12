import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'http://localhost:5000/api/music';
  constructor(private http: HttpClient) { }

  getSongs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  
  getSongById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }


//ADMIN FUNCTIONALITY
  deleteSong(id: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${id}`;
    return this.http.delete(deleteUrl);
  }

}
