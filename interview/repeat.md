## 常用js方法
- 全局属性  
Infinity  无穷大  
NaN  
undefined  

- 全局函数  
parseInt(string, radix) radix 2~36  
parseFloat()  
String()  
Number() 
isNaN()  
isFinite()  
eval()  
escape()  
unescape()  
encodeURI() 把字符串编码为URI  
decodeURI() 解码某个编码的URI  
encodeURIComponent()  
decodeURIComponent()  

- bom  
window  
setTimeout() clearTimeout()  
setInterval() cleatInterval()  
open() close()  
alert() confirm() prompt()  
scrollTo() scrollBy()  
history.length history.back() history.go() history.forward()  
location.href完整url host主机名和端口号 hostname主机名 pathname路径 search?开始 hash哈希 port端口号 protocol协议 reload([true])重新加载 replace()不产生新纪录 assign()打开新url  
screen  
navigator  

- dom  
document.getElmentById()  
context.getElementsByClassName()  
context.getElementsByTagName()   
document.getElementByName()  
document.body  
document.documentElement  
document.head  
context.querySelector()  
context.querySelectorAll()  
childNodes获取元素的子节点(元素,文本,注释)  
children所有的元素子节点  
previousSibling/proviousElmentSibling  
nextSibling/nextElementSibling  
firstChild/firstElementChild  
lastChild/lastElementChild  

docuemnt.creatElement()  
容器.appendChild(新元素)  
容器.insertBefore(新元素,老元素)  
容器.removeChild(元素)  
容器.replace(新,老)  
元素.cloneNode(true/false)  
set/get/removeAttribute()  

- 盒子模型  
clientWidth/height 容器不包括溢出和边框的宽/高   
clientTop/Left 上/左边框的宽度  
offsetWidth/height clientWidth/height+边框  
offsetTop/Left 外边框距离父级参照物的偏移  
offsetParent父级参照物  
scrollWidth/height 没有溢出和client一致,溢出则包含溢出和填充  
scrollTop/Left 滚动条卷去的距离 可读写  
document.documentElement.clientHeight || document.body.clientHeight 当前屏  
document.documentElement.scrollHeight || document.body.scrollHeight 当前文档  

- 数据类型  
Number String Boolean Null Undefined Symbol Object  

- 检测数据类型  
typeof instanceof constructor Object.prototype.toString.call()  

- js方法  
Math.  
    abs()  
    floor()向下取整  
    ceil()向上取整  
    random() Math.random()*(n-m)+m  
    round()   
    max()  
    min()  
    PI()  
    trunc()去除一个数的小数部分  
    sign()判断是整数负数还是零 +1 -1 +0 -0  
Date  
    let time = new Date()  
    time.getFullYear()  
    time.getmonth()  
    time.getDate()  
    time.getDay()  
    time.getHours()  
    time.getMinutes()  
    time.getMilliseconds()  
    time.getTime() 时间戳  
    Date.now()当前时间戳  
String.  
    length  
    charAt()  
    charCodeAt()  
    fromCharCode()  
    indexOf() 没有返回-1  
    lastIndexOf() 没有返回-1  
    includes()是否包含,返回布尔值  
    substr(m,n)截取 从m开始 n位  
    substring(m,n)m开始n结束  
    slice(m,n)同上,支持负数  
    split()拆分数组  
    replace()替换,支持正则  
    toUpperCase()/toLowerCase()大小写  
    trim()/trimLeft()/trimRight()  
    startsWith()头部是否包含,返回布尔  
    endsWith()尾部是否包含,返回布尔  
    repeat(n)重复字符n次  
    padStart()头部填充指定位数的字符或空格  
    padEnd()尾部填充  
Array.  
    push()末尾追加 返回长度 改变   
    unshift()开头追加 返回长度 改变   
    pop()末尾删除 返回删除项 改变   
    shift()开头删除 返回删除项 改变   
    arr[arr.length]=xxx  
    arr.length--  
    delete arr[n]  
    splice()实现数组增加/修改/删除 splice(m,n)m开始删除n个,没有n就到末尾 splice(m,n,x)再删除的基础上,用x代替删除的内容 改变  
    slice(m,n)数组截取m找到n(不包括n),没有就到末尾  不变  
    concat() 拼接数组 不变  
    toString() 不变  
    join() 数组按指定字符转换为字符串 不变  
    reverse() 倒序 改变  
    sort() 排序 改变  
    indexOf() 当前项在数组中第一次出现的位置 没有返回-1  
    lastIndexOf() 最后一次出现的位置 没有返回-1  
    includes() 是否包含当前项,返回布尔,第二参数指定起始位置  
    from() 将类数组和可遍历对象转换为数组  
    of() 当前值转换为数组,创建一个数组  
    copyWithin() 将数组指定位置的成员复制到其他位置  
    find() 遍历数组,遇到第一个返回值为true的,返回当前成员,没有返回undefined 第二参数指定this  
    findIndex() 返回索引位置,都不符合返回-1 第二参数指定this  
    fill() 用给定值填充数组 二三参数指定起始位置  
    entries() 对键值对遍历  
    keys() 对键名遍历  
    values() 对键值遍历  
    forEach() 遍历当前数组 无返回 不变  
    map()   遍历当前数组,返回处理后的数组 不变  
    filter() 过滤数组,返回true保留false去除 不变  
    reduce() 迭代,第二参数指定prev默认值,返回最终值  
    every() 遍历数组,都返回true返回true,否则false  
    some() 遍历数组,有一项是true就返回true,否则返回false  
    isArray() 确定传递的值是不是Array  

- Object  
Object.prorotype 给对象原型上添加方法  
Object.freeze() 冻结对象,阻止修改现有属性的特性和值，并阻止添加新属性  
Object.seal() 防止其他代码删除对象的属性
Object.assign() 通过赋值一个或多个对象的可枚举自有属性来获得一个新的对象  
Object.create(proto, [propertiesObject]) 使用指定的原型对象和属性创建一个新对象,指定新创建对象的__proto__  
Object.is() 比较两个值是否相等 所有NaN都相等  
Object.defineProperty(obj, prop, descriptor) 给对象添加一个属性并指定该属性的配置  
    obj:目标对象  
    prop:需要定义的属性和方法的名字  
    descriptor:目标属性所拥有的特性  
        value:属性的值  
        writable:是否能被重写  
        configurable:是否能删除目标属性或修改属性以下特性（writable, configurable, enumerable）  
        enumerable:是否是可枚举属性  
Object.defineProperties() 给对象添加多个属性并分别指定它们的配置  
Object.getOwnPropertyDescriptor() 返回对象指定的属性配置  
Object.getOwnPropertyDescriptors()   
Object.getOwnPropertyNames() 返回一个数组,包含指定对象所有可枚举和不可枚举的属性名  
Object.getOwnPropertySymbols() 返回一个数组,包含指定对象所有的符号属性  
Object.getPrototypeOf() 返回指定对象的原型对象  
Object.setPrototypeOf() 设置对象的原型,即内部[[prototype]]属性  
Object.entries() 返回给定对象可枚举属性的[key:value]数组  
Object.keys() 返回一个包含给定对象自身可枚举属性名称的数组  
Object.values() 返回对象自身可枚举值的数组  
Object.preventExtensions() 防止对象的任何扩展  
Object.isExtensible() 判断对象是否可扩展  

Object.prototype.hasOwnProperty() 返回一个布尔值,表示对象是否含有指定的属性,并且不是来自原型继承的  
Object.prototype.isPrototypeOf() 返回一个布尔值,表示指定对象是否在本对象的原型链中  
Object.prototype.toString() 返回对象的字符串表示  
Object.prototype.valueOf() 返回指定对象的原始值  

- Number  
Number.isInteger() 判断是否是整数  

## this
函数执行前面是否有.  
自执行函数this永远是window,严格模式下为undefined  
元素事件绑定方法,事件触发,方法中this指向当前元素  
构造函数中,this指向当前实例  
call/bind/apply改变this指向,优先级最高  

## 常用事件
addEventListener(),removeEventListener()  
DomContentLoaded dom结构加载完成,图片音视频未加载  
transitionend CSS完成过渡后触发  e.propertyName触发css效果  

## 变量提升(预解释)  
预解释的时候,不管条件是否成立,都要将带var的提前声明  
预解释的时候只预解释等号左边的,右边的不进行预解释  
自执行函数的function在全局作用域下不进行预解释,当代码执行到这里的时候定义和执行一起完成  
函数体中return后面不再执行,但还是要进行预解释  
函数声明优先于变量声明,同时不会被变量声明覆盖  


## 执行上下文/执行栈  
执行上下文是JS代码被解析和执行时所在环境的抽象概念  
执行上下文分为三种  
- 全局执行上下文:只存在一个,做了两件事:1.创建一个全局对象,在浏览器中这个全局对象就是window对象,2.将this指针指向这个全局对象  
- 函数执行上下文:存在无数个,每次调用函数都会创建一个新的函数执行上下文    
- Eval函数执行上下文:指运行在eval函数中的代码也获得自己的执行上下文
###### 执行栈  
执行栈,也叫调用栈,后进先出(LIFO)结构  
用于存储在代码执行期间所创建的所有执行上下文  
首次运行JS代码时,创建一个全局执行上下文,并推入到当前执行栈中,每当函数调用时,JS引擎都会为该函数创建一个新的函数执行上下文并推到到当前执行栈的顶端   
根据后进先出规则,引擎会运行执行上下文在执行栈顶端的函数,当栈顶函数执行完后,对应的函数执行上下文从执行栈中弹出,上下文控制权移到当前执行栈的下一个执行上下文

## 作用域/作用域链  
JS中有一个执行上下文概念,定义了变量或函数有权访问的其他数据,决定了它们各自的行为,每一个执行环境都有一个与之关联的变量对象,环境中定义的所有变量和函数都保存在这个对象中 
###### 作用域  
作用域就是变量和函数的可访问范围  
生成作用域的方法:函数声明 catch语句 语句块{}  
每一个JS程序都有一个全局作用域,每创建一个函数就形成一个作用域  
函数的嵌套,他们的作用域也会嵌套,子作用域可以访问父作用域,父作用域不能访问子作用域  
函数作用域在定义时就已经创建,而不是执行时  
代码执行需要查找某个变量值的时候,先在当前作用域寻找,没有就像上级作用域寻找,直到全局作用域  
###### 作用域链  
当访问一个变量时,解释器会首先在当前作用域查找标识符,如果没有找到,就去父作用域找,直到找到该变量的标识符或者不在父作用域中,这就是作用域链  

## 闭包
闭包就是能够读取其他函数内部变量的函数  
闭包的作用： ①读取其他函数内部的变量 ②变量保存在内存中  
使用过多的闭包会消耗大量内存，造成网页的性能问题，可以在函数执行完成之前把不需要的局部变量删除  

## 原型/原型链  
函数都有一个`prototype`属性(原型),`prototype`是一个指针,指向一个原型对象,原型对象中的属性和方法都可以被函数的实例共享
这个原型对象中有一个`constructor`属性指向函数本身
实例中的`__proto__`(隐式原型)指向构造函数的原型对象
通过`__proto__`形成的一条链叫做原型链


## event loop
当js代码执行时会将不同的变量存储到内存中的不同位置:堆(heap)和栈(stack),堆中存放对象,栈中存放基础类型值和对象指针  
同时js执行时首先会创建一个全局可执行上下文,每当执行到一个函数调用时,就会创建一个可执行上下文,多个函数就会创建多个可执行上下文  
js引擎创建执行上下文栈来管理执行上下文,当函数调用完成时,js会退出这个执行环境并把这个环境销毁,回到上一个方法的执行环境,以此反复进行,直到执行栈中的代码全部执行完成  

当js引擎遇到一个异步事件后,先将异步事件挂起,等到异步事件处理完成会被加入到事件队列中,此时异步回调未执行  
当执行队列执行完毕,主线程处于闲置状态时,回去异步队列抽取最先被推入队列中的异步事件,放入执行栈中,执行回调,如此反复,形成事件循环  

不同的异步任务被分为两类:微任务 和 宏任务  
当前执行栈为空时,主线程会查看微任务队列是否有事件存在,不存在,再去宏任务队列中取出一个事件将对应回调加入当前执行栈,存在,就执行完微任务队列,再去执行宏任务队列,如此反复  
宏任务  
script全部代码  
setTimeout  
setInterval  
setImmediate  
I/O  
UI rendering  
微任务  
process.nextTick(Node)  
promise  
Object.observe  
MutationObserver  

## 原生ajax
- get  
```
let xhr = new XMLHttpRequest();
document.cookie = 'name=hehe';
xhr.withCredentials = true;//携带凭证.允许携带cookie
xhr.open('get','ajax.php?name='+hehe,true);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200 ){
        console.log(xhr.responseText);
    }
}
xhr.send()
```
- post  
```
let xhr = new XHRHttpRequest();
xhr.setRequestHeader("content-type","application/x-www-form-urlencode;charset=UTF-8");
xhr.open('post','ajax.php');
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log(xhr.responseText);
    }
}
xhr.send('name=hehe');
```
## jquery中ajax请求
```
$.ajax({
    type:'GET',
    url:'ajax.php',
    data:{hehe:xixi},
    dataType:'json',
    //dataType:'jsonp',
    success:function(data){

    }
})
```
## fetch用法

## axios用法

## 从浏览器输入到页面渲染完成
浏览器(或其他客户端如微信)向服务器发出一个HTTP请求  
先把域名解析为IP地址(chrome缓存1分钟(chrome://net-internals/#dns)->搜索操作系统缓存->读取本地host文件->发起DNS系统调用->运营商DNS缓存->找根域->com域)  
客户端通过随机端口向服务器发起TCP三次握手,建立TCP连接  
连接建立后浏览器就可以发送HTTP请求了  
服务器接收到HTTP请求,解析请求的路径和参数,经过后台的一些处理之后生成完整响应页面  
服务器将生成的页面作为HTTP响应体,根据不同的处理结果生成响应头,发给客户端  
客户端(浏览器)接收到HTTP响应,从请求中得到的HTTP响应体里是HTML代码,于是对HTML代码开始解析  
解析HTML并构建DOM树->构建render树->布局render树->绘制render树  
解析过程中遇到引用的服务器上的资源(额外的css,js代码,图片,音视频,附件等),再向服务器发送请求  
浏览器解析HTML包含的内容,用得到的css代码进行外观上的进一步渲染,js代码也可能会对外观进行一定的处理  
当用户与页面交互(点击,悬停等等)时,JS代码对此作出一定的反应,添加特效与动画  
交互的过程中可能需要向服务器索取或提交额外的数据(局部的刷新),一般不是跳转就是通过JS代码(响应某个动作或者定时)向服务器发送AJAX请求  
服务器再把客户端需要的资源返回,客户端用得到的资源来实现动态效果或者修改DOM结构  

大致可以分为如下7步：
输入网址；
发送到DNS服务器，并获取域名对应的web服务器对应的ip地址；
与web服务器建立TCP连接；
浏览器向web服务器发送http请求；
web服务器响应请求，并返回指定url的数据（或错误信息，或重定向的新的url地址）；
浏览器下载web服务器返回的数据及解析html源文件；
生成DOM树，解析css和js，渲染页面，直至显示完成；

##TCP/IP 三次握手/四次挥手

## header头
```
<!-- content-Type(设定网页字符集) -->
<meta http-equiv="content-Type" content="text/html;charset=utf-8">
<meta charset="utf-8">
<!--设定网页语言-->
<meta http-equiv="content-language" content="zh-CN">
<!-- 优先使用 IE 最新版本和 Chrome -->
<meta http-equiv="X-UA-Compatible" content="ie=edge,chrome=1">
<!--
    页面关键词，每个网页应具有描述该网页内容的一组唯一的关键字。
    使用人们可能会搜索，并准确描述网页上所提供信息的描述性和代表性关键字及短语。
    标记内容太短，则搜索引擎可能不会认为这些内容相关。另外标记不应超过 874 个字符。
 -->
<meta name="keywords" content="your,keywords,here,comma,separated,no,spaces">
<!-- 页面描述，每个网页都应有一个不超过 150 个字符且能准确反映网页内容的描述标签 -->
<meta name="description" content="150 chars">
<!--
    viewport：能优化移动浏览器的显示。如果不是响应式网站，不要使用initial-scale或者禁用缩放。
    width：宽度（数值 / device-width）（范围从200 到10,000，默认为980 像素）
    height：高度（数值 / device-height）（范围从223 到10,000）
    initial-scale：初始的缩放比例 （范围从>0 到10）
    minimum-scale：允许用户缩放到的最小比例
    maximum-scale：允许用户缩放到的最大比例
    user-scalable：用户是否可以手动缩 (no,yes)
    minimal-ui：可以在页面加载时最小化上下状态栏。（已弃用）
    注意，很多人使用initial-scale=1到非响应式网站上，这会让网站以100%宽度渲染，
    用户需要手动移动页面或者缩放。如果和initial-scale=1同时使用user-scalable=no或maximum-scale=1，
    则用户将不能放大/缩小网页来看到全部的内容。
 -->
<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1.0,minimum-scale=1.0,user-scalable=0">
<!--
    浏览器内核控制：国内浏览器很多都是双内核（webkit和Trident），
    webkit内核高速浏览，IE内核兼容网页和旧版网站。
    而添加meta标签的网站可以控制浏览器选择何种内核渲染。
    content="webkit|ie-comp|ie-stand"
-->
<meta name="renderer" content="webkit">
<!--禁止浏览器从本地计算机的缓存中访问页面内容,这样设定，访问者将无法脱机浏览。 -->
<meta http-equiv="Pragma" content="no-cache">
<!--不缓存页面-->
<meta http-equiv="Cache-Control" content="no-cache">
<!-- expires(网页到期时间):用于设定网页的到期时间，过期后网页必须到服务器上重新传输。 -->
<meta http-equiv="Expires" content="0">
<meta name="author" content="name, email@example.com">
<!--Apple iOS-->
<!--  忽略数字自动识别为电话号码 -->
<meta name="format-detection" content="telephone=no">
<!-- WebApp全屏模式：伪装app，离线应用。-->
<meta name="apple-mobile-web-app-capable" content="yes"> <!-- 启用 WebApp 全屏模式 -->
<!-- 隐藏状态栏/设置状态栏颜色：只有在开启WebApp全屏模式时才生效。content的值为default | black | black-translucent -->
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```
## 缓存
- cookie  
大小限制在4kb左右,个数一般不超过20个  
一般用于保存登录信息和标记用户  
每次都会写到在HTTP头中  
生命周期在设置的过期时间内  
在所有同源窗口中是共享的  
`document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/;Domain=<domain-value>";`  
可选参数:expires max-age path Domain Secure(SSL/HTTPS协议时cookie才会被发送) HttpOnly(服务器设置,客户端无法更改cookie)  
删除cookie需将cookie的有效时间更改  
- session  
服务器端保存数据的结构  
session的运行依赖session id  
而session id存在于cookie中  
- sessionStorage  
大小可达到5M或更多  
仅在当前窗口关闭前有效  
仅在本地存储,不会发送给服务器  
不在不同的浏览器窗口中共享,即使相同页面  
API:同localStorage  
- localStorage  
大小可达到5M或更多  
始终有效,除非手动删除  
仅在本地存储,不会发送给服务器  
在所有同源窗口中是共享的  
API:  
localStorage.setItem("key","value")  
localStorage.getItem("key")  
localStorage.key(i) 获取第i对的名字  
localStorage.removeItem("key")  
localStorage.clear() 清空  

## 请求头/响应头
1) 请求(客户端->服务端[request])  
    GET(请求的方式) /newcoder/hello.html(请求的目标资源) HTTP/1.1(请求采用的协议和版本号)  
    Accept: */*(客户端能接收的资源类型)  
    Accept-Language: en-us(客户端接收的语言类型)  
    Connection: Keep-Alive(维护客户端和服务端的连接关系)  
    Host: localhost:8080(连接的目标主机和端口号)  
    Referer: http://localhost/links.asp(告诉服务器我来自于哪里)  
    User-Agent: Mozilla/4.0(客户端版本号的名字)  
    Accept-Encoding: gzip, deflate(客户端能接收的压缩数据的类型)   
    If-Modified-Since: Tue, 11 Jul 2000 18:23:51 GMT(缓存时间)  
    Cookie(客户端暂存服务端的信息)  
    Date: Tue, 11 Jul 2000 18:23:51 GMT(客户端请求服务端的时间)  

2) 响应(服务端->客户端[response])  
    HTTP/1.1(响应采用的协议和版本号) 200(状态码) OK(描述信息)  
    Location: http://www.baidu.com(服务端需要客户端访问的页面路径)  
    Server:apache tomcat(服务端的Web服务端名)  
    Content-Encoding: gzip(服务端能够发送压缩编码类型)   
    Content-Length: 80(服务端发送的压缩数据的长度)  
    Content-Language: zh-cn(服务端发送的语言类型)  
    Content-Type: text/html; charset=GB2312(服务端发送的类型及采用的编码方式)  
    Last-Modified: Tue, 11 Jul 2000 18:23:51 GMT(服务端对该资源最后修改的时间)  
    Refresh: 1;url=http://www.it315.org(服务端要求客户端1秒钟后，刷新，然后访问指定的页面路径)  
    Content-Disposition: attachment; filename=aaa.zip(服务端要求客户端以下载文件的方式打开该文件)  
    Transfer-Encoding: chunked(分块传递数据到客户端）  
    Set-Cookie:SS=Q0=5Lb_nQ; path=/search(服务端发送到客户端的暂存数据)  
    Expires: -1//3种(服务端禁止客户端缓存页面数据)  
    Cache-Control: no-cache(服务端禁止客户端缓存页面数据)    
    Pragma: no-cache(服务端禁止客户端缓存页面数据)   
    Connection: close(1.0)/(1.1)Keep-Alive(维护客户端和服务端的连接关系)    
    Date: Tue, 11 Jul 2000 18:23:51 GMT(服务端响应客户端的时间)  

## git  
分布式命令管理系统  
- 创建  
git init  
git add  
git commit -m ''  
- 查看/比较  
git status  
git diff 比较的是工作区文件与暂存区文件的区别（上次git add 的内容）  
git diff --cached 比较的是暂存区的文件与仓库分支里（上次git commit 后的内容）的区别  
git log  
git reflog  
- 版本回退  
git reset --hard HEAD^(commit_id)  
- 撤销修改  
git checkout -- filename 丢弃工作区的修改  
git reset HEAD filename 丢弃添加到暂存区的文件修改  
已经提交,使用版本回退  
- 删除  
git rm filename   
git commit -m '' 提交删除  
git checkout -- filename 恢复删除 前提文件已commit,删除后没有git rm  
- 创建ssh  
ssh-keygen -t rsa -C "youremail@example.com"  
- 关联远程库  
git remote add origin git@server-name:path/repo-name.git 关联多个远程仓库,修改origin  
git push -u origin master 第一次加上-u 关联本地与远程  
git clone  
- 创建分支  
git checkout -b dev 创建并切换到dev分支  
git branch 查看当前分支  
git branch <name> 创建分支  
git branch -d dev 删除分支  
git branch -D dev 强行删除一个没有合并的分支  
git checkout dev 切换分支  
git merge dev 将dev分支快速合并到当前分支  
git merge --no-ff dev -m '' 合并分支,保留合并信息  
git stash 保存当前工作现场  
- 多人协作  
git remote -v 查看远程仓库信息  
git remote rm origin 删除已有的远程关联  
git clone  
git checkout -b dev origin/dev 创建远程origin的dev分支到本地dev  
git push origin branch-name 推送本地分支  
git pull 如果推送push失败时使用pull  
git branch --set-upstream origin/branch-name branch-name  pull报错时,创建关联  
- 标签  
git tag 查看所有标签  
git tag <name> 新建一个标签 默认打在最新提交的commit上  
git tag <name> commit_id 打在指定commit_id上  
git tag -a <name> -m '' commit_id 指定标签创建说明  
git show <name> 查看说明  
git push orgin <name> 推送书签到远程  
git push origin --tags 一次性推送所有未推送的标签  
git tag -d <name> 删除一个本地标签  
git push orign :refs/tags/<name> 删除远程书签  
- 忽略  
.gitignore文件  
git check-ignore 查看是哪条规则忽略的  
git add -f <name> 强制添加  
- 别名  
git config --global alias.st status  

## bootstrap

## canvas

## echarts

## d3

## 性能优化

## 浅拷贝/深拷贝
###### 浅拷贝  
直接赋值  
Object.assign()  
拓展运算符...  
Array.prototype.concat()  
Array.prototype.slice()  
```
let a = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    }
}
let b = Object.assign({}, a);
let b= {...a};
```
```
function cloneShallow(source) {
    var target = {};
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
    return target;
}
```

###### 深拷贝  
JSON.parse(JSON.stringify(arr))  
但是不能处理函数,会忽略undefined,忽略Symbol,不能解决循环引用的对象  
jQuery.extend()  
lodash.cloneDeep()  
```js
function extend(source){
    let target;
    if(typeof source === 'object'){
        target = Array.isArray(source) ? [] : {};
        for(pop in source){
            if(source.hasOwnProperty(pop)){
                if(typeof source[pop] === 'object'){
                    target[pop] = extend(source[pop]);
                }else{
                    target[pop] = source[pop];
                }
            }
        }
    }else{
        target = source;
    }
    return target;
}
// 循环实现
function cloneLoop(x) {
    const root = {};

    // 栈
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: x,
        }
    ];

    while(loopList.length) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }

        for(let k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    // 下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k],
                    });
                } else {
                    res[k] = data[k];
                }
            }
        }
    }

    return root;
}

//保持引用关系
function cloneForce(x) {
    const uniqueList = []; // 用来去重
    let root = {};

    // 循环数组
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: x,
        }
    ];

    while(loopList.length) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }
        
        // 数据已经存在
        let uniqueData = find(uniqueList, data);
        if (uniqueData) {
            parent[key] = uniqueData.target;
            continue; // 中断本次循环
        }

        // 数据不存在
        // 保存源数据，在拷贝数据中对应的引用
        uniqueList.push({
            source: data,
            target: res,
        });
        for(let k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    // 下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k],
                    });
                } else {
                    res[k] = data[k];
                }
            }
        }
    }
    return root;
}
function find(arr, item) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].source === item) {
            return arr[i];
        }
    }

    return null;
}
```
## 手写promise
解决异步编程
三种状态 Pending Fulfilled Rejected

## 节流/防抖
优化高频率事件 onscroll oninput resize onkeyup onkeydown...  
降低代码执行频率  
- 节流(throttle)  
保证一段时间内,核心代码值执行一次  

- 防抖(debounce)  
一段时间结束后,才能出发一次事件,如果一段时间未结束再次触发事件,就会重新开始计算时间

## 数据结构  

## 懒加载/预加载

## fetch
```js
async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;

	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}

	if (window.fetch && method == 'fetch') {
		let requestConfig = {
			credentials: 'include',
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			mode: "cors",
			cache: "force-cache"
		}

		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}
		
		try {
			const response = await fetch(url, requestConfig);
			const responseJson = await response.json();
			return responseJson
		} catch (error) {
			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}
```

## 跨域
- jsonp  
只能发送get请求,不支持post put delete  
不安全 xss攻击  
```js
function jsonp({url,params,cb}){
    return new Promise((resolve,reject)=>{
        let script = document.createElement('script');
        window[cb] = function(data){
            resolve(data);
            document.removeChild(script);
        }
        let arrs = [];
        for(let key in params){
            arrs.push(`${key}=${params[key]}`);
        }
        script.url = `${url}?${arrs.join('&')}`;
        document.body.appendChild(script);
    })
}

jsonp({
    url:'https://sp0.baidu.com/abcd/su',
    params:{wd:'a'},
    cb:'show'
}).then(data=>{
    console.log(data);
})
```
- cors  
设置各种请求头  
通过express搭建服务器  
```js
//index.html
<script>
    let xhr = new XMLHttpRequest;
    // xhr.open('GET','http://localhost:4000/getData',true);
    xhr.open('PUT','http://localhost:4000/getData',true);
    //设置请求头
    xhr.setRequestHeader('name','xixi');
    //设置cookie
    document.cookie = 'name=lala';
    xhr.withCredentials = true;
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status>=200 && xhr.status<300 || xhr.status===304){
                console.log(xhr.response);
                console.log(xhr.getResponseHeader('name'));
                
            }
        }
    }    
    xhr.send();
</script>
```
```js
//server1.js
let express = require('express');
let app = express();
//将当前目录作为静态文件目录
app.use(express.static(__dirname));
app.listen(3000);
```
```js
//server2.js
let express = require('express');
let app = express();
//设置请求白名单
let whiteList = ['http://localhost:3000'];
app.use(function(req,res,next){
    let origin = req.headers.origin;
    if(whiteList.includes(origin)){
        // 允许哪个源可以访问我
        // 如果设置为 * 则不能携带凭证
        res.setHeader('Access-Control-Allow-Origin',origin);
        //允许携带哪个头访问我,多个逗号 隔开
        res.setHeader('Access-Control-Allow-Headers','name');
        // 允许哪个方法访问我
        res.setHeader('Access-Control-Allow-Methods','PUT');
        // 预检的存活时间
        res.setHeader('Access-Control-Max-Age',6);
        // 允许携带cookie
        res.setHeader('Access-Control-Allow-Credentials',true);
        // 允许返回的头
        res.setHeader('Access-Control-Expose-Headers','name');
        if(req.method === 'OPTIONS'){
            res.end();
            return;
        }
    }
    next();
});
app.put('/getData',(req,res)=>{
    console.log(req.headers);
    res.setHeader('name','zeze')
    res.end('hehe') 
})
app.get('/getData',(req,res)=>{
    console.log(req.headers);
    res.end('hehe') 
})
    
app.use(express.static(__dirname));
app.listen(4000); 
```
###### postMessage  
```js
//a.html
<iframe src="http://localhost:4000/b.html" id="frame" onload="load()" frameborder="0">
<script>
function load(){
    let frame = document.getElementById('frame');
    frame.contentWindow.postMessage("hehe",'http://localhost:4000')
    window.onmessage = function(e){
        console.log(e.data);
    }
}
</script>
```
```js
//b.html
<script>
window.onmessage = function(e){
    console.log(e.data);
    e.source.postMessage("xixi",e.origin)
}
</script>
```
###### window.name   
a和b是同域的http://localhost:3000  
c是独立的http://localhost:4000  
a获取c的数据,a先引用c,c将值放在window.name,引入后将a将引用地址改为b  
此时window.name中的数据依然保存  
```js
//a.html
<iframe src="http://localhost:4000/c.html" id="frame" onload="load()" frameborder="0">
<script>
let first = true;
function load(){
    if(first){
        let frame = document.getElementById('frame');
        frame.src = 'http://localhost:3000/b.html';
        first = false;
    }else{
        console.log(frame.contentWindow.name);
    }
}
</script>
```
```
//b.html
...
```
```js
//c.html
<script>
window.name = 'hehe';
</script>
```
###### location.hash  
```js
//a.html
<iframe src="http://localhost:4000/c.html#hehe" id="frame" onload="load()" frameborder="0">
<script>
window.onhashchange = function(){
    console.log(location.hash);
}
</script>
```
```js
//b.html
<script>
window.parent.parent.location.hash = location.hash;
</script>
```
```js
//c.html
<script>
let frame = document.createElement('iframe');
frame.src = 'http://localhost:3000/b.html#xixi';
document.body.appendChild(frame);
</script>
```
###### document.domain  
使用于一级二级域名  
```js
//a.html
<iframe src="http://localhost:4000/c.html" id="frame" onload="load()" frameborder="0">
<script>
document.domain = 'biubiubiu.ltd';
function load(){
    console.log(frame.contentWindow.a);
}
</script>
```
```js
//b.html
<script>
document.domain = 'biubiubiu.ltd';
let a = 100;
</script>
```
###### websocket  
```js
<script>
let socket = new WebSocket('ws://localhost:3000');
socket.onopen = function(){
    socket.send('hehe');
}
socket.onmessage = function(e){
    console.log(e.data)
}
</script>
```
```js
//server.js
let express= require('express');
let app = express();
let WebSocket = require('ws');
let wss = new WebSocket.Server({port:3000});
wss.on('connection',function(ws){
    ws.on('message',function(data){
        console.log(data);
        ws.send('xixi')
    })
})
```
###### http-proxy  
###### nginx  
配置conf/nginx.conf  

## MVC / MVP / MVVM

## requestAnimationFrame

## AMD / CMD / common.js / UMD
模块就是实现特定功能的文件  
- AMD  
RequireJs对模块定义的规范产出  
采用异步方式加载模块  
define(id?, dependencies?, factory);  
依赖前置,提前执行,requirejs2.0也可以延迟执行  
- CMD  
SeaJs对模块定义的规范产出  
依赖就近,延迟执行  
- common.js  
服务器端模块的规范,node采用此规范  
采用同步方式加载模块  
提供四个环境变量module exports require global  
使用module.exports/exports定义当前模块对外输出的接口  
使用require加载模块  
模块输出的是值的拷贝  
模块运行时全部加载,生成一个对象  
- ES6 Module  
export规定模块的对外接口  
export default指定默认接口,对应import不需要使用大括号  
import用于加载模块  
模块输出的是值的引用  
ES6是编译时加载,模块不是对象,是通过export输出的代码,通过import指定加载某个输出值,不是加载整个模块  
- UMD  
是AMD和CommonJS的糅合  
先判断是否支持node.js模块(exports是否存在),存在则使用node.js模块模式  
再判断是否支持AMD(define是否存在),存在则使用AMD方式加载模块  
```
(function (window, factory) {
    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        window.Util = factory();
    }
})(this, function () {
    //module ...
});
```

## 正则

## 数组扁平化
讲一个多维数组转为一维数组  
```js
Array.prototype.flat = function() {
    var arr = [];
    this.forEach((item,idx) => {
        if(Array.isArray(item)) {
            arr = arr.concat(item.flat()); //递归去处理数组元素
        } else {
            arr.push(item)   //非数组直接push进去
        }
    })
    return arr;   //递归出口
}
```
```js
arr.prototype.flat = function() {
    this.toString().split(',').map(item=> +item )
}
```


## 设计模式
- 单例模式  
定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。  
实现方法：先判断实例存在与否，如果存在则直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。  
适用场景：一个单一对象。比如：弹窗，无论点击多少次，弹窗只应该被创建一次。  
```js
let getSingle = function(fn){
    let instance;
    return function(){
        return instance || instance = fn.apply(this,arguments);
    }
}
let createLayer = function(){
    //...
}
let createSingleLayer = getSingle(createLayer);
btn.addEventListener('click',function(){
    let loginLayer = createSingleLayer();
})
```
- 发布/订阅模式  
定义：又叫观察者模式,它定义对象间的一种一对多的依赖关系,当一个对象的状态发生改变时,所有依赖于它的对象都将得到通知。  
场景：订阅感兴趣的专栏和公众号。  
```js
let Event = (function(){
    let clientList = {},
        listen,
        trigger,
        remove;
    listen = function(key,fn){
        if(!clientList[key]){
            clientList[key] = [];
        }
        clientList[key].push(fn);
    }
    trigger = function(){
        let key = Array.prototype.shift.call(arguments);
        let fns = clientList[key];
        if(!fns || fns.length ===0) return false;
        for(let i = 0;i<fns.length;i++){
            fns[i].apply(this,arguments)
        }
    }
    remove = function(key,fn){
        let fns = clientList[key];
        if(!fns) return false;
        if(!fn){
            fns && (fns.length = 0);
        }else{
            for(let i = 0;i<fns.length;i++){
                let cur = fns[i];
                if(cur === fn){
                    fns.splice(i,1)
                }
            }
        }
    }
    return {
        listen,
        trigger,
        remove
    }
})();
Event.listen('hehe',function(data){
    console.log(data)
});
Event.trigger('hehe','xixi');
```
- 策略模式  
定义：将一个个算法（解决方案）封装在一个个策略类中。  
优点：  
策略模式可以避免代码中的多重判断条件。  
策略模式很好的体现了开放-封闭原则，将一个个算法（解决方案）封装在一个个策略类中。便于切换，理解，扩展。  
策略中的各种算法可以重复利用在系统的各个地方，避免复制粘贴。  
策略模式在程序中或多或少的增加了策略类。但比堆砌在业务逻辑中要清晰明了。  
违反最少知识原则，必须要了解各种策略类，才能更好的在业务中应用。  
应用场景：根据不同的员工绩效计算不同的奖金；表单验证中的多种校验规则。  
```js
let strategies = {
    "S":function(value){
        return value * 4;
    },
    "A":function(value){
        return value * 3;
    },
    "B":function(value){
        return value * 2;
    }
}
let calc = function(lv,val){
    return strategies[lv](val);
}
console.log(calc('S',5000))
```
- 代理模式  
定义：为一个对象提供一个代用品或占位符，以便控制对它的访问。  
应用场景：图片懒加载（先通过一张loading图占位，然后通过异步的方式加载图片，等图片加载好了再把完成的图片加载到img标签里面。）  
点击请求ajax的延时处理,计算数据的缓存
```js
//不使用代理模式实现图片懒加载
let myImage = (function(){
    let node = document.createElement('img');
    document.body.appendChild(node);
    let img = new Image();
    img.onload = function(){
        node.src = this.src;
    }
    return {
        setSrc:function(src){
            node.src = 'http://小图.gif';
            img.src = src;
        }
    }
})()
myImage.setSrc('http://大图.jpg');

//使用代理模式实现图片懒加载
let imgFunc = (function(){
    let node = document.createElement('img');
    document.appendChild(node);
    return {
        setSrc:function(src){
            node.src = src;
        }
    }
})()
let proxyImg = (function(){
    let img = new Image();
    img.onload = function(){
        imgFunc.setSrc(this.src)
    }
    return {
        setSrc:function(src){
            imgFunc.setSrc('http://小图.gif');
            img.src = src;
        }
    }
})()
proxyImg.setSrc('http://大图.png');


```
- 中介者模式  
定义：通过一个中介者对象，其他所有相关对象都通过该中介者对象来通信，而不是互相引用，当其中的一个对象发生改变时，只要通知中介者对象就可以。可以解除对象与对象之间的紧耦合关系。  
应用场景： 例如购物车需求，存在商品选择表单、颜色选择表单、购买数量表单等等，都会触发change事件，那么可以通过中介者来转发处理这些事件，实现各个事件间的解耦，仅仅维护中介者对象即可。  
- 装饰者模式  
定义：在不改变对象自身的基础上，在程序运行期间给对象动态的添加方法。  
应用场景： 有方法维持不变，在原有方法上再挂载其他方法来满足现有需求；函数的解耦，将函数拆分成多个可复用的函数，再将拆分出来的函数挂载到某个函数上，实现相同的效果但增强了复用性。
- 工厂模式  
- 观察者模式  
- 迭代器模式  
- 命令模式  
- 组合模式  
- 模板方法模式  
- 享元模式  
- 职责链模式  
- 状态模式  
- 适配者模式  

## websocket/socket.io

## GraphQL

## weex/element-ui

## echarts/d3

## nuxtjs

## 数据库
- 关系型数据库(RDBMS)  
Mysql Oracle DB2 SQLServer  
数据库中都是表  
- 非关系型数据库(NoSQL)  
键值对数据库(redis)  
文档数据库(mongodb)      

## mysql
- 安装mysql  
- `npm install mysql -D`  
- 引入mysql  
`let mysql = reuqire('mysql')`  
- 配置mysql  
```
let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'xxx',
    database:'node'
})
```
- 连接数据库  
`connection.connect()`
- 增  
```js
let sql = 'insert into user(user_name,user_pass) value(?,?)';
let sqlParams = [name,pass];
connection.query(sql,sqlParams,(err,data)=>{});
//成功返回新增ID
```
- 删  
```js
let sql = 'DELETE FROM user WHERE id = 6';
connection.query(sql,(err,result)=>{})
//成功返回影响行数result.affectedRows
```
- 改  
```js
let sql = 'UPDATE user SET user_name=?,user_pass=? WHERE id = ?'
let sqlParams = [name.pass,1];
connection.query(sql,sqlParams,(err,data)=>{})
//成功返回影响行数result.affectedRows
```

- 查  
```js
let sql = 'select * from user where username = "'+name+'" ' ;
connection.query(sql,(err,data)=>{});
//成功返回数组[RowDataPacket{},RowDataPacket{}]
```
- 关闭数据库  
`connection.end();`
## mongodb
- mongodb的数据模型是面向文档的，文档是一种类似于JSON的结构
- 版本偶数版为稳定版，奇数版为开发版  
- 安装mogodb  
- windows  
安装mongodb安装包  
配置环境变量  
c盘创建根目录data,data中创建文件夹db  
打开cmd，输入mongod,启动服务器  
新打开一个cmd，输入mongo,连接服务器  
- 修改数据库路径端口号
`mongod --dbpath 路径 --port 端口号`
- 基本指令  
show dbs(databases)  
use <数据库名> 进入到指定数据库中，没有则自动创建  
db  当前数据库  
show collections 显示数据库中所有集合  
- CRUD
db.<集合名>.insert(doc)  插入一条或多条数据，多条用数组，插入时没有_id，自动生成  
db.<集合名>。insertOne()  插入一条数据  
db.<集合名>。insertMany()  插入多条数据  
db.<集合名>.find()  查询集合中的所有文档，可以接受一个对象作为查询条件，返回数组  
db.<集合名>.find({},{num:1}) 接受第二参数，作为查询结果的投影，只显示所需项，1显示 0不显示  
db.<集合名>.findOne()  返回符合条件的第一个文档，返回一个对象  
db.<集合名>.find().count()  查询所有数据返回数据长度  
db.<集合名>.updata(查询条件，新对象)  
    默认情况下会用新对象替换就对象  
    如果需要修改而不是替换，需要使用修改操作符  
    `$set`修改文档中的指定属性  
    `$unset`删除文档的指定属性  
    `$push`向数组中添加一个元素
    `$addToSet`向数组中添加一个不重复的元素
    默认只会修改一个  
    添加第三个参数，一个配置对象，可以修改多个  
```
db.<集合名>.updata({name:"hehe",
    {
        $set:{
            age:18
        }
    },
    {
        multi:true
    }
})
```
db.<集合名>.updataOne()  
db.<集合名>.updataMany()  
db.<集合名>.remove()  删除符合条件的一个或所有文档  
    第二参数选择是否删除一个  
    remove必须传参  
    参数为{}，则删除所有数据，性能略差，可以直接删除集合
```
db.<集合名>.remove({name:"hehe",true})
```
db.<集合名>.deleteOne()  
db.<集合名>.deleteMany()  
db.<集合名>.drop()  删除整个集合  
db.dropDatabase()  删除数据库  
- 内嵌文档  
MongoDB的文档属性值也可是是一个文档，当一个文档的属性值是文档时，称之为内嵌文档  
MongoDB支持直接使用内嵌文档的属性进行查询，如果要查询内嵌文档可以通过 . 来匹配，同时属性名必须使用引号  
- 插入多条数据  
减少调用数据库执行语句，缩减执行时间
```
let arr = [];
for(let i=1;i<=20000;i++){
    arr.push({num:i})
}
db.<集合>.insert(arr)
```
- 排序  
查询文档时默认按照_id进行排序（升序） 
`sort()`可以用来指定文档的排序规则  
传递一个对象指定排序规则，1表示升序，-1表示降序  
`sort` `limit` `skip`可以以任意顺序调用  
`db.<集合>.find({}).sort({total:1,num:-1})`  
- mongoose  
mongoose提供了几个新的对象  
`Schema`模式对象，约束的数据库的文档结构  
`Model`相当于数据库中的collection  
`Document`相当于集合中的文档  
1. 下载安装  
`npm install mongoose`  
2. 引入mongoose  
`const mongoose = require('mongoose')`  
3. 链接MongoDB数据库  
`mongoose.connect('mongodb://数据库ip地址:端口号/数据库名',{useMongoClient:true})`  
4. 监听数据库连接状态,connection对象  
`mongoose.connection.once("open",function(){})`  
`mongoose.connection.once("close",function(){})`  
5. 断开数据库  
`mongoose.disconnect()`  
6. 创建Schema  
```
let Schema = mongoose.Schema;
let stuSchema = new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:"female"
    }
})
```
7. 创建model  
`let stuModel = mongoose.model("student",stuSchema)`  
8. CURD  
- 增加  
`Model.create(doc(s),[callback])`
    doc(s) 可以使一个文档对象,也可以是一个文档对象数组  
    callback 操作完成后的回调  
```
stuModel.create(
 [
    {
        name:"hehe",
        age:18,
        gender:"man"
    },
    {
        name:"xixi",
        age:20,
        gender:"woman"
    }
 ],function(err){
     if(!err) console.log("成功")
 }
)
```
- 查询  
`Model.find(conditions,[projection],[options],[callback]);返回一个数组`  
`Model.findOne(conditions,[projection],[options],[callback]);返回一个对象`  
`Model.findById(conditions,[projection],[options],[callback])`  
    condition:查询条件  
    projection:投影  {name:1,_id:0}/"name -_id"  
    options:查询选项(skip,limit)  
    callback:回调函数  
```
stuModel.find({name:"hehe"},'name age -gender',{skip:1,limit:2},function(err,docs){
    if(!err) console.log(docs)
})
```
- 修改  
`Model.update(conditions,doc,[options],[callback])`  
`Model.updateOne(conditions,doc,[options],[callback])`  
`Model.updateMany(conditions,doc,[options],[callback])`  
`Model.replaceOne(conditions,doc,[options],[callback])`  
    conditions:查询条件  
    doc:修改后的对象  
    options:配置参数  
    callback:回调  
```
stuModel.update({nam:"hehe"},{$set:{age:20}},function(err){
    if(!err) console.log("成功")
})
```
- 删除  
`Model.remove(conditions,[callback])`  
`Model.deleteOne(conditions,[callback])`  
`Model.deleteMany(conditions,[callback])`  
- 统计数量  
`Model.count(conditions,[callback])`  
9. Document对象的常用方法  
`get()`  
`set()`  
`remove()`  
`update()`  
`save()`  
`toJSON()`  
`toObject()`    

## nginx

## Electron 

## adonisjs

## 攻击xss/...    

## Less/Sass



