FROM node:14.10.0

RUN npm install && npm test && npm run build