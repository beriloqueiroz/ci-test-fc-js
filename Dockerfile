FROM node:20.18.1-alpine3.21
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package.json package.json
USER node
RUN npm install --ignore-scripts
COPY --chown=node:node --chmod=755 index.js index.js
COPY --chown=node:node --chmod=755 example.js example.js
CMD [ "npm","run", "example"]