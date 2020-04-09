FROM node:13.12.0-alpine AS build

RUN apk add --update --no-cache \
    python \
    make \
    g++

WORKDIR /src
COPY ./package* ./

# 
RUN npm ci

COPY . .

# RUN npm run format
# RUN npm run test
RUN npm run build

RUN npm prune --production

FROM node:13.12.0-alpine

ENV PORT=3000
EXPOSE $PORT

WORKDIR /usr/sandbox

COPY --from=build /src/node_modules node_modules
COPY --from=build /src/web web

USER node

CMD ["node", "./web/server/index.js"]