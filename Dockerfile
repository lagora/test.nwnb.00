FROM node:9.11.1

RUN npm install && npm test && npm run build