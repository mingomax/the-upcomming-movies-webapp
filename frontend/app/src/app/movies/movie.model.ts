import { Genre } from './genre.model';
export interface Movie {
  id?: number;
  voteCount?: number;
  title?: string;
  posterPath?: string;
  originalLanguage?: string;
  originalTitle?: string;
  backdropPath?: string;
  adult?: boolean;
  overview?: string;
  releaseDate?: Date;
  tagline?: string;
  productionCompanies: [{name?: string, logoPath?: string}];
  genres?: Genre[];
}
