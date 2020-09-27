import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../models/Movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() movie: Movie;
  constructor() { }

  ngOnInit(): void {
  }
}
