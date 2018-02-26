FROM node:9.6.1

RUN npm install && npm test && npm run build