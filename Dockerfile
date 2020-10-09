FROM node:14.13.1

RUN npm install && npm test && npm run build