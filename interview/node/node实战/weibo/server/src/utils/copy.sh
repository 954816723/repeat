#!/bin/sh
cd E:/repeat/interview/node/node实战/weibo/server/logs
cp access.log $(date +%Y-%m-%d).access.log
echo '' > access.log