FROM node:16.1.0

RUN npm install && npm test && npm run build