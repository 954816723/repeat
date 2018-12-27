## 常用js方法
- 全局函数
`parseInt(string, radix) radix 2~36`
`parseFloat()`

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
document.getElmentById() context.getElementsByClassName() context.getElementsByTagName() 
document.getElementByName() document.body document.documentElement document.head context.querySelector() context.querySelectorAll()
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

- 常用方法
Number String Boolean Null Undefined Symbol Object Function
typeof instanceof constructor Object.prototype.toString.call()
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
String.
    length
    charAt()
    charCodeAt()
    fromCharCode()
    indexOf() 没有返回-1
    lastIndexOf() 没有返回-1
    substr(m,n)截取 从m开始 n位
    substring(m,n)m开始n结束
    slice(m,n)同上,支持负数
    split()拆分数组
    replace()替换,支持正则
    toUpperCase()/toLowerCase()大小写
    trim()/trimLeft()/trimRight()
    includes()是否包含,返回布尔值
    startsWidth()头部是否包含,返回布尔
    endsWidth()尾部是否包含,返回布尔
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
    slice(m,n)数组查询m找到n(不包括n),没有就到末尾  不变
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
Object.keys() 返回一个包含给定对象自身可枚举属性名称的数组y
Object.values() 返回对象自身可枚举值的数组
Object.preventExtensions() 防止对象的任何扩展
Object.isExtensible() 判断对象是否可扩展

Object.prototype.hasOwnProperty() 返回一个布尔值,表示对象是否含有指定的属性,并且不是来自原型继承的
Object.prototype.isPrototypeOf() 返回一个布尔值,表示指定对象是否在本对象的原型链中
Object.prototype.toString() 返回对象的字符串表示
Object.prototype.valueOf() 返回指定对象的原始值

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

## 原生ajax
- get
let xhr = new XMLHttpRequest();
xhr.open('get','ajax.php?name='+hehe);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200 ){
        console.log(xhr.responseText);
    }
}
xhr.send()
- post
let xhr = new XHRHttpRequest();
xhr.setRequestHeader("content-type","application/x-www-form-urlencode;charset=UTF-8");
xhr.open('post','ajax.php');
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log(xhr.responseText);
    }
}
xhr.send('name=hehe');

## jquery中ajax请求
$.ajax({
    type:'GET',
    url:'ajax.php',
    data:{hehe:xixi},
    dataType:'json',
    //dataType:'jsonp',
    success:function(data){

    }
})

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

##TCP/IP 三次握手/四次挥手

## header头
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

## 跨域header头

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

## 动画属性

## bootstrap

## canvas

## echarts

## d3

## 闭包
闭包就是能够读取其他函数内部变量的函数
闭包的作用： ①读取其他函数内部的变量 ②变量保存在内存中
使用过多的闭包会消耗大量内存，造成网页的性能问题，可以在函数执行完成之前把不需要的局部变量删除

## event loop
当js代码执行时会将不同的变量存储到内存中的不同位置:堆(heap)和栈(stack),堆中存放对象,栈中存放基础类型值和对象指针
同时js执行时首先会创建一个全局可执行上下文,每当执行到一个函数调用时,就会创建一个可执行上下文,多个函数就会创建多个可执行上下文
js引擎创建执行上下文栈来管理执行上下文,当函数调用完成时,js会退出这个执行环境并把这个环境销毁,回到上一个方法的执行环境,以此反复进行,直到执行栈中的代码全部执行完成

当js引擎遇到一个异步事件后,先将异步事件挂起,等到异步事件处理完成会被加入到事件队列中,此时异步回调未执行
当执行队列执行完毕,主线程处于闲置状态时,回去异步队列抽取最先被推入队列中的异步事件,放入执行栈中,执行回调,如此反复,形成事件循环

不同的异步任务被分为两类:微任务 和 宏任务
当前执行栈为空时,主线程会查看微任务队列是否有事件存在,不存在,再去宏任务队列中取出一个事件将对应回调加入当前执行栈,存在,就执行完微任务队列,再去执行宏任务队列,如此反复
宏任务
setTimeout
setInterval
setImmediate
I/O
UI rendering
微任务
process.nextTick
promise
Object.observe
MutationObserver

## 原型链

## 性能优化

## 浅拷贝/深拷贝
- 浅拷贝
直接赋值
Object.assign()
Array.prototype.concat()
Array.prototype.slice()

- 深拷贝
JSON.parse(JSON.stringify(arr)) 但是不能处理函数

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

## 手写promise
解决异步编程
三种状态 Pending Fulfilled Rejected

## 防抖/节流

## 懒加载/预加载

## 跨域

## MVC / MVP / MVVM

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

## css知识点

## 数组扁平化
讲一个多维数组转为一维数组
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

arr.prototype.flat = function() {
    this.toString().split(',').map(item=> +item )
}

## 算法
- 冒泡排序 

- 选择排序

- 插入排序

- 快速排序

- 希尔排序

- 洗牌算法 

- 算法优化 

- 双向链表

## Diff

## AST

## 设计模式

## websocket/socket.io

## vue

## vuex

## vueRouter

## node

## express

## GraphQL

## weex

## echarts/d3

## mongodb

## adonisjs

## 颜色渐变 shadow

## html标签
<input type="range">
<input type="color">



