FROM node:9.7.1

RUN npm install && npm test && npm run build