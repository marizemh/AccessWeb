### STAGE 1: Build ###
FROM node:16.13.0-alpine AS build

RUN apk add --no-cache \
    python3 \
    make \
    g++ 

WORKDIR /usr/src/app
COPY . .

WORKDIR /usr/src/app/shared
RUN npm install

WORKDIR /usr/src/app/client
RUN npm install
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine

COPY client/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/client/dist/* /usr/share/nginx/html
