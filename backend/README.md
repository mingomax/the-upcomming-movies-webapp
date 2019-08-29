# UP Movies Requests API

Requests APi is responsible to connect Requests and Services providers to resolve their issues.

## Base knowledge

Here we have some quotes that improve our comprehension about the things we're
dealing with (discovered until now). It's very important to remember that these
definitions may (and probably will) change.

See more information about this in [Documentation](../docs/Fullstack_code_challenge_-_v2.pdf)

## How this was structured

JSON REST API which is build on top of [NodeJS](http://nodejs.org),  [Typescript](https://www.typescriptlang.org/) and [ExpressJS](http://expresjs.com/) framework.

Also we follow [12 Factors guideline](https://12factor.net/pt_br/) to make a scalable and easy maintenance.


### Features
- ES2017 latest features like Async/Await
- TypeScript 3 
- CORS enabled
- Consistent coding styles with [editorconfig](http://editorconfig.org)
- [Docker](https://www.docker.com/) support
- Uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
- Load environment variables from .env files with [dotenv](https://github.com/rolodato/dotenv-safe)
- Request validation with [joi](https://github.com/hapijs/joi)
- Linting with [tslint](https://palantir.github.io/tslint/) and [eslint](http://eslint.org)
- Tests with [mocha](https://mochajs.org) and [chai](http://chaijs.com) *
- Logging with [morgan](https://github.com/expressjs/morgan)
- Monitoring with [pm2](https://github.com/Unitech/pm2)

### Directories

- **node_modules/**: local where all dependencies was install by package manager
- **config/**: application configuration lives here
- **src/**: source of project, included modules and entrypoint
- **.gitignore**: project git ignore files list
- **package-lock.json**: version description of depenecies and packages descriptions
- **package.json**: package and project descritption

