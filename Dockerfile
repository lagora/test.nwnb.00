FROM node:9.9.0

RUN npm install && npm test && npm run build