FROM node:13.0.0

RUN npm install && npm test && npm run build