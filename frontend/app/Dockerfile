FROM node:12-alpine as dev-builder

LABEL "br.com.dteruel.vendor"="Dteruel Software" \
       maintainer="Domingos Teruel <mingomax@dteruel.net.br" \
       version="1.2" \
       description="NodeJS image based on Alpine. To run Angular Applications"

ENV LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8

ENV TIMEZONE UTC
ENV TZ=${TIMEZONE}

#Build time argument to set APPLICATION_ENV ('production'' by default)
ARG APPLICATION_ENV

ENV APPLICATION_ENV=${APPLICATION_ENV:-production}

# Create a directory where our app will be placed
RUN mkdir -p /srv/app
WORKDIR /srv/app

#
#--------------------------------------------------------------------------
# Software's Installation
#--------------------------------------------------------------------------
#
# Try to create less layers to install requirements process :P
RUN set -xe; \
    mkdir -p /tmp; \
    apk update && apk upgrade && apk add --no-cache bash git tini openssh; \
    # Cleanup
    #apk del build-dependencies; \
    rm -rf \
    /tmp/* \
    /usr/src/* \
    /var/cache/apk/* && \
    npm i npm@latest -g && \
    npm install -g @angular/cli@8.2.0 && npm cache clean --force

# Copies the local package.json file to the container
# and utilities docker container cache to not needing to rebuild
# and install node_modules/ everytime we build the docker, but only
# when the local package.json file changes.
# install npm packages: clean obsolete files
COPY package*.json ./

RUN set -xe; \
    npm install --no-optional; \
    rm -rf /tmp/*

# Bundle API source
COPY . .

RUN set -xe; \
    \
    if [ "${APPLICATION_ENV}" = 'staging' ]; then \
      npm run build:staging; \
    elif [ "${APPLICATION_ENV}" = 'production' ]; then \
      npm run build; \
    fi;

EXPOSE 4200 80

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh; \
    ls -la dist;

ENTRYPOINT ["/entrypoint.sh"]


CMD [ "npm", "start" ]

FROM nginx:alpine as release

RUN apk update && apk upgrade

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=dev-builder /srv/app/dist/app /usr/share/nginx/html

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
