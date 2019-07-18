## 常用命令
`pm2 start ...`  
`pm2 list`  
`pm2 restart <AppName>/<id>`  
`pm2 stop <AppName>/<id>`  
`pm2 delete <AppName>/<id>`  
`pm2 info <AppName>/<id>`  
`pm2 log <AppName>/<id>`  
`pm2 monit <AppName>/<id>`  

## 常用配置
```json
{
    "app":{
        "name":"pm2-name",
        "script":"bin/www",
        "watch":true,
        "ignore_watch":[
            "node_modules",
            "logs"
        ],
        "instances":4,
        "error_file":"logs/err.log",
        "out_file":"logs/out.log",
        "log_data_format":"YYYY-MM-DD HH:mm:ss"
    }
}
```