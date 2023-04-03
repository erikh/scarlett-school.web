FROM node AS build

COPY . /node-build
WORKDIR /node-build
RUN npm install
RUN npm run build

FROM nginx

COPY --from=build /node-build/build /usr/share/nginx/html
COPY --from=build /node-build/source/data /usr/share/nginx/html/data
COPY nginx.conf /etc/nginx/conf.d/default.conf
