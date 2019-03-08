FROM node:11.11.0

RUN npm install && npm test && npm run build