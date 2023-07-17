FROM node:18-alpine

WORKDIR /app

ADD ./backend /app/

RUN corepack enable
RUN pnpm install
RUN pnpm build

EXPOSE 8080

ENTRYPOINT pnpm run start:prod