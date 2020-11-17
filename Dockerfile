FROM node:15.2.1

RUN npm install && npm test && npm run build