FROM node:15.3.0

RUN npm install && npm test && npm run build