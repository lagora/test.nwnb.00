FROM node:12.11.1

RUN npm install && npm test && npm run build