FROM node:11.7.0

RUN npm install && npm test && npm run build