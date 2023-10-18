FROM node:18.7-alpine

WORKDIR /usr/src/app

COPY ["package.json", "tsconfig.json", ".env", "./"]
COPY ./prisma ./prisma
COPY ./src ./src

RUN npm install
RUN npm run prisma:generate

CMD npm run dev