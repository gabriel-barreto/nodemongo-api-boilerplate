# Getting image from Docker Hub
FROM node:alpine

# Setting Environment varaibles
ENV APPPATH /usr/app

# Changing dir
WORKDIR /usr/app
RUN cd /usr/app

# Starting app
CMD npm run dev