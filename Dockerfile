FROM node:14-alpine
WORKDIR /user/src/app

ENV PING=pong
#COPY package*.json /usr/src/app/
#OR
COPY package*.json ./

# RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY . .
#OR
#COPY . /usr/src/app/

EXPOSE 5000

# CMD [ "npm", "start" ]