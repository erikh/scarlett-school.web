FROM node AS build

COPY . /node-build
WORKDIR /node-build
COPY Caddyfile /
RUN npm install
RUN npm run build

FROM caddy

COPY --from=build /node-build/build /build
COPY --from=build /Caddyfile /etc/caddy
