import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { environment } from '@env/environment';
import { Movie } from './movie.model';

export interface MoviesItem {
  total: number;
  data: Array<Movie>;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  readonly apiHost = `${environment.api.uri}/movies`;

  constructor(private http: HttpClient) { }

  listMovies(filter = '', page: number = 1): Observable<MoviesItem> {
    console.log(this.apiHost);  
    return this.http.get<MoviesItem>(
      this.apiHost,
      {
        params: new HttpParams()
          .set('filter', filter)
          .set('page', page.toString())
      })
      .pipe(
        map(response => response as MoviesItem)
      );
  }
}
