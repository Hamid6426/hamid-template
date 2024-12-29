# Frontend
FROM node:20 as frontend

WORKDIR /app

COPY packages/frontend/package*.json ./

RUN yarn install --production

COPY packages/frontend/. .

EXPOSE 80

CMD ["yarn", "start"]


# Backend
FROM node:20 as backend

WORKDIR /app

COPY packages/backend/package*.json ./

RUN yarn install --production

COPY packages/backend/. .

EXPOSE 443

CMD ["yarn", "start"]