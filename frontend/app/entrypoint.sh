#!/bin/sh
set -e
cd /srv/app

if [ ! -d "node_modules" ]; then
    npm install && npm dedupe;
fi

echo 'entrypoint';

exec "$@"
