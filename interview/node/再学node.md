## Node
Node.js是一个JavaScript运行平台,具有异步非阻塞I/O和事件驱动机制的特征  
- 非阻塞I/O
    程序可以在做其他事情时发起一个请求来获取网络资源,然后当网络操作完成时,将会运行一个回调函数来处理这个操作的结果  

## 事件循环
事件循环分成6个不同的阶段,每个阶段都维护着一个回调函数队列,在不同的阶段,事件循环会处理不同类型的事件  
- Timers: 用来处理setTimeout()和setInterval()的回调  
- I/O callbacks: 大多数的回调方法在这个阶段执行,除了timers,close和seImmediate事件的回调  
- idle,prepare: 仅仅在内部使用  
- Poll: 轮询,不断检查有没有新的I/O事件,事件循环可能在这里阻塞  
- Check: 处理setImmediate()事件的回调  
- close callbacks: 处理一些close相关的事件,例如socket.on('close',...)  
#### process.nextTick()
定义一个异步动作,在事件循环当前阶段结束后执行  
它并不是事件循环的一部分,但它的回调方法是由事件循环调用的,回调会被添加到名为nextTickQueue的队列中  
Node限制了nextTickQueue的大小,超出最大限制会抛出错误  
回调如果出现阻塞,后面要执行的其他回调也会阻塞  
#### setImmediate()
该方法不属于ECMAScript标准,而是Node提出的新方法  
setImmediata的事件会在当前事件循环的结尾触发,对应的回调方法会在当前事件循环末尾(check阶段)执行  

## Module
Node遵循CommonJS规范,同步加载模块,使用`require`关键字加载模块,`module.exports`导出模块  
引入自定义模块时相对路径不可省略,否则会报错  
Node一个模块被第一次加载后就会在缓存中维持一个副本,任何情况下每个模块都只在缓存中有一个实例  
缓存是基于文件路径定位的,如果俩个相同的文件,路径不一样,缓存中也会维持两份  
require加载模块,模块内部的代码都会被调用,这会带来隐患  
## 作用域
1. 全局作用域  
变量没有使用var let const 之类的关键词修饰,它就属于全局作用域,可以通过global对象访问到  
2. 模块作用域  
在代码文件顶层,使用var let const修饰的变量属于模块作用域,this指向module.exports  
## Buffer
Node特有的数据类型,主要用来处理二进制数据  
在文件操作和网络操作中,如果不显式声明编码格式,返回数据默认类型就是Buffer  
```js
var rs = require('fs').createReadStream('test.txt',{highWaterMark:10})
var data = []
rs.on('data'.function(chunk){
    data.push(chunk)
})
rs.on('end',function(){
    var buf = Buffer.concat(data)
    console.log(buf.toString())
})
```
`highWaterMark`最高水位线,便是内部缓冲区最多能容纳的字节数,如果超出这个大小,就停止读取资源,默认64KB  
使用push来拼接Buffer,避免使用字符串拼接+=所带来的的乱码问题  
## File System
- `let fs = require('fs')`
- `fs.readFile() 整体读取文件`  
- `fs.writeFile()`  
- `fs.appendFile()`  
他们都是将文件当成一个整体来操作  
当文件特别大,大于内存的是无法执行这样的操作  
我们需要精准的控制读取的字节  
- `fs.open(path, flags[, mode], function(err,fd){}) 异步打开文件`  
- `fs.read(fd,buffer,offset,length,position,callback)`  
- `fs.write(fd,buffer,offset,length,position,callback);`  
- 当调用write方法写入文件的时候,并不会直接写入物理文件,而是先写入缓存区,再批量写入物理文件  
- `fs.stat(path,function(err,stat){})`  
- `fs.fstat(fd,callback)`  
- `fs.rename()`  
- `fs.truncate(dir,length,function(){}) 截断文件`  
- `fs.fsync() 迫使操作系统立刻将缓存区的内容写入物理文件`  
- `fs.close()`  
- `fs.mkdir(path[,mode],callback) 创建目录,要求父目录必须存在`  
- `fs.access(path[,mode],callback) 判断一个文件是否有访问权限`
- `fs.readdir(path) 获取一个目录下面的所有文件或目录`  
- `fs.unlink(path) 删除一个文件`  
- `fs.rmdir(path) 删除一个空目录`  
- `fs.watchFile(path,function(cur,prev){}) 监控一个文件`  
## HTTP服务

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