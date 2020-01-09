FROM node:13.6.0

RUN npm install && npm test && npm run build