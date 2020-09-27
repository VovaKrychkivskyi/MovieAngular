import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorite: any;

  addToFavorites(movies): void {
    let movie = JSON.stringify(movies);
    movie = JSON.parse(movie);

    if (localStorage.getItem('Favorites')) {
      this.favorite = JSON.parse(localStorage.getItem('Favorites'));
    } else {
      this.favorite = [];
    }

    const existingMovieInFavorites = this.favorite.find(x => x.id === movie['imdbID']);

    if (existingMovieInFavorites) {
      this.favorite = this.favorite.filter(m => {
        return m.id !== movie['imdbID'];
      });
    } else {
      this.favorite.unshift(movie);
    }

    localStorage.setItem('Favorites', JSON.stringify(this.favorite));

    const rawFavorites = localStorage.getItem('Favorites');
    this.favorite = JSON.parse(rawFavorites);
  }
}
