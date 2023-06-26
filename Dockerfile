FROM node:14-alpine
WORKDIR /app
COPY package*.json /app/
RUN yarn
COPY . /app
RUN yarn build
CMD ["npx", "serve", "-s", "build", "-l", "3000"]

