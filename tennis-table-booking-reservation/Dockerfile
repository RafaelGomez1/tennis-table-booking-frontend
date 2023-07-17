# Stage 1: Build the Angular app
FROM node:18.10.0 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build -- --prod

# Stage 2: Serve the Angular app using NGINX
FROM nginx:1.21.0-alpine

COPY --from=builder /app/dist/my-angular-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
