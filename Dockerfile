FROM node:13.5.0

RUN npm install && npm test && npm run build