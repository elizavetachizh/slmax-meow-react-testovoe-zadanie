FROM node:18.17

WORKDIR app

COPY package*.json ./
RUN npm install --force
COPY . .

#RUN rm /app/prod.env

CMD ["npm", "run", "dev"]
