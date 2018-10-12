FROM node:10.12.0

RUN npm install && npm test && npm run build