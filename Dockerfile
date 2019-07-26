FROM node:12.7.0

RUN npm install && npm test && npm run build