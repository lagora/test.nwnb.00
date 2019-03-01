FROM node:11.10.1

RUN npm install && npm test && npm run build