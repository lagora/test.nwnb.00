FROM node:13.0.1

RUN npm install && npm test && npm run build