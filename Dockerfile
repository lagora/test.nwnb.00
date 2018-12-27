FROM node:11.6.0

RUN npm install && npm test && npm run build