FROM node:16.4.2

RUN npm install && npm test && npm run build