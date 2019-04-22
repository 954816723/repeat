## 常用模块  
- mime  
- chalk  
- debug   
- supervisor/pm2 node进程  
- handlebars js模板渲染引擎  
- yargs 处理命令行参数  
## console(基础调试/控制台)  
1. 标准输出  
标识符:1  
```js
console.log()
console.info()
console.dir() //可以列出对象的结构
console.trace() //跟踪当前代码的调用栈
```
2. 错误输出  
标识符:2  
将错误输出2重定向到标准输出1中  
`node name.js 1>a.log 2>&1`  
```js
console.warn()
console.error()
```
3. 断言  
如果表达式为真的话什么也不发生  
如果表达式为假就会报错  
`console.asssert(1==2,'报错')`  
4. 其他  
- `console.time(name)/console.timeEnd(name)` 统计两段代码之间执行时间  

## global(全局变量)
- windows里也有全局对象,但是不能直接访问,在浏览器中访问global是通过window实现的  
1. global的变量都是全局变量  
2. 所有的全局变量都是global的属性  
3. 常见属性  
- console  
- process  当前进程  
    `process.cwd()`当前工作目录  
    `process.chdir('..')`改变当前的工作目录  
    `process.memoryUsage()`当前内存使用量
- nextTick  
    `process.nextTick()`方法会将callback添加到下一个时间点的队列,一旦当前轮的事件循环全部完成,则调用下一个时间点的队列中的所有回调
    不同于`setTimeout(fn,0)`,它更高效,会在事件循环的下一个时间点中触发任何其他I/O事件包括定时器之前运行
- setInterval setTimeout setImmediate  
- nextTick和setImmediate区别和联系  
    nextTick把回调函数放在当前执行栈的底部
    setImmediate把回调函数放在事件队列的底部
- stdout stderr stdin  
- Buffer  
- clearInterval clearTimeout clearImmediate  

## process(进程相关)  

## events(事件机制)
- 在node的用于实现各种事件处理的event模块中,定义了EventEmitter类,所以可能触发事件的对象都是一个继承自EventEmitter类的子类实例对象  
- `addEventListener(event,listener)`  指定事件绑定事件处理函数
- `once(event,listener)`  指定事件绑定事件处理函数  
- `once(event,listener)`  只执行一次
- `removeListener(event,listener)`  对指定时间移除事件处理函数
- `removeAllListeners([event])`  对指定时间移除所有处理函数
- `setMaxListeners(n)`  指定事件处理函数的最大数量
- `listeners(event)`  获取指定事件的所有事件处理函数
- `emit(event,[arg1],[arg2],[...])`  手工触发指定事件

## util(实用工具类)  
- `util.inherit()继承`  
- `util.inspect()`  
- `util.isArray()/...`  

## module
- 命名空间->闭包(自执行函数)->require.js(AMD)->sea.js(CMD)->node.js(commonJs)->es6(es module)->umd  
- 在node.js里通过require方法加载其他模块  
- 这个加载时同步的  
    1. 找到这个文件  
    2. 读取此文件模块的内容  
    3. 把它封装在一个函数里执行  `!function(exports,require,module,__filename,__dirname){}()`
- 加载模块会实现缓存,当第一次加载模块后,会缓存这个模块的exports对象,再次加载这个模块的话,会直接从缓存中获取  
- 缓存存储在`require.cache`中,key是模块的绝对路径,value是模块的exports对象  
- node模块分类
    1. 原生模块
    2. 文件模块
    3. 第三方模块
- node中文件模块的类型有三种  
    1. js模块  
    2. json模块  (找到文件,读取文件内容,JSON.parse转成对象后返回)  
    3. node c++扩展二进制模块  
- `require`属性  
    1. resolve  模块的绝对路径    
    2. main  入口模块路径    
    3. extensions  扩展,不同模块类型处理方法    
    4. cache  缓存  
## buffer(二进制数据)  
- 缓冲区Buffer是暂时存放输入输出数据的一段内存  
- node提供了一个Buffer对象来提供对二进制数据的操作  
- 是一个表示固定内存分配的全局对象,所以要放到缓存区中的字节需要提前确定  
- Buffer好比一个由8位字节元素组成的数组,可以有效的在js中表示二进制数据  
1. 定义Buffer的三种方式  
    1.1 通过长度定义buffer  
        `const buf1 = Buffer.alloc(6) 获得6位初始化为0的buffer`  
        `const buf1 = Buffer.alloc(6,1) 可以填充默认值`  
        `const buf1 = Buffer.allocUnsafe(6) 获得未初始化的buffer`  
    1.2 通过数组定义buffer  
        `const buf = Buffer.from([1,2,3])`  
    1.3 字符创创建  
        `const buf = Buffer.from('呵呵')`  
2. 常用方法  
    `Buffer.fill(填充值,开始索引,结束索引)`  
    `Buffer.write(填充字符串,开始索引,填充长度,编码)`  
    `buf.toString([encoding[,start[,end]]])`  
    `buf.slice(start[,end]) 截取,注意是浅拷贝`   
    `Buffer.concat([buf1,buf2]) 合并buffer`  
    `Buffer.isBuffer 是否是一个buffer`  
    `buf.length/Buffer.byteLength('珠峰')`  

## string_decoder(二进制解码)  
- 解决截取乱码问题  
```js
let {StringDecoder} = require('string_decoder');
let sd = new StringDecoder;
let buffer = Buffer.from('嗯哼');
console.log(sd.write(buffer.slice(0,4)));
console.log(sd.write(buffer.slice(4)));
```

## fs(文件操作系统)  
- `let fs = require('fs')`
- `fs.readFile() 整体读取文件`  
- `fs.writeFile()`  
- `fs.appendFile()`  
他们都是将文件当成一个整体来操作  
当文件特别大,大于内存的是无法执行这样的操作  
我们需要精准的控制读取的字节  
- `fs.open(path, flags[, mode], callback) 异步打开文件`  
- `fs.read(fd,buffer,offset,length,position,callback)`  
- `fs.write(fd,buffer,offset,length,position,callback);`  
- 当调用write方法写入文件的时候,并不会直接写入物理文件,而是先写入缓存区,再批量写入物理文件  
- `fs.stat(path,function(err,stat){})`  
- `fs.rename()`  
- `fs.truncate(dir,length,function(){}) 截断文件`  
- `fs.fsync() 迫使操作系统立刻将缓存区的内容写入物理文件`  
- `fs.close()`  
```js
// fd 文件描述符 0 标准输入 1 标准输出 2 错误输出  
fs.open('./1.txt','r',0o666,function(err,fd){
    // buffer容器 offset写入容器时偏移量 length读取几个字节写入容器 position读取时的偏移量 callback回调
    // fs.read(fd,buffer,offset,length,position,callback)
    // bytesRead读到的字节数
    let buffer = Buffer.alloc(3);
    fs.read(fd,buffer,offset,length,position,function(err,bytesRead,buffer){
        
    })
    // buffer写入内容 offset从buffer第几个字节开始  length读几个字节 position写入位置
    // fs.write(fd,buffer,offset,length,position,callback);
    fs.write(fd,buffer,offset,length,position,callback);
    // 强行把缓存区的数据写入文件,并且关闭
    fs.fsync(fd,function(err){
        fs.close(function(){
            console.log('关闭');
        })
    })
})
```
- `fs.mkdir(path[,mode],callback) 创建目录,要求父目录必须存在`  
- `fs.access(path[,mode],callback) 判断一个文件是否有访问权限`
- `fs.readdir(path) 获取一个目录下面的所有文件或目录`  
- `fs.unlink(path) 删除一个文件`  
- `fs.rmdir(path) 删除一个空目录`  
- `fs.watchFile(path,function(cur,prev){}) 监控一个文件`  
- node默认不支持GBK编码,使用`iconv-lite`包转换为utf8格式  

## stream(流操作)  
- 流是一组有序的,有起点和终点的字节数据传输手段  
- 它不关心文件的整体内容,只关注是否从文件中读到了数据,以及读到数据之后的处理  
- 流是一个抽象接口,被node中很多对象实现  
######可读流createReadStream
- 将对象数据读取为流数据,当监听data事件后,开始发射数据  

```js
let fs = require('fs');
let rs - fs.createReadStream('./1.txt',{
    flags:'r',//标识符,对文件进行何种操作
    mode:0o666,//权限位
    start:3,//从当前索引开始
    encoding:'utf8',//设置编码
    end:8,//读到此索引为止
    highWaterMarker:3,//缓冲区大小,默认64k
})
rs.on('open',function(data){})//文件流才有
// 当监听data事件后,开始发射数据  
rs.on('data',function(data){//当流将数据块传送给消费者后触发
    console.log(data);
    rs.pause();//暂停读取和发射data事件
    setTimeout(function(){
        rs.resume();//恢复读取并触发data事件
    },2000)
})
// 当我们监听了一个可读流的readable事件,流会调用底层读取文件API方法填充缓存区  
// 填充完成后向外发射readable事件
rs.on('readable',function(){
    // 当读取一个字节后,缓存区剩下的不足highWaterMark,会再次读取highWaterMark个字节填充到缓存区中
    rs.read(1);
})
rs.on('error',function(data){})
rs.on('end',function(data){})
rs.on('close',function(data){})//文件流才有
```
######可写流
- 当往可写流里写数据的时候,不会立刻写入文件中,而是写入缓存区,缓存区的大小就是highWaterMark,默认16k  
- 等缓存区满了之后,才真正的写入文件里  
```js
let fs = require('fs');
let ws = fs.createWriteStream('./2.txt',{
    flags:'w',
    mode:0o666,
    start:0,
    highWaterMark:3
});
// 如果缓存区已满,返回false,未满则返回true  
// 即使返回false,还是能写入数据,缓存在内存中,等缓存区清空后再读取出来  
let flag = ws.write('1');
ws.end(chunk[,encoding[,callback]]);
ws.on('drain',function(){})//调用write返回false,当可以继续写入数据时触发drain
ws.on('finish',function(){})//调用了end方法,且缓冲区数据都传给底层系统后触发
```
######pipe
- 用法: `ReadStream.pipe(WriteStream)`  
```js
// pipe原理
let fs = require('fs');
let rs = fs.createReadStream('1.txt');
let ws = fs.createWriteStream('1.txt');
rs.on('data',function(data){
    let flag = ws.write(data);
    if(!flag){
        rs.pause;
    }
})
rs.on('drain',function(){
    rs.resume();
})
rs.on('end',function(){
    ws.end();
})
```
######unpipe
- 将之前通过pipe方法绑定的流分离  
###### node中有四种基本的流类型
- Readable 可读流(fs.createReadStream)    
- Writeable 可写流(fs.createWriteStream)   
- Duplex,可读写的流(例如 net.Socket)  
- Transform 在读写过程中可以修改和变换数据的Duplex流(例如 zlib.createDeflate())  
###### 流中的数据有两种模式
- 二进制模式  
    每一个分块都是buffer或者string对象  
- 对象模式  
    流内部处理的是一系列普通对象  
###### 可读流的两种模式
- 可读流工作在下面两种模式下: `flowing` 和 `paused`
- flowing模式下,可读流自动从系统底层读取数据,并通过EventEmitter接口的事件尽快将数据提供给应用  
- paused模式下,必须显示调用`stream.read()`方法来从流中读取数据片段  
- paused切换到flowing  
    - 监听data事件  
    - 调用stream.resume()  
    - 调用stream.pipe()方法将数据发送到Writable  
- 可读流借还到paused  
    - 如果不存在管道目标,通过调用stream.pause()实现  
    - 如果存在管道目标,通过取消data事件监听,调用stream.unpipe()移除所有管道目标  
- 如果Readable切换到flowing模式,流动模式不缓存,直接发射,然后读取下一次的数据,如果没有处理流中的数据，这些数据将会丢失  
###### 换行回车
- Unix中每行结尾只有换行 `\n`  
- Windows中每行结尾是 回车+换行 `\r\n`  
- Mac中,每行结尾是回车 `\r`
- 换行 \n 10 0A  
- 回车 \r 13 0D  

## net(网络TCP)  
- 传输层  
- 协议 : 为了让计算机能够通信,计算机需要定义通信规则,这些规则就是协议  
- 协议就是数据封装格式+传输  
###### OSI七层模型
- Open System Interconnection(开放系统交互模型),适用于所有的网络  
    - 应用层  网络服务与最终用户的一个接口  
    - 表示层  数据的表示,安全,压缩  
    - 会话层  建立,管理,终止会话  
    - 传输层  定义传输数据的协议端口号,以及流控和差错校验  
    - 网络层  进行逻辑地址寻址,事项不同网络之间的路径选择  
    - 数据链路层  建立逻辑连接,进行硬件地址寻址,差错校验等功能  
    - 物理层  建立,维护,断开物理连接  
###### 传输层
- 位于应用层和网络接口层之间  
- 是面向连接的,可靠的进程到进程通信的协议  
- TCP提供全双工服务,数据可以在同一时间双向传播  
- TCP将若干个字节构成一个分组,此分组称之为报文段(Segment)  
###### 协议的分类
- TCP  
    - 传输控制协议  
    - 可靠的,面向连接的协议  
    - 传输效率低  
- UDP  
    - 用户数据报协议  
    - 不可靠的,无连接的服务  
    - 传输效率高  
- TCP功能  
    - 将数据进行分段打包传输  
    - 对每个数据报编号控制顺序  
    - 运输中丢失,重发,和丢弃处理  
    - 流量控制避免拥堵  
- TCP数据包封装  
    - 源端口号(0-15)和目标端口号(16-31)(最大为65535),
        - 计算机通过端口号识别访问哪个服务,比如http/ftp  
        - 发送方端口号是进行随机端口,目标端口号决定了接收方哪个程序来  
    - 32位序列号  
        - TCP用序列号对数据包进行标记,以便达到目的地后重新重装  
        - 假设当前的序列号为s,发送数据长度为l,则下一次发送数据序列号为s+l  
        - 在建立连接是通常由计算机生成一个随机数作为序列号的初始值  
    - 确认应答号  
        - 它等于下一次应该接受到的数据的系列号,表示这个序列号之前的数据都被正常接受  
    - 首部长度  
        - TCP首部的长度,单位为4字节  
        - 如果没有可选字段,那这里的值就是5,表示TCP首部的长度为20字节  
    - 控制位  
        - TCP的连接,传输和断开都受这六个控制位的指挥  
        - URG(urgent紧急位) 紧急信号  
            - 紧急指针:在URG控制位为1时有效,表示紧急数据的末尾在TCP数据中的位置,通在暂时中断时使用(ctrl+c)  
        - ACK(acknowledgment确认) 为1表示确认号  
        - PSH(push急迫位) 缓存区将满,立刻传输数据   
        - RST(reset重置位)  连接断了重新连接  
        - SYN(synchronous同步序号位),TCP建立连接时要将这个值设为1  
        - FIN(finish终止位) 提出断开连接的一方将FIN置为1,表示要断开连接  
    - 窗口大小
        - 用于表示从应答号开始能够接受对少个8位字节,如果窗口大小为0,可以发送窗口探测  
        - 窗口值: 说明本地可以接受数据段的数目,根据网络通畅值大小时可变的,在TCP中进行流量控制  
    - 16位校验和
        - 用来做差错控制
        - TCP校验的计算包括TCP首部,数据和其它填充字节
        - 在发送TCP数据时由发送端计算校验和,到达目的地后再次计算,如果一致说明数据正确,否则数据被破坏,接收端将丢弃数据  
- 握手和断开  
    - 三次握手  
        - 第一次握手 主机A通过一个标识为SYN标识位的数据段发送给主机B请求连接,通过该数据段告诉主机B希望建立连接,需要B应答,并告诉B传输的起始序列号  
        - 第二次握手 主机B用一个确认应答ACK和同步序列号SYN标识位的数据段来响应主机A,一是发送ACK告诉主机A收到数据段,二是通知主机A从哪个序列号做标记  
        - 第三次握手 主机A确认收到主机B的数据段并可以开始传输实际数据  
    - 四次断开  
        - 主机A发送FIN控制位发出断开连接的请求  
        - 主机B进行响应,确认收到断开连接请求  
        - 主机B提出反方向的关闭要求  
        - 主机A手机主机B的关闭连接请求  

## http(网络服务)  
- 应用层  
- 请求的一方叫客户端,响应的一方叫服务端  
- 通过请求和响应达成通信  
- HTTP是一种不保存状态的协议  
###### 请求报文
- 请求行  
    - 方法  
        - GET  
        - POST  
        - PUT  
        - HEAD  
        - DELETE  
        - OPTIONS  
        - TRACE  
    - URL  
    - 协议版本号  
- 请求头  
    - 通用首部  
    - 请求首部  
    - 响应首部  
    - 实体首部 (都是以Content开头,描述请求体信息)  
- 请求体  
###### 响应报文  
- 响应行  
    - 协议版本  
    - 状态码  
    - 状态码短语  
- 响应头  
    - 响应首部字段  
    - 通用首部字段  
    - 实体首部字段  
- 响应体  
###### 编码
- HTTP可以在传输的过程中通过编码提升传输效率,但会消耗更多的CPU时间  
- 编码压缩
    - 发送文件是可以先用ZIP压缩功能后再发送文件  
        - gzip  
        - compress  
        - deflate  
        - identify  
- 分割发送的分块传输编码  
    - 请求的实体在尚未传输完成前浏览器不能显示,所以在传输大容量数据时,通过把数据分割成多块,能让浏览器逐步显示页面  
- 多部分对象集合  
    - 一份报文主体中可以包含多种类型实体  
    - 使用boundary字符串来划分部分对象指明的各类实体,在各个实体起始行之前插入--标记,对部分对象集合最后插入--标记  
- 获取部分内容的范围请求  
    - 请求头中的Range来指定资源的byte范围  
    - 响应会返回状态码206响应报文  
    - 对于多重范围的范围请求,响应会在首部字段Conten-Type中表名 multipart/byteranges
###### 内容协商
- 首部字段  
    - Accept  
    - Accept-Charset  
    - Accept-Encoding  
    - Accept-Language  
    - Content-Language  
- 协商类型  
    - 服务器驱动  
    - 客户端驱动协商  
    - 透明协商  
###### 状态码
- 状态码负责表示客户端请求的返回结果,标记服务器端是否正常,通知出现的错误  
- 状态码类别  
    - 1xx : 信息性状态码(最常用只剩下 101 升级协议类型(websocket))  
    - 2xx : 成功状态码  
        - 200 数据被正常处理  
        - 204 正常响应,没有实体  
        - 206 范围请求,返回部分数据  
    - 3xx : 重定向  
        - 301 永久重定向  
        - 302 临时重定向  
        - 303 类似302,但必须使用GET方法  
        - 304 状态未改变  
        - 307 临时重定向,不改变请求方法  
    - 4xx : 客户端错误状态码  
        - 400 请求报文语法错误  
        - 401 需要认证  
        - 403 服务器拒绝访问对应资源  
        - 404 服务器上无法找到资源  
    - 5xx : 服务器错误状态码  
        - 500 服务器故障  
        - 503 服务器处于超负载或正在停机维护  
###### 首部
- 通用首部字段  
    - Cache-Control 控制缓存行为  
    - Connection 链接的管理  
    - Date 报文日期  
    - Pargma 报文指令  
    - Trailer 报文尾部的首部  
    - Trasfer-Encoding 指定报文主体的传输编码方式  
    - Upgrade 升级为其他协议  
    - Via 代理服务器信息  
    - Waring 错误通知  
- 请求首部字段  
    - Accept 用户代理可处理的媒体类型  
    - Accept-Charset 优先的字符集  
    - Accept-Encoding 优先的编码  
    - Accpet-Language 优先的语言  
    - Authorization Web认证信息  
    - Expect  期待服务器的特定行为  
    - From  用户的电子邮箱地址  
    - Host 请求资源所在的服务器  
    - If-Match 比较实体标记  
    - If-Modified-Since 比较资源的更新时间  
    - If-None-Match 比较实体标记  
    - If-Range 资源未更新时发送实体Byte的范围请求  
    - If-Unmodified-Since 比较资源的更新时间(和If-Modified-Since相反)  
    - Max-Forwards 最大传输跳数
    - Proxy-Authorization 代理服务器需要客户端认证  
    - Range 实体字节范围请求  
    - Referer 请求中的URI的原始获取方  
    - TE 传输编码的优先级  
    - User-Agent HTTP客户端程序的信息  
- 响应首部字段  
    - Accept-Ranges 是否接受字节范围  
    - Age 资源的创建时间  
    - ETag 资源的匹配信息  
    - Location 客户端重定向至指定的URI  
    - Proxy-Authenticate 代理服务器对客户点的认证信息  
    - Retry-After 再次发送请求的时机  
    - Server 服务器的信息  
    - Vary 代理服务器缓存的管理信息  
    - www-Authenticate 服务器对客户端的认证  
- 实体首部字段  
    - Allow 资源可支持的HTTP方法  
    - Content-Encoding 实体的编码方式  
    - Content-Language 实体的自然语言  
    - Content-Length 实体的内容大小  
    - Content-Location 替代对应资源的URI  
    - Content-MD5 实体的报文摘要  
    - Content-Range 实体的位置范围  
    - Content-Type 实体主体的媒体类型  
    - Expires 实体过期时间  
###### HTTP服务器

## https

## url(网络地址解析)  

## querystring(url查询字符串)  

## path(本地路径处理)  
- `path.join(a,b) 连接连个路径`  
- `path.resolve() 从当前路径出发,解析出一个绝对路径`    
- `path.delimiter 环境变量路径分隔符 path.win32.delimiter/path.posix.delimiter`    
- `path.[.win32[.posix]]sep 文件路径分隔符`  
- `path.basename('a.jpg','.jpg') 获取文件名`  
- `path.extname() 获取文件扩展名`  

## crypto(数据加密)  

## clid_process(子进程)  

## dns(域名解析)  

## dgram(网络UDP)  

## zlib(资源压缩)  
```js
let fs = require('fs');
let path = require('path');
let zlib = require('zlib');
function gzip(src){
    fs.createReadStream(src).pipe(zlib.createZip()).pipe(fs.createWriteStream(src+'.gz'));
}
gzip(path.join(__dirname,'msg.txt'));
function xzip(src){
    fs.createReadStream('src')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(path.join(__diranme,path.basename(src,'.gz'))));
}
xzip(path.join(__dirname,'msg.txt.gz'));
```

## debugger(进阶调试)  

## cluster(集群)  

## express
- express设计原理，面试官对动态路由匹配一直追问下去

- 讲express的设计原理

- 讲express框架的设计思想

- 讲nodejs的eventEmitter的实现

- 讲express的中间件系统是如何设计的

## webSocket

## socket.io