FROM node:11.0.0

RUN npm install && npm test && npm run build