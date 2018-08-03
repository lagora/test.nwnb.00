FROM node:10.8.0

RUN npm install && npm test && npm run build