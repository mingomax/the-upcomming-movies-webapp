import axios from 'axios';
import config  from '../config/config';

class TmdbService {
  options = {
    uri:  `${config.tmdb.uri}/movie/upcoming`,
    qs: {
      'api-key': config.tmdb.secret,
    },
    headers: { 'Content-Type':'application/json' },
  };

  constructor() { }

  async upcomingMoviesList(language: string = 'en-US', page: number = 1) {
    const qs = Object.assign(this.options.qs, { language, page });
    const data = await axios.get(this.options.uri, {
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
}

export default new TmdbService;
