#!/usr/bin/env bash

set -ex

BASEDIR=$(dirname $(dirname $(realpath $0)))

cd $BASEDIR

# Save database URL to dotenv file for Prisma
if [ -z $DEVCONTAINER ]
then
  echo "DATABASE_URL=\"postgresql://postgres:1234@localhost:5443/royals?schema=public\"" > .env
else
  echo "DATABASE_URL=\"postgresql://postgres:1234@royals-dev-db:5432/royals?schema=public\"" > .env
fi

# Save cache database URL and PORT to dotenv file
if [ -z $DEVCONTAINER ]
then
  echo "REDIS_URL=\"localhost\"" >> .env
  echo "REDIS_PORT=6390" >> .env
else
  echo "REDIS_URL=\"royals-dev-cache\"" >> .env
  echo "REDIS_PORT=6379" >> .env
fi

# Use docker-compose profile
if [ -z $DEVCONTAINER ]
then
  docker-compose up -d
fi

echo "JWT_SECRET=$(head -c 64 /dev/urandom | LC_ALL=C tr -dc A-Za-z0-9 | sha256sum | head -c 64)" >> .env
echo "ORIGIN=http://localhost:5173" >> .env

# Generate thunder client environment
# Since environment variable changes frequently, let git ignore actual environment variables
cp thunder-tests/thunderEnvironmentBase.json thunder-tests/thunderEnvironment.json

# Install packages
npm install

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
