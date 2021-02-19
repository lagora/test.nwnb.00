FROM node:15.9.0

RUN npm install && npm test && npm run build