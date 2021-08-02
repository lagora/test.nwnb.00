FROM node:16.6.0

RUN npm install && npm test && npm run build