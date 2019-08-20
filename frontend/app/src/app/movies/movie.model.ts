export interface Movie {
  id?: number;
  voteCount?: number;
  title?: string;
  poster_path?: string;
  original_language?: string;
  original_title?: string;
  backdrop_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: Date;
}
