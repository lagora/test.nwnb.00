FROM node:14.10.1

RUN npm install && npm test && npm run build