FROM node:14-alpine
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build
CMD ["npx", "serve", "-s", "build", "-l", "3000"]

