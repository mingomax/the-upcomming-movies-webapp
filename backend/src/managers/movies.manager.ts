import * as httpStatus from 'http-status';
import { Response, Request } from 'express';

import tmdbService from '../services/tmdb.service';

class MoviesManager {

  static movieById(request: Request, response: Response) {
    const { id } = request.params;

    return tmdbService.movieById(Number(id))
      .then(data => response.status(httpStatus.OK).json(data))
      .catch(error => console.error.bind(console, `Request error: ${error}`));
  }

  static listMovies(request: Request, response: Response) {
    const { page } = request.query || 1;
    const { lang } = request.query || 'en-US';
    const { query } = request. query || -1;
    return tmdbService.upcomingMoviesList(lang, page)
      .then(data => response.status(httpStatus.OK).json(data))
      .catch(error => console.error.bind(console, `Request error: ${error}`));
  }

  static listGenres(request: Request, response: Response) {
    return tmdbService.genresMovieList()
      .then((result: any) => response.status(httpStatus.OK).json({ items: result.data }))
      .catch(error => console.error.bind(console, `Request error: ${error}`));
  }
}

export default MoviesManager;
