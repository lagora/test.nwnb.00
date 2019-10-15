FROM node:12.12.0

RUN npm install && npm test && npm run build