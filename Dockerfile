FROM node:14-alpine
WORKDIR /app
COPY package*.json /app/
RUN yarn install --frozen-lockfile
COPY . /app
RUN yarn build
CMD ["npx", "serve", "-s", "build", "-l", "3000"]

