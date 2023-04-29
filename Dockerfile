FROM node:18-alpine3.16 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build

FROM nginx:1.23.3-alpine
# COPY /app/app.conf /etc/nginx/nginx.conf
# RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx

