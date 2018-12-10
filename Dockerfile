FROM node:11.4.0

RUN npm install && npm test && npm run build