# Frontend
FROM node:20 as frontend

WORKDIR /app

COPY packages/frontend/package*.json ./

RUN yarn install

COPY packages/frontend/. .

EXPOSE 3000

CMD ["yarn", "start"]


# Backend
FROM node:20 as backend

WORKDIR /app

COPY packages/backend/package*.json ./

RUN yarn install

COPY packages/backend/. .

EXPOSE 3001

CMD ["yarn", "start"]