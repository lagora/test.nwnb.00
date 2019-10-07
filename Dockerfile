FROM node:12.11.0

RUN npm install && npm test && npm run build