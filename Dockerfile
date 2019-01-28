FROM node:11.8.0

RUN npm install && npm test && npm run build