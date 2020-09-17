FROM node:14.11.0

RUN npm install && npm test && npm run build