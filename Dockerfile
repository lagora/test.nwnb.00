FROM node:15.0.1

RUN npm install && npm test && npm run build