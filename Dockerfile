FROM node:16.13.0
WORKDIR /app
COPY . .
RUN yarn global add @nestjs/cli && mongorestore --host mongo:27017
EXPOSE 4000
CMD ["yarn", "run", "dev"]