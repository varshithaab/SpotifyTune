import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  SONGS_URL,
  SONGS_BY_SEARCH_URL,
  SONGS_GENRES_URL,
  SONGS_BY_GENRE_URL,
  SONGS_ARTISTS_URL,
  SONGS_BY_ARTIST_URL,
} from '../shared/constants/urls';
import { Song } from '../shared/models/song';
import { Genre } from '../shared/models/genre';
import { Artist } from '../shared/models/artist';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private messageSearch = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSearch.asObservable();
  private onGenreFlow = new BehaviorSubject<boolean>(false);
  a = this.onGenreFlow.asObservable();

  private onArtistFlow = new BehaviorSubject<boolean>(false);
  b = this.onArtistFlow.asObservable();

  
  private Filter=new BehaviorSubject<boolean>(false);
  c=this.Filter.asObservable();

  constructor(private http: HttpClient) {}

  getAll(): Observable<Song[]> {
    return this.http.get<Song[]>(SONGS_URL);
  }
  getAllSongsBySearchTerm(searchTerm: string) {
    return this.http.get<Song[]>(SONGS_BY_SEARCH_URL + searchTerm);
  }
  getAllGenre(): Observable<Genre[]> {
    return this.http.get<Genre[]>(SONGS_GENRES_URL);
  }

  getAllSongsByGenre(genre: string): Observable<Song[]> {
   
    return genre === 'All'
      ? this.getAll()
      : this.http.get<Song[]>(SONGS_BY_GENRE_URL + genre);
  }
  getAllArtist(): Observable<Artist[]> {
    return this.http.get<Artist[]>(SONGS_ARTISTS_URL);
  }

  getAllSongsByArtist(artist: string): Observable<Song[]> {
    return artist === 'All'
      ? this.getAll()
      : this.http.get<Song[]>(SONGS_BY_ARTIST_URL + artist);
  }

  changeMessage(message: boolean) {
    this.messageSearch.next(message);
  }
  genreFlow(message: boolean) {
    this.onGenreFlow.next(message);
  }
  artistFlow(message: boolean) {
    this.onArtistFlow.next(message);
  }

  
  filterdisplay(message:boolean){
    this.Filter.next(message);
  }


}
