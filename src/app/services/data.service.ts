import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie, MovieDetail} from '../models/Movie';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movies: Movie[];
  private readonly API_KEY = `4ee6a962`;
  constructor(private http: HttpClient) { }

  // getUsers(searchTheme: string): Observable<Movie> {
  //   return this.http.get<Movie>(`baseUrl${searchTheme}`);
  //   console.log(this.getUsers(searchTheme));
  // }
  //
  // getUserByTitle(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>('https://api.themoviedb.org/3/search/movie?api_key=64c32911770a2945939d730331517194');
  //
  // }
  //
  // filterMovie(movies: Movie[], movie): Movie[] {
  //   return movies.filter(value => value.title.toLowerCase().includes(movie.title.toLowerCase()));
  // }

  searchMovie(searchQuery: string): Observable<Array<Movie>> {
    return this.http.get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${searchQuery}`)
      .pipe(
        map((response: any) => response.Search)
      );
  }
  getMovies(): any {
    return this.http.get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=avengers`);
  }

  // searchMovie(searchQuery: string): Observable<Array<Movie>> {
  //   return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&q=${searchQuery}`)
  //     .pipe(
  //       map((response: any) => response.Search)
  //     );
  // }

  getMovieDetails(imdbId: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}&plot=full`);
  }

}
