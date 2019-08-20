import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

const mainRoutes: Routes = [
  { path: '**', redirectTo: '/not-found-page', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(
    mainRoutes,
    {
      onSameUrlNavigation: 'reload',
      useHash: true,
      enableTracing: !environment.production
    }
  )
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
