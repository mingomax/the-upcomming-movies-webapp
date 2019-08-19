ARGS = $(filter-out $@,$(MAKECMDGOALS))
MAKEFLAGS += --silent

ifndef APPLICATION_ENV
	include .env
endif

.DEFAULT_GOAL := help
.PHONY: help
help:
	@grep -E '^[a-zA-Z-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "[32m%-17s[0m %s\n", $$1, $$2}'

###> Docker machine states ###
build: ## Build Docker containers images
	docker-compose build

up: ## Up Docker container
	docker-compose up ${ARGS}

down: ## docker-compose down
	docker-compose down

start: ## Start docker container
	docker-compose start

stop: ## Stop running docker container
	docker-compose stop

state: ## Show docker container status
	docker-compose ps

rebuild: ## Destroy all containers and recreate it
	docker-compose stop
	docker-compose pull
	docker-compose rm --force backend
	docker-compose build --no-cache --pull
	docker-compose up -d --force-recreate

bash: shell

shell: ## Connect to application container shell
	docker-compose exec backend sh

root: ## Connect to application container shell as root user
	docker-compose exec --user root backend sh

db: ## access mongo from local machine
	docker-compose exec database sh

restapi: ## restart only the api
	docker-compose restart api

restart: ## docker-compose down && docker-compose up
	docker-compose restart ${ARGS}

restartbuild: ## docker-compose down && docker-compose up --build
	docker-compose down && docker-compose up --build

ip: ## Show public ip address of container
	docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' api

# logs: ## Starts a log server that displays logs in real time
	# docker-compose logs --follow api database

logs: ## Starts a log server that displays logs in real time
	docker-compose logs --tail=100 --follow ${ARGS}

seeds:
	docker-compose exec backend npm run seeds ${ARGS}

###< Docker machine states ###

#############################
# Argument fix workaround
#############################
%:
@:
