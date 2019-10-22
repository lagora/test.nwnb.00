FROM node:12.13.0

RUN npm install && npm test && npm run build