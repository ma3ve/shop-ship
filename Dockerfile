FROM node:16
WORKDIR '/app'
COPY . .
RUN npm install && cd client && npm install && cd ..
EXPOSE 5000
RUN npm run build
CMD ["npm", "start"]