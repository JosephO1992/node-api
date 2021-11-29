FROM node:16-alpine

RUN npm install -g nodemon

WORKDIR /home/node/code

COPY --chown=node:node . .

RUN npm ci

CMD ["nodemon", "/home/node/code/app.js"]