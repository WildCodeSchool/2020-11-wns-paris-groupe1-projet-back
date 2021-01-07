# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
RUN npm run watch

# add app
COPY . ./

# start app
CMD node index.js