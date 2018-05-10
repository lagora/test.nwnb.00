FROM node:10.1.0

RUN npm install && npm test && npm run build