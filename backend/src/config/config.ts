import { version } from '../../package.json';

export default {
  version,
  name: 'Upcoming Movies API',
  env: process.env.APPLICATION_ENV || 'development',
  server: {
    port: process.env.API_PORT || 3000,
    cors :{
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
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
      origin: '*',
      optionsSuccessStatus: 200,
    },
  },
  tmdb: {
    uri: 'https://api.themoviedb.org/3',
    secret: '1f54bd990f1cdfb230adb312546d765d',
  },
};
