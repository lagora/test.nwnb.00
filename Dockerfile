FROM node:14.4.0

RUN npm install && npm test && npm run build