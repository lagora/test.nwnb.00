FROM node:15.1.0

RUN npm install && npm test && npm run build