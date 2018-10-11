FROM node:8.11.0

WORKDIR /app
RUN mkdir src

COPY package.json /app
COPY package-lock.json /app

//RUN npm install
RUN if [ "x$prod" = "true" ] ; then npm install production  ; else npm install ; fi

COPY . /app

EXPOSE 3000
CMD ["npm", "start"]
