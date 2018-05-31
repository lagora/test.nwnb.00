FROM node:10.3.0

RUN npm install && npm test && npm run build