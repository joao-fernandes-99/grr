FROM node:latest AS build
WORKDIR /usr/src/grr
COPY --chown=node:node . .
RUN npm i

FROM node:lts-alpine
RUN apk add dumb-init
ENV NODE_ENV production
USER node
WORKDIR /usr/src/grr
COPY --chown=node:node --from=build /usr/src/grr/node_modules /usr/src/grr/node_modules
COPY --chown=node:node . /usr/src/grr
RUN npm run build
EXPOSE 3001
CMD ["dumb-init", "npm", "run", "start"]
