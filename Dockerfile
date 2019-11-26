FROM node:13.2.0

RUN npm install && npm test && npm run build