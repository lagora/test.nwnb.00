FROM node:12.3.1

RUN npm install && npm test && npm run build