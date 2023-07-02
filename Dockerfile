FROM node:14-alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=production

COPY . .

RUN npm run build

CMD ["npx", "serve", "-s", "build", "-l", "80"]

