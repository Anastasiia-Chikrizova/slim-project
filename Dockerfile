FROM node:22-alpine AS base

WORKDIR /app

COPY . .

RUN yarn

ENV VITE_APP_ENV="development"

EXPOSE 80

ENTRYPOINT ["yarn", "dev"]