FROM node:15.12.0

RUN npm install && npm test && npm run build