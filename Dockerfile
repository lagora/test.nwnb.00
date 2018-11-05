FROM node:11.1.0

RUN npm install && npm test && npm run build