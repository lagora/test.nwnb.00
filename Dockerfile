FROM node:14.8.0

RUN npm install && npm test && npm run build