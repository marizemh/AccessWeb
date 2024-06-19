#!/usr/bin/env bash

#
# tsconfig.json required for ts paths resolution
#
cp tsconfig.dist.json dist/tsconfig.json

#
# environment variables
#
cp .env dist/.

#
# Replacing '*.ts' => '*.js' for compiled sources
# Linux || macOS
#
sed -i 's/*.ts/*.js/g' dist/server/src/config/typeorm/ormconfig.js && echo 'on Linux'    \
    ||                                                                   \
sed -i '' 's/*.ts/*.js/g' dist/server/src/config/typeorm/ormconfig.js && echo 'on macOS'
