FROM node:20.18.1-bullseye
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD [ "npm","run", "example"]