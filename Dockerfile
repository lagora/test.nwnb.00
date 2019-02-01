FROM node:11.9.0

RUN npm install && npm test && npm run build