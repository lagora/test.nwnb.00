FROM node:13.3.0

RUN npm install && npm test && npm run build