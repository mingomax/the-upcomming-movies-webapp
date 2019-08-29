import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatProgressBarModule, MatPaginatorModule } from '@angular/material';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatCardModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
