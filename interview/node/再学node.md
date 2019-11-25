## Node
## 事件循环
事件循环分成6个不同的阶段,每个阶段都维护着一个回调函数队列,在不同的阶段,事件循环会处理不同类型的事件  
- Timers: 用来处理setTimeout()和setInterval()的回调  
- I/O callbacks: 大多数的回调方法在这个阶段执行,除了timers,close和seImmediate事件的回调  
- idle,prepare: 仅仅在内部使用  
- Poll: 轮询,不断检查有没有新的I/O事件,事件循环可能在这里阻塞  
- Check: 处理setImmediate()事件的回调  
- close callbacks: 处理一些close相关的事件,例如socket.on('close',...)  


## Express

## Koa

## 问题
- nodejs连接mysql数据库，报错Client does not support authentication protocol requested by server的解决方法   
MySQL8.0版本的加密方式和MySQL5.0的不一样，连接会报错。   
解决方法如下：  
1. 通过命令行进入解压的mysql根目录下。  
2. 登陆数据库  
`mysql -uroot -p`  
3. 输入root的密码   
`Enter password: ******`  
4. 更改加密方式   
`mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;`  
5. 更改密码：该例子中 123456为新密码   
`mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';`  
6. 刷新：   
`mysql> FLUSH PRIVILEGES;`  

- 更改数据库密码
`ALTER USER 'root'@'localhost' IDENTIFIED BY '!Password1';`  

#### centos下修改nvm下载地址
`export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node`  