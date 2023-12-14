FROM node:lts-alpine
RUN npm install -g pnpm@7.27.0
RUN pnpm --version
WORKDIR /usr/src/app
COPY pnpm-lock.yaml ./
RUN pnpm fetch
ADD . ./
RUN pnpm install -r --offline
EXPOSE 8080
CMD [ "node", "main.js" ]
