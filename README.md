# Upcoming Movies WebApp

## Requirements

* [Docker](https://www.docker.com)

# How this was structured

### How to start

- Copy the `env.dist` to  `.env`
- Edit `.env` to yours environment variables
- To set docker environment you need to change *APPLICATION_ENV* and *DOCKER_TARGET* for one of this options
- [Production] `APPLICATION_ENV=production` `DOCKER_TARGET=release`
- [Local/Development] `APPLICATION_ENV=development` `DOCKER_TARGET=dev-builder`
- Run `make build` and `make up` at first time.
- at `/docs` we have a Postman file with routes of API.

#### Folder Structure

After cloning, your project should look like this:

```
up-movies-app/
  README.md
  docker-compose.yml
  env.dist
  Makefile.sh
  backend/
  frontend/
  docs/
```

#### Commands

* at first time

```bash
$ make build
```
* Up the environemnt

```bash
$ make up
```

* For day by day
```bash
# Start the backend and frontend
make start

#check if its ok
make state
```

## Makefile

This project comes with `Makefile` configuration so that you can easily run
some generic commands via `make` command. Below is a list of currently
supported (main commands) make commands, note that you can get this same list
with just running `make` command:

```bash
buid              Build docker images and setup all environment at first time
rebuild           Destroy all containers and recreate it
root              Connect to backend container shell as root user
run-tests         Runs all tests
shell             Connect to backend container shell
start             Start docker container
state             Show docker container status
stop              Stop running docker container
up                Up Docker container
logs              Show logs of all containers
ip                Show IP docker network exposed
```
