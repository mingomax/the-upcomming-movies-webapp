import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PageEvent } from '@angular/material';

import { MoviesService, MoviesItem } from '../movies.service';
import { Movie } from '@app/movies/movie.model';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  records$: Observable<Movie[]>;
  totalRecords = 0;
  pageIndex = 1;
  pageSize = 20;

  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.loadData();
  }

  paginate(pageEvent: PageEvent): void {
    this.pageIndex = pageEvent.pageIndex + 1;
    this.pageSize = pageEvent.pageSize;
    this.loadData();
  }

  loadData(): void {
    this.records$ = this.service.listMovies('', this.pageIndex)
      .pipe(
        tap(console.log),
        tap((res: MoviesItem) => this.totalRecords = res.total),
        map((res: MoviesItem) => res.items)
      );
  }

}
