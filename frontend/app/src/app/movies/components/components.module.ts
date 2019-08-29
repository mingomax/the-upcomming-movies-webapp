import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatFormFieldModule,
} from '@angular/material';

import { CardMovieComponent } from './card-movie/card-movie.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieGenreChipsComponent } from './movie-genre-chips/movie-genre-chips.component';

@NgModule({
  declarations: [
    CardMovieComponent,
    MovieSearchComponent,
    MovieGenreChipsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  exports: [
    CardMovieComponent,
    MovieSearchComponent,
    MovieGenreChipsComponent
  ]
})
export class ComponentsModule { }
