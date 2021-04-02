FROM node:15.13.0

RUN npm install && npm test && npm run build