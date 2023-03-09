#!/usr/bin/env bash

BASEDIR=$(dirname $(dirname $(realpath $0)))

cd $BASEDIR
npm install

# delete empty migration folders git has left
find $BASEDIR/prisma/migrations -empty -type d -delete

# load database url
source $BASEDIR/.env

if ! npx prisma migrate diff \
  --from-url $DATABASE_URL \
  --to-migrations prisma/migrations \
  --shadow-database-url $DATABASE_URL \
  --exit-code
then
  npx prisma migrate reset -f
fi
