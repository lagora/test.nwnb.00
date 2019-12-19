FROM node:13.4.0

RUN npm install && npm test && npm run build