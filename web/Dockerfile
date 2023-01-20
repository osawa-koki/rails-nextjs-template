FROM node:18 AS client
WORKDIR /usr/src
COPY ./client ./client
RUN cd ./client && yarn install && yarn build

FROM  nginx:1.23.3
COPY default.conf /etc/nginx/conf.d
COPY --from=client /usr/src/client/dist /var/www/html
