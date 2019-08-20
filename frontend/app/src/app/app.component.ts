
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from '@helpers/animation.helper';
import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper" [@routeAnimation]="getAnimationData(routerOutlet)">
      <router-outlet #routerOutlet="outlet"></router-outlet>
    </div>
  `,
  animations: [slideInAnimation]

})
export class AppComponent {
  title = `${environment.title}`;

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}

