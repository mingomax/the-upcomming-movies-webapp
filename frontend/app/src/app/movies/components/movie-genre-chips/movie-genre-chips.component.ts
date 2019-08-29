import { Component, Input } from '@angular/core';

import { Genre } from '@app/movies/genre.model';

@Component({
  selector: 'movie-genre-chips',
  templateUrl: './movie-genre-chips.component.html',
  styleUrls: ['./movie-genre-chips.component.scss']
})
export class MovieGenreChipsComponent {

  @Input() genres: Genre[];

  constructor() { }

}
