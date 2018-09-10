FROM node:10.10.0

RUN npm install && npm test && npm run build