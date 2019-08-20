import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { ComponentsModule } from './../components/components.module';
  
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatCardModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
