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
    this.enableCors();
    this.middleware();
    this.routes();
  }

  enableCors(): void {
    const options: cors.CorsOptions = {
      credentials: false,
      exposedHeaders: [
        'Authorization',
        'Content-Type',
        'Origin',
        'Accept',
        'X-Requested-With',
        'Cache-Control',
        'responseType',
        'X-File-Name',
      ],
      origin: '*',
      preflightContinue: false,
    };
    this.app.use(cors(options));
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
  }
}

export default (new Application()).app;
