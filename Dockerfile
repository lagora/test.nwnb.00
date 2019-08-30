FROM node:12.9.1

RUN npm install && npm test && npm run build