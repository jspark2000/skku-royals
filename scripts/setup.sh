#!/usr/bin/env bash

set -ex

BASEDIR=$(dirname $(dirname $(realpath $0)))

cd $BASEDIR

# Save database URL to dotenv file for Prisma
if [ -z $DEVCONTAINER ]
then
  echo "DATABASE_URL=\"postgresql://postgres:1234@localhost:5443/royals?schema=public\"" > backend/.env
else
  echo "DATABASE_URL=\"postgresql://postgres:1234@royals-dev-db:5432/royals?schema=public\"" > backend/.env
fi

# Save cache database URL and PORT to dotenv file
if [ -z $DEVCONTAINER ]
then
  echo "REDIS_URL=\"localhost\"" >> backend/.env
  echo "REDIS_PORT=6390" >> backend/.env
else
  echo "REDIS_URL=\"royals-dev-cache\"" >> backend/.env
  echo "REDIS_PORT=6379" >> backend/.env
fi

echo "REDIS_PASSWORD=1234" >> backend/.env

# Use docker-compose profile
if [ -z $DEVCONTAINER ]
then
  docker-compose up -d
fi

echo "JWT_SECRET=45069a61bc8cacfac7300fe9b22216cae315be07d4bfe043d7a4886b1b40fe31" >> backend/.env
echo "ORIGIN=http://localhost:5173" >> backend/.env

# Set PORT
echo "PORT=4000" >> backend/.env

# Set BAND API
echo "# GET BAND API KEY HERE - https://developers.band.us/" >> backend/.env
echo "CLIENT_ID=YOUR_CLIENT_ID_HERE" >> backend/.env
echo "CLIENT_SECRET=YOUR_CLIENT_SECRET_HERE" >> backend/.env
echo "ROYALS_BAND_KEY=YOUR_BAND_KEY_HERE" >> backend/.env

# Set OPENAI KEY - 
echo "OPENAI_API_KEY=YOUR_OPENAI_API_KEY_HERE" >> backend/.env

# Generate thunder client environment
# Since environment variable changes frequently, let git ignore actual environment variables
cp thunder-tests/thunderEnvironmentBase.json thunder-tests/thunderEnvironment.json

# Install pnpm
npm i -g pnpm
pnpm install

# Install lefthook for git hook
npx lefthook install

# Apply database migration
for i in {1..5}
do
  pnpm --filter backend exec prisma generate &&
  pnpm --filter backend exec prisma migrate dev && break # break if migration succeed
  echo -e '\n⚠️ Failed to migrate. Waiting for db to be ready...\n'
  sleep 5
done

# seeding database
pnpm --filter backend exec prisma migrate reset -f

# Enable git auto completion
if ! grep -q "bash-completion/completions/git" ~/.bashrc
then
  echo "source /usr/share/bash-completion/completions/git" >> ~/.bashrc
fi