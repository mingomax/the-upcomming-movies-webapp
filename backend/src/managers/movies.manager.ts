import * as httpStatus from 'http-status';
import { Response, Request } from 'express';

import tmdbService from '../services/tmdb.service';

class MoviesManager {

  static listMovies(request: Request, response: Response) {
    const { page } = request.query || 1;
    const { lang } = request.query || 'en-US';
    const { query } = request. query || -1;
    return tmdbService.upcomingMoviesList(lang, page)
      .then(data => response.status(httpStatus.OK).json(data))
      .catch(error => console.error.bind(console, `Request error: ${error}`));
  }
}

export default MoviesManager;
