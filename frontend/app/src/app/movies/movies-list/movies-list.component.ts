import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  records: Array<Movie> = [];
  totalRecords = 0;
  isLoading = false;

  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.loadData();
  }

  get hasRecords(): boolean {
    return this.totalRecords > 0;
  }

  private loadData(): void {
    this.isLoading = true;
    this.service
      .listMovies('', 1)
      .subscribe(
        (response) => {
          this.records = response.data;
          this.totalRecords = response.total;
        },
        () => {},
        () => this.isLoading = false
      );
  }
}
