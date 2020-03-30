FROM node:13.12.0

RUN npm install && npm test && npm run build