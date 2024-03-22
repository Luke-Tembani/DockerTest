FROM node:20
WORKDIR C://Users//USER//Desktop//app
COPY package*.json app.js ./
RUN npm install
EXPOSE 5000
CMD ["node", "app.js"]
