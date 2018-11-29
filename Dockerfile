FROM node:11.3.0

RUN npm install && npm test && npm run build