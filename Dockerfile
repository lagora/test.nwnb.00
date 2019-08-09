FROM node:12.8.0

RUN npm install && npm test && npm run build