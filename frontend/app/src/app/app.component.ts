import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import { slideInAnimation } from '@helpers/animation.helper';
import { environment } from '@env/environment';
import { MoviesService } from './movies/movies.service';
import { PersistenceService } from './services/persistence.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper" [@routeAnimation]="getAnimationData(routerOutlet)">
      <router-outlet #routerOutlet="outlet"></router-outlet>
    </div>
  `,
  animations: [slideInAnimation]

})
export class AppComponent implements OnInit {
  title = `${environment.title}`;

  constructor(
    private router: Router,
    private moviesService: MoviesService,
    private persister: PersistenceService
  ) {}

  ngOnInit(): void {
    this.moviesService
    .listGenres()
    .pipe(tap(console.log))
    .subscribe(data => this.persister.set('genres', data));
    this.router.navigate(['/movies']);
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
