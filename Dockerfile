FROM node:14.5.0

RUN npm install && npm test && npm run build