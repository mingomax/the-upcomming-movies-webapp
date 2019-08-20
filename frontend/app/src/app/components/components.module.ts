import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatFormFieldModule
} from '@angular/material';

import { CardMovieComponent } from './card-movie/card-movie.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
  declarations: [CardMovieComponent, MovieSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  exports: [CardMovieComponent, MovieSearchComponent]
})
export class ComponentsModule { }
