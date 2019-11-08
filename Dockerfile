FROM node:13.1.0

RUN npm install && npm test && npm run build