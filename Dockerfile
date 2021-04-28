FROM node:16.0.0

RUN npm install && npm test && npm run build