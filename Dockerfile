FROM node:13.13.0

RUN npm install && npm test && npm run build