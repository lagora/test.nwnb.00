FROM node:13.8.0

RUN npm install && npm test && npm run build