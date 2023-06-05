#!/bin/bash
pnpm install -g pm2

PM2_PID=$(pgrep -f pm2)

if [ -z $PM2_PID ]
then
  pm2 start /home/ec2-user/action/main.js -i 0 --name royals_api_server
else
  pm2 reload royals_api_server
fi