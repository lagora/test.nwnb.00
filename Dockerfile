FROM node:12.5.0

RUN npm install && npm test && npm run build