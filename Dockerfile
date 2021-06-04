FROM node:16.3.0

RUN npm install && npm test && npm run build