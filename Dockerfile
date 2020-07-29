FROM node:14.6.0

RUN npm install && npm test && npm run build