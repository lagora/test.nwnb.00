FROM node:12.4.0

RUN npm install && npm test && npm run build