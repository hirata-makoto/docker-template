FROM node:8.12.0-slim
ENV APP_ROOT /usr/src/sample-express

WORKDIR $APP_ROOT
RUN npm run build
RUN npm start

EXPOSE 3000
CMD ["npm", "start"]
