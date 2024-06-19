#!/usr/bin/env bash

./node_modules/.bin/env-cmd -f .env.test npm run migration:up
./node_modules/.bin/env-cmd -f .env.test npm run migration:status
