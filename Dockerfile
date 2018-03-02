FROM node:9.7.0

RUN npm install && npm test && npm run build