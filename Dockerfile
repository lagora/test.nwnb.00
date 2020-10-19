FROM node:14.14.0

RUN npm install && npm test && npm run build