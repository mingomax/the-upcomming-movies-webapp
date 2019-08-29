import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Movie } from '@app/movies/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie: Movie;
  routeListen: Subscription;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  get coverPath() {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.movie.backdropPath})`);
  }

  ngOnInit(): void {
    this.routeListen = this.route.data.subscribe(
      (data: { movie: Movie }) => {
        this.movie = data.movie;
      }
    );
    console.log(this.movie);
  }

  ngOnDestroy(): void {
    this.routeListen.unsubscribe();
  }
}
