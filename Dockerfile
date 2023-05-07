FROM node AS build

ARG PORT

COPY . /node-build
WORKDIR /node-build
COPY nginx.conf.template /
RUN cat /nginx.conf.template | sed -e s/@PORT@/${PORT}/g >/nginx.conf
RUN npm install
RUN npm run build

FROM nginx

COPY --from=build /node-build/build /usr/share/nginx/html
COPY --from=build /node-build/source/data /usr/share/nginx/html/data
COPY --from=build /nginx.conf /etc/nginx/conf.d/default.conf
