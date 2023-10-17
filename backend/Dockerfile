FROM node:16.13.1-alpine3.14

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./prisma ./prisma
COPY ./src ./src

RUN npm install
RUN npm run prisma:generate
RUN npm run prisma:seed
CMD npm run dev