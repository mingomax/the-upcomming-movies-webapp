#!/bin/sh
set -e
cd /srv/backend

if [ ! -d "node_modules" ]; then
    npm install && npm dedupe;
fi

exec "$@"
