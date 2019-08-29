import axios from 'axios';
import config  from '../config/config';

class TmdbService {
  options = {
    uri:  `${config.tmdb.uri}/movie`,
    qs: {
      'api-key': config.tmdb.secret,
    },
    headers: { 'Content-Type':'application/json' },
  };

  constructor() { }

  async movieById(id: number) {
    console.log(id);
    return await axios.get(`${this.options.uri}/${id}`, {
      headers: this.options.headers,
      params: {
        'api_key': config.tmdb.secret,
      },
    })
    .then(response => response.data)
    .catch(error => console.error(error));
  }

  async upcomingMoviesList(language: string = 'en-US', page: number = 1) {
    const qs = Object.assign(this.options.qs, { language, page });
    const data = await axios.get(`${this.options.uri}/upcoming`, {
      headers: { 'Content-Type':'application/json' },
      params: this.options.qs,
    })
    .then((responseBody: any) => {
      return {
        data: responseBody.data.results,
        total: responseBody.data.total_results,
      };
    })
    .catch(error => console.error(error))
    .then(data => data);
    return data;
  }

  async genresMovieList() {
    const data = await axios.get(
      `${config.tmdb.uri}/genre/movie/list`,
      {
        headers: this.options.headers,
        params: {
          'api_key': config.tmdb.secret,
        },
      })
      .then((responseBody: any) => {
        return {
          data: responseBody.data.genres,
        };
      })
      .catch(error => console.error(error))
      .then(data => data);

    return data;
  }
}

export default new TmdbService;
