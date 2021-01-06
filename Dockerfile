FROM node:15.5.1

RUN npm install && npm test && npm run build