#!/bin/bash
. ~/.nvm/nvm.sh
nvm use 18

cd /home/ec2-user/action

npm install
npx prisma generate
npm run migrate:prod
npm run build

PM2=$(pm2 ls | grep royals)
LEN=${#PM2}

if [ ${LEN} -lt 10 ]
then
  npm run start:prod
else
  npm run start:reload
fi