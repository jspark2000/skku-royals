#!/bin/bash
nvm install --lts
npm update -g pnpm
npm update -g pm2

cd /home/ec2-user/action

pnpm install
pnpm exec prisma generate
pnpm migrate:prod
pnpm build

PM2=$(pm2 ps | grep royals)
LEN=${#PM2}

if [ ${LEN} -lt 10 ]
then
  pnpm start:prod
else
  pnpm start:reload
fi