import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Movie } from '@app/movies/movie.model';
import { PersistenceService } from '@app/services/persistence.service';

@Component({
  selector: 'movie-card',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input() movie: Movie;
  @Input() showReadMore = true;

  constructor(
    private sanitizer: DomSanitizer,
    private persister: PersistenceService,
  ) { }

  ngOnInit() {
  }

  get movieGenres() {
    return this.persister.get('genres');
  }

  get cardHeaderAvatar() {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.movie.posterPath})`);
  }

  get cardBackdropPath() {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.movie.backdropPath})`);
  }

}
