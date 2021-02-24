FROM node:15.10.0

RUN npm install && npm test && npm run build