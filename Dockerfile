FROM node:22-alpine AS base

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

COPY . .

EXPOSE 3000

ENTRYPOINT ["yarn", "dev"]