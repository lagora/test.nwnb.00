FROM node:11.2.0

RUN npm install && npm test && npm run build