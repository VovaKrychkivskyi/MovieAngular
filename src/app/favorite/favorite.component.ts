import {Component, Input, OnInit} from '@angular/core';
import {FavoritesService} from '../services/favorites.service';
import {Movie} from '../models/Movie';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favorite: any;
  @Input() movie: Movie;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    if (localStorage.getItem('Favorites')) {
      this.favorite =  JSON.parse(localStorage.getItem('Favorites'));
    } else {
      this.favorite = null;
    }
  }

  AddToFavorite(movie): void {
    this.favoritesService.addToFavorites(movie);
    this.favorite =  JSON.parse(localStorage.getItem('Favorites'));
  }
}
