FROM node:10-alpine as dev-builder

LABEL "br.com.dteruel.vendor"="Dteruel Software" \
       maintainer="Domingos Teruel <mingomax@dteruel.net.br" \
       version="1.2" \
       description="NodeJS image based on Alpine to run API Application."

ENV LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8

ENV TIMEZONE UTC
ENV TZ=${TIMEZONE}

#Build time argument to set APPLICATION_ENV ('production' by default)
ARG APPLICATION_ENV
ENV APPLICATION_ENV=${APPLICATION_ENV:-production}

# Create a directory where our app will be placed
RUN mkdir -p /srv/backend
WORKDIR /srv/backend

#
#--------------------------------------------------------------------------
# Software's Installation
#--------------------------------------------------------------------------
#
# Try to create less layers to install requirements process :P
RUN set -xe; \
    \
    apk -v --update add --no-cache --virtual \
    bash bash-completion git tini; \
    rm -rf \
    /tmp/* \
    /usr/src/* \
    /var/cache/apk/*;

# Copies the local package.json file to the container
# and utilities docker container cache to not needing to rebuild
# and install node_modules/ everytime we build the docker, but only
# when the local package.json file changes.
# install npm packages: clean obsolete uploads
COPY package*.json ./

RUN set -xe; \
    npm run clean; \
    npm install;

# Bundle API source
COPY . ./

RUN set -xe; \
  \
  if [ "${APPLICATION_ENV}" = 'staging' ]; then \
    npm run build:staging; \
  elif [ "${APPLICATION_ENV}" = 'production' ]; then \
    npm run build; \
  fi;

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3000 9229

CMD ["npm", "run", "dev"]

FROM node:10-alpine as release

ARG APPLICATION_ENV

ENV NODE_ENV=${APPLICATION_ENV}

# Create a directory where our app will be placed
WORKDIR /srv/api

COPY --from=dev-builder /srv/backend/dist /srv/api/
COPY --from=dev-builder /srv/backend/package* /srv/api/
COPY --from=dev-builder /srv/backend/process* /srv/api/
RUN  set -xe; \
    npm install pm2 -g; \
    npm install --production --no-optional --progress=false --quiet; \
    ls -l;

CMD ["npm", "start"]
