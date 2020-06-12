
FROM node:10 AS builder

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:10-alpine

WORKDIR /app

COPY --from=builder /app ./

WORKDIR /app/build

EXPOSE 3000

CMD [ "node", "server.js" ]