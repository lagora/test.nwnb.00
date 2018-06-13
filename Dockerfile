FROM node:10.4.1

RUN npm install && npm test && npm run build