## Node
- 服务稳定性  
server端可能会遭受各种恶意攻击和误操作  
单个客户端可以以外挂掉,但是服务端不能  
使用PM2做进程守护  
- 考虑CPU和内存(优化,扩展)  
使用stream写日志,使用redis存session  
- 日志记录  
server端要记录日志,存储日志,分析日志  
- 安全  
随时准备接收各种恶意攻击,如越权操作,数据库攻击等  
登录验证,xss攻击,sql注入  
- 集群和服务拆分  


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