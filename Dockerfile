FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN apt-get update && apt-get install -y default-mysql-client

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]
