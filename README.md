# Upcoming Movies API

# How to start

- Copy the `env.dist` to  `.env`
- Edit `.env` to yours environment variables
- To set docker environment you need to change *APPLICATION_ENV* and *DOCKER_TARGET* for one of this options
- [Production] `APPLICATION_ENV=production` `DOCKER_TARGET=release`
- [Local/Development] `APPLICATION_ENV=development` `DOCKER_TARGET=dev-builder`
- Run `docker-compose up -d --build` at first time.
- at `backend/api/docs` we have a Postman file with routes of API.
