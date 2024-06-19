FROM node:16-alpine

WORKDIR /usr/app

COPY . .

WORKDIR /usr/app/shared
RUN npm install

WORKDIR /usr/app/server
RUN npm install
RUN npm run build

EXPOSE 3000
ENV PORT 3000

CMD [ "npm", "run", "start:prod"]
