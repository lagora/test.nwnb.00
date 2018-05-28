FROM node:10.2.1

RUN npm install && npm test && npm run build