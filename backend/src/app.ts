import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import config from './config/config';
import moviesManager  from './managers/movies.manager';

class Application {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.enableCors();
    this.routes();
  }

  enableCors(): void {
    this.app.use(cors(config.server.cors));
  }

  middleware(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(helmet({ frameguard: false }));
    this.app.disable('x-powered-by');
  }

  routes(): void {
    this.app.route('/').get((req, res) => {
      res.send({ version: config.version });
    });

    this.app.route('/movies').get(moviesManager.listMovies);
    this.app.route('/movies/:id').get(moviesManager.movieById);
    this.app.route('/movies/genres').get(moviesManager.listGenres);
    // enable pre-flight
    this.app.options('*', cors(config.server.cors));
  }
}

export default (new Application ()).app;
