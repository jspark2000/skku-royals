### BUILDER ###
FROM node:18-alpine AS builder

COPY . /build
WORKDIR /build

RUN corepack enable
RUN pnpm --filter=backend deploy out

WORKDIR /build/out
RUN pnpm prisma generate
RUN pnpm build

### PRODUCTION ###
FROM node:18-alpine

ENV NODE_ENV=production
COPY --from=builder /build/out .
COPY ./terraform/build/entrypoint.sh .

ENTRYPOINT ["./entrypoint.sh"]