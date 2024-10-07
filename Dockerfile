FROM node:20.16.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npx yarn

COPY . .

RUN npx yarn build

CMD ["node", "dist/main.js"]

