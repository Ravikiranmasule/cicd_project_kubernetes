# Stage 1: Build
FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --quiet --legacy-peer-deps
COPY . .
RUN npm run build --prod

# Stage 2: Serve
FROM nginx:stable-alpine
# IMPORTANT: This line connects your nginx.conf to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*
# Ensure this matches your project name (luxtavern)
COPY --from=build /app/dist/luxtavern/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
