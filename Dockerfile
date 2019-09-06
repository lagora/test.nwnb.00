FROM node:12.10.0

RUN npm install && npm test && npm run build