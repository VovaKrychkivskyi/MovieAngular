import {Component, OnInit} from '@angular/core';
import {Movie} from '../models/Movie';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // movie: Movie = {};
  //
  // messegeForm: FormGroup;
  // submitted = false;
  // success = false;
  //

  query: string = localStorage.getItem('input-movie');
  movies: Observable<Array<Movie>>;
  // messegeForms: FormGroup;
  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
    // this.messegeForms = this.formBuilder.group({
    //   query: ['Avengers', Validators.required]
    // });
  }

  ngOnInit(): void {}
//
//   onSub(): void {
//     this.submitted = true;
//     if (this.messegeForm.invalid) {
//       return;
//     }
//     this.success = true;
//   }
  //

  getSearchResults(): void {
    if (this.query) {
      localStorage.setItem('input-movie', this.query);
      this.movies = this.dataService.searchMovie(this.query);
      this.query = localStorage.getItem('input-movie');
    }
  }
}
