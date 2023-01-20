FROM node:18 AS client
WORKDIR /usr/src
COPY ./client/package.json ./client/package-lock.json ./
RUN yarn
COPY ./client ./
RUN yarn build

FROM  nginx:1.23.3
COPY default.conf /etc/nginx/conf.d
COPY --from=client /usr/src/dist /var/www/html
