import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '@app/movies/movie.model';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  readonly imagePath = 'https://image.tmdb.org/t/p';
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

  get cardHeaderImage(): string {
    return `url(${this.imagePath}/w400/${this.movie.poster_path})`;
  }

  get backdropImagePath(): string {
    return `${this.imagePath}/w400/${this.movie.backdrop_path}`;
  }

}
