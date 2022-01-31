FROM node:16

COPY . .
RUN npm install && cd client && npm install 
RUN npm run build
EXPOSE 5000
CMD [ "npm","start"]