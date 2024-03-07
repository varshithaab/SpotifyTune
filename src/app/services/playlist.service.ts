import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayList } from '../Models/playlistModel';



@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private baseurl = 'http://localhost:5000/api/playlists';

  constructor(private http: HttpClient) { }

  getAllPlaylists(): Observable<PlayList[]> {
    return this.http.get<PlayList[]>(this.baseurl);
  }

  getPlaylistById(id: string): Observable<PlayList> {
    return this.http.get<PlayList>(`${this.baseurl}/${id}`);
  }

  createPlaylist(playlist: PlayList): Observable<PlayList> {
    return this.http.post<PlayList>(this.baseurl, playlist);
  }
}
