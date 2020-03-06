FROM node:13.10.1

RUN npm install && npm test && npm run build