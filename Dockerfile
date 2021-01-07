# pull official base image
FROM node:alpine

# Create app directory
RUN mkdir /app
WORKDIR /app

# Install app dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . ./

# EXPOSE 8080
CMD node --experimental-modules src/index.js