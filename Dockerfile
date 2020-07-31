FROM node:14.7.0

RUN npm install && npm test && npm run build