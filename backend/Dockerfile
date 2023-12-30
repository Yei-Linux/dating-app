FROM node:18.7-alpine
MAINTAINER Jesus Alvan <jesusalvan2010@gmail.com>

WORKDIR /usr/src/app

COPY ["package.json", "tsconfig.json", ".env", "./"]
COPY ./prisma ./prisma
COPY ./src ./src

RUN apk update
RUN npm install
RUN npm run prisma:generate

EXPOSE 3001

CMD npm run dev