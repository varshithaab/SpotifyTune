import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import {
  SONGS_URL,
  SONGS_BY_SEARCH_URL,
  SONGS_GENRES_URL,
  SONGS_BY_GENRE_URL,
  SONGS_ARTISTS_URL,
  SONGS_BY_ARTIST_URL,
  SONGS_BY_RECOMMENDATION,
  PODCASTS_BY_SEARCH_URL,
  PODCASTS_URL,
} from '../shared/constants/urls';
import { Song } from '../shared/models/song';
import { Genre } from '../shared/models/genre';
import { Artist } from '../shared/models/artist';
import { Podcast } from '../shared/models/podcast';
import { Music } from '../Models/playlistModel';

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


  getAllPodcasts(): Observable<Podcast[]> {
    return this.http.get<Podcast[]>(PODCASTS_URL);
  }

  
  getAllPodcastsBySearchTerm(searchTerm: string) {
    return this.http.get<Podcast[]>(PODCASTS_BY_SEARCH_URL + searchTerm);
  }
  

  // getRecommendations(searchTerm: string): Observable<any[]> {
  //   return this.http.get<any[]>('/recommendations/' + searchTerm);
  // }
 
  
  getRecommendations(searchTerm: string): Observable<any[]> {
    return this.http.get<Song[]>( SONGS_BY_RECOMMENDATION + searchTerm)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            // Client-side error occurred
            console.error('An error occurred:', error.error.message);
          } else {
            // Backend returned an unsuccessful response code
            console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`
            );
          }
          // Return an observable with a user-facing error message
          return throwError('Something bad happened; please try again later.');
        })
      );
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
  // getSongById(id: string): Observable<Song> {
    
  //   return this.http.get<Song>(`SONGS_URL/${id}`);
  // }
  private  baseUrl = 'http://localhost:5000';



  getTopSongs(limit: number): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.baseUrl}/songs/top?limit=${limit}`);
  }

  getTopPodcasts(limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/podcasts/top?limit=${limit}`);
  }

  getTopArtists(limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/artists/top?limit=${limit}`);
  }

  

  getSongByTitle(title: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/songs?title=${title}`);
  }

}