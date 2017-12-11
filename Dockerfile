FROM node:9.2.1

RUN npm install && npm test && npm run build