FROM node:13.11.0

RUN npm install && npm test && npm run build