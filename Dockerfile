FROM node:9.10.0

RUN npm install && npm test && npm run build