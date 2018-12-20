FROM node:11.5.0

RUN npm install && npm test && npm run build