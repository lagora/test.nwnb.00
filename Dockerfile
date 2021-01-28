FROM node:15.7.0

RUN npm install && npm test && npm run build