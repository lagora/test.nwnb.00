FROM node:10.2.0

RUN npm install && npm test && npm run build