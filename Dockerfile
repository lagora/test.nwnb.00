FROM node:13.7.0

RUN npm install && npm test && npm run build