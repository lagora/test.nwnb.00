FROM node:12.8.1

RUN npm install && npm test && npm run build