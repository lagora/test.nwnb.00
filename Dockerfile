FROM node:15.14.0

RUN npm install && npm test && npm run build