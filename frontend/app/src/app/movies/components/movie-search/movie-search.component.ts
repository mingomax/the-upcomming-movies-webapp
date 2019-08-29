import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {

  queryField = new FormControl();

  constructor() { }

  onSearch(): void {

  }

}
