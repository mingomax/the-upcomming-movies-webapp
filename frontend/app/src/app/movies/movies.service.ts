import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { environment } from '@env/environment';
import { Movie } from './movie.model';
import { Genre } from './genre.model';
import { Adapter } from '@app/services/adapter.interface';

export interface MoviesItem {
  total: number;
  items: Array<Movie>;
}

export interface GenresItem {
  items: Array<Genre>;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService implements Adapter<Movie> {
  readonly apiHost = `${environment.api.uri}/movies`;
  readonly imagePath = `${environment.api.image_uri}`;

  constructor(private http: HttpClient) { }

  getMovie(id: number): Observable <Movie> {
      return this.http.get<Movie>(
        `${this.apiHost}/${id}`,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            accept: 'application./json',
          }),
        }
      )
      .pipe(
        map((response: any) => this.adapt(response))
      );
  }

  listMovies(filter = '', page: number = 0): Observable<MoviesItem> {
    return this.http.get<MoviesItem>(
      this.apiHost,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          accept: 'application./json',
        }),
        params: new HttpParams()
          .set('filter', filter)
          .set('page', page.toString())
      })
      .pipe(
        map((response: any) => {
          return {
            total: response.total,
            items: response.data.map((item: any) => this.adapt(item))
          };
        })
      );
  }

  listGenres(): Observable<GenresItem> {
    return this.http.get<GenresItem>(
      `${this.apiHost}/genres`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          accept: 'application./json',
        }),
      }
    )
    .pipe(
      map(response => response as GenresItem)
    );
  }

  adapt(item: any): Movie {
    const tagline = item.tagline || '';
    let productionCompanies = item.production_companies || [];
    productionCompanies = this.transformProductionCompanies(productionCompanies);
    return {
      id: item.id,
      voteCount: item.vote_count,
      title: item.title,
      posterPath: `${this.imagePath}/w200${item.poster_path}`,
      originalLanguage: item.original_language,
      originalTitle: item.original_title,
      backdropPath: `${this.imagePath}/original${item.backdrop_path}`,
      adult: item.adult,
      overview: item.overview,
      releaseDate: new Date(item.release_date),
      tagline,
      productionCompanies,
      genres: item.genres
    } as Movie;
  }

  private transformProductionCompanies(items: []): Array<any> {
    return items.map((item: any) => {
      return {
        name: item.name,
        logoPath: `${this.imagePath}/w200${item.logo_path}`,
        hasLogo: (item.logo_path !== null)
      };
    });
  }
}
