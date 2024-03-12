import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Music, PlayList } from '../Models/playlistModel';



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
  // addMusicToPlaylist(playlistId: string, musicId: string): Observable<any> {
  //   return this.http.post<any>(`${this.baseurl}/${playlistId}/add/${musicId}`, {});
  // }

  addMusicToPlaylist(playlistId: string, music: Music): Observable<PlayList> {
    console.log("In service:",music.id);
    return this.http.post<PlayList>(`${this.baseurl}/${playlistId}/add`,{ musicId: music.id });
  }

  updatePlaylist(playlist: PlayList,songs:Music[]): Observable<PlayList> {
    const playlistUpdate = { songs };
    console.log("In service:recieved :",playlistUpdate);
    return this.http.put<PlayList>(`${this.baseurl}/${playlist.id}`, playlistUpdate);
  }
}
