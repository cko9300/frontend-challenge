# pull official base image
FROM node:14.16.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN yarn install --silent
RUN yarn add react-scripts@4.0.3 -g --silent

# add app
COPY . ./

# start app
CMD ["yarn", "start"]