import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

import { MoviesService } from './movies.service';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve<any> {

  constructor(
    private service: MoviesService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Movie> | Observable<never> | Promise<Movie> | any {
      const id = route.params.id;

      return this.service.getMovie(id)
      .pipe(
        take(1),
        mergeMap(movie => {
          if (movie) {
            return of(movie);
          }
          // tslint:disable-next-line:no-unused-expression
          this.router.navigate['/movies'];
          return EMPTY;
        })
      )
  }
}
