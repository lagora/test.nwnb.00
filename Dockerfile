FROM node:10.0.0

RUN npm install && npm test && npm run build