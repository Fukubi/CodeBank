FROM node:16.4.0-alpine3.13

RUN apk add --no-cache bash
RUN apk add git

RUN npm install -g @nestjs/cli@7.6.0

USER node

WORKDIR /home/node/app