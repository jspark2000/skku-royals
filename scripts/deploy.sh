#!/bin/bash
. /home/ec2-user/.nvm/nvm.sh
nvm install --lts
npm install -g pnpm
npm install -g pm2

cd /home/ec2-user/action

pnpm install
pnpm exec prisma generate
pnpm migrate:prod
pnpm build

PM2=$(pgrep -f pm2)

if [ -z $PM2 ]
then
  pnpm start:prod
else
  pnpm start:reload
fi