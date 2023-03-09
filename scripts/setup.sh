#!/usr/bin/env bash

set -ex

BASEDIR=$(dirname $(dirname $(realpath $0)))

cd $BASEDIR

# Save database URL to dotenv file for Prisma
if [ -z $DEVCONTAINER ]
then
  echo "DATABASE_URL=\"postgresql://postgres:1234@localhost:5443/royals?schema=public\"" > .env.local
else
  echo "DATABASE_URL=\"postgresql://postgres:1234@dev-db:5432/royals?schema=public\"" > .env.local
fi

# Save cache database URL and PORT to dotenv file
if [ -z $DEVCONTAINER ]
then
  echo "CACHE_DATABASE_URL=\"localhost\"" >> .env.local
  echo "CACHE_DATABASE_PORT=6390" >> .env.local
else
  echo "CACHE_DATABASE_URL=\"royals-dev-cache\"" >> .env.local
  echo "CACHE_DATABASE_PORT=6389" >> .env.local
fi

# Use docker-compose profile
if [ -z $DEVCONTAINER ]
then
  docker-compose up -d
fi

echo "JWT_SECRET=$(head -c 64 /dev/urandom | LC_ALL=C tr -dc A-Za-z0-9 | sha256sum | head -c 64)" >> .env.local

# Install lefthook for git hook
npx lefthook install

# Apply database migration
for i in {1..5}
do
  cd $BASEDIR
  npx prisma migrate dev && break # break if migration succeed
  echo -e '\n⚠️ Failed to migrate. Waiting for db to be ready...\n'
  sleep 5
done