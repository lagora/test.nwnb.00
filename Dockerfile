FROM node:15.4.0

RUN npm install && npm test && npm run build