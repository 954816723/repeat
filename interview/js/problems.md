## JS(概念)
## 浏览器内核

## 讲讲常用的es6语法，比如let、promise、class async awiat  generator Set/Map weakset, weakmap等等
###### let、const、var的区别；如果const定义的是个对象，能够修改对象的属性吗？
let新增与ES6中,用来取代var,消除var的不合理之处  
let,const不存在变量提升  
let声明的变量存在块级作用域  
let不允许统一作用域内重复声明  
暂时性死区,在代码块内,在let声明变量之前,该变量不可使用  
const声明常量,一旦声明,不可修改  
const声明的是对象的话,能修改属性,const保存的是对象的地址,地址不可更改  

###### async/await
ES7提出async函数  
async是Generator函数的语法糖,函数内部使用await来表示异步  
- 内置执行器  
- 更加语义化,相较于yield和*  
- 更广的实用性,await后面可以是Promise或者原始类型的值,yield后面只能是Thunk函数或Promise对象  
- 返回值是promise更方便,Generator返回的是Iterator对象  
`async`函数内部`return`返回的值。会成为`then`方法回调函数的参数  
只有当`async`函数内部的异步操作都执行完，才会执行`then`方法的回调  
正常情况下`await`命令后面跟着的是`Promise`,如果不是的话，也会被转换成一个立即`resolve`的`Promise`  
当`async`函数中只要一个`await`出现`reject`状态，则后面的`await`都不会被执行  
可以添加`try/catch`来处理错误  

###### Promise
具有三种状态:pending fulfilled rejected  
状态一旦改变就不会再变   
必须调用then方法才能将值从Promise实例中取出  
Promise创建后立即执行  
Promise接受一个函数作为参数,函数有两个参数,resovle,reject  
then方法中接受两个参数,第一个resolved状态回调,第二个rejected回调  
catch方法指定发生错误时的回调  
all方法,多个实例组成数组作为参数,都成功才会是成功态,有一个失败就是失败态,返回失败实例的返回值  
resovle方法,返回一个新的promise实例,状态为Fulfilled
reject方法,返回一个新的promise实例,状态为Rejected  

###### class
类  
constructor构造方法,其中的this关键字代表实例对象  
class中定义的方法都定义在类的prototype上  
constructor是类的默认方法,new时自动调用,默认返回实例对象  
类的内部可以使用set/get关键字  
类不存在变量提升  
类方法前加上static,表示静态方法,只能通过类直接调用  
- extend 类的继承  
子类必须在constructor中调用super方法

###### 箭头函数
1. 没有arguments  
2. 没有prototype,不能作为构造函数  
3. 没有自己的this,指向外层不是箭头函数的this 

###### 解构赋值

###### 扩展运算符...
将一个数组转为用逗号分割的参数序列  

### 剩余运算符
(...rest) 代替arguments

###### Iterator
迭代器,为不同的数据结构提供统一的访问机制  
任何数据只要部署iterator接口,就可以完成遍历操作  
默认部署在[Symbol.iterator]属性上  
默认部署iterator接口的数据结构有:Array Map Set String TypeArray arguments NodeList  

###### Generator *
生成器,异步编程解决方案  
调用Generator函数返回一个遍历器对象  
每次调用遍历器对象的next方法,返回有value和done两个属性的对象  
遇到yield就暂停后面的操作,将yield后面表达式的值作为value的值  
每次调用next向下执行,知道遇到yield  
一直到函数结束或return  

###### Symbol
表示独一无二的值  
通过函数Symbol()创建  
可以接受一个字符串作为参数
Symbol 值作为对象属性名时不能用点运算符  

## Proxy
用于修改某些操作的默认行为  
```js
let person = {
    name:''hehe
}
let proxy = new Proxy(person,{
    get:function(target,property){
        return target[property]
    },
    set:function(obj,prop,value){
        obj[prop] = value
    }
})
```

###### Set
新的数据结构,类似于数组,值都是唯一的  
本身是构造函数  
属性:  
Set.property.constructor:本身  
Set.property.size: Set实例的成员个数  
方法:  
add() delete() has() clear()  

## Map
类似于对象,键值对集合,但是键可以是各种类型的值  

###### WeakSet
结构与Set类似,不重复值的集合  
但是:  
1. 成员只能是对象  
2. 对象都是弱引用  
3. 不可遍历  

###### WweakMap  

###### 装饰器

## DOM操作
可视区域高度:  window.innerHeight
页可见区域宽： document.body.clientWidth;
网页可见区域高： document.body.clientHeight;
网页可见区域宽： document.body.offsetWidth (包括边线的宽);
网页可见区域高： document.body.offsetHeight (包括边线的宽);
网页正文全文宽： document.body.scrollWidth;
网页正文全文高： document.body.scrollHeight;
网页被卷去的高： document.body.scrollTop;
网页被卷去的左： document.body.scrollLeft;
网页正文部分上： window.screenTop;
网页正文部分左： window.screenLeft;
屏幕分辨率的高： window.screen.height;
屏幕分辨率的宽： window.screen.width;
屏幕可用工作区高度： window.screen.availHeight;

## 事件循环(Event Loop)
JS是一门非阻塞单线程语言,事件循环是JS实现异步的方法,也是JS的执行机制  
在执行的过程中会产生执行环境,执行环境会顺序的加到执行栈中,遇到异步代码会被挂起加入到任务队列中,一旦执行栈为空,Event Loop就会从任务队列中拿出需要执行的代码放入执行栈执行  
不同的任务源会分配到不同任务队列中,任务源分为:  
- 微任务(microtask)  
    process.nextTick  
    promise  
    Object.observe  
    MutationObserver  
- 宏任务(macrotask)  
    script  
    setTimeout  
    setInterval  
    setImmediate  
    I/O  
    UI rendering  
- 执行顺序  
    1. 执行同步代码(宏任务)
    2. 执行栈为空,查询是否有微任务要执行  
    3. 执行所有微任务  
    4. 必要的话渲染UI  
    5. 下一轮Event Loop,执行宏任务中的异步代码  

JS有一个主线程和一个调用栈,所有的任务都会被放到调用栈等待主线程执行
JS调用栈采用后进先出,函数执行会被添加到栈的顶部,当执行栈执行完成后,从顶部移出,直到栈内被清空
JS中任务分为同步任务和异步任务,同步任务会按照顺序等待主线程依次执行
异步任务会在异步任务有结果后,将注册的回调函数放入任务队列中等待调用栈被清空,被读取到栈内等待主线程执行
不同类型的任务被分为宏任务和微任务,不同类型的任务进入不同的任务队列
JS代码执行时,进入整体代码后,执行所有同步任务(宏任务),开始第一次循环,接着执行所有的微任务,然后再从宏任务开始,找到其中一个任务队列执行完毕,在执行所有微任务,以此循环
执行完一个宏任务后,就会看是否有微任务,有就执行微任务中的所有任务,没有就继续读取宏任务中排在前面的任务,以此类推

## Node中的事件循环
timers: 执行setTimeout和setInterval中到期的callback。
pending callback: 上一轮循环中少数的callback会放在这一阶段执行。
idle, prepare: 仅在内部使用。
poll: 最重要的阶段，执行pending callback，在适当的情况下回阻塞在这个阶段。
check: 执行setImmediate(setImmediate()是将事件插入到事件队列尾部，主线程和事件队列的函数执行完成之后立即执行setImmediate指定的回调函数)的callback。
close callbacks: 执行close事件的callback，例如socket.on('close'[,fn])或者http.server.on('close, fn)。

## 浏览器的事件循环和nodejs事件循环的区别

## 执行上下文  
代码执行会产生三种执行上下文  
1. 全局执行上下文  
2. 函数执行上下文  
3. eval执行上下文  
每个执行上下文都有三个重要属性:  
1. 变量对象(VO):变量,函数声明,函数形参 只能全局上下文访问    
2. 作用域链  
3. this  
函数中,VO不能访问,只能访问活动对象(AO)  
生成执行上下文时,有两个阶段  
1. 创建阶段(即创建VO),JS解释器会找出需要提升的变量和函数,提前在内存开辟空间,函数的话直接存入内存,变量只声明并赋值为undefined
2. 代码执行阶段,此时可以提前使用  
相同函数名会覆盖上一个,函数优先于变量提升  

## 作用域  
可访问变量的集合  
生成作用域的方法:  
1. 函数声明  
2. catch语句   
3. 语句块{}  
每个JS程序都有一个全局作用域,每创建一个函数就形成一个作用域,函数嵌套作用域也会嵌套  
作用域在函数定义时就已经创建,而不是执行时  

## 作用域链
可理解为包含自身变量对象和上级变量对象的列表  
通过[[Scope]]属性查找上级变量  

## 原型
通过prototype属性,指向一个原型对象,原型对象中的属性和方法都可以被构造函数的实例共享  
原型对象中有一个constructor属性,指向构造函数本身  

## 原型链
由原型对象组成  
每个对象都有__proto__属性,指向创建该对象的构造函数的原型  
__proto__将对象连接起来组成原型链  

## 原型链的终点指向什么？
Object.prototype  
 
## this
函数执行前面是否有.  
自执行函数this永远是window,严格模式下为undefined  
元素事件绑定方法,事件触发,方法中this指向当前元素  
构造函数中,this指向当前实例  
call/bind/apply改变this指向,优先级最高  

## 闭包
闭包就是能够读取其他函数内部变量的函数  
闭包的作用： 
1. 读取其他函数内部的变量  
2. 变量保存在内存中  
使用过多的闭包会消耗大量内存，造成网页的性能问题，可以在函数执行完成之前把不需要的局部变量删除  

## 闭包,什么时候闭包会消除 使用场景有哪些？闭包会引起什么问题？
因为作用域链，外部不能访问内部的变量和方法，这时我们就需要通过闭包，返回内部的方法和变量给外部，从而就形成了一个闭包。
JavaScript是一门具有自动垃圾回收机制的编程语言，主要有两种方式：
标记清除（最常用）
垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记（可以使用任何标记方式）。然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾收集器完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。

引用计数
引用计数（reference counting）的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次数加1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。当这个值的引用次数变成0 时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾收集器下次再运行时，它就会释放那些引用次数为零的值所占用的内存。
导致问题：会导致循环引用的变量和函数无法回收。
解决：将用完的函数或者变量置为null。

## 怎么理解js是单线程的
主要说一下异步以及事件循环机制，还有事件队列中的宏任务、微任务。
macrotask：主代码块，setTimeout，setInterval、setImmediate等。
microtask：process.nextTick（相当于node.js版的setTimeout），Promise 。process.nextTick的优先级高于Promise。

## 跨域
repeat.md

## session/cookie
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

## token

## rem
```js
(function(win,doc){
    let docEle = doc.documentElement,
        resizeEvt = 'orientationchange' in win ? '' : 'resize',
        recalc = function(){
            let clientWidth = docEle.clientWidth;
            if (!clientWidth) return;
            docEle.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
})(window,document)
```

## ssr性能优化，node中间层细节处理

## CI/CD

## 数组的方法

## 说说GET与POST的区别
传参方式:get是url传参,post是请求体传参  
安全性:get通过地址栏传参数据可见,不安全,post参数在地址栏不可见,较安全  
大小限制:get请求有长度限制 2k
get的内容可以被浏览器缓存,post不可以  

## window的onload事件和DOMContentLoaded谁先谁后？
DOMContentLoaded要在onload之前
当DOM树构建完成的时候就会触发DOMContentLoaded,
onload是在页面载入完成的时候触发,包括图片等
jquery中$(document).ready()/$(function(){})都是DOMContentLoaded事件

## 发布订阅模式和观察者模式的异同

## get和post分别进行几次数据交互
get请求过程：（2次交互）

浏览器请求tcp连接（第一次握手）   
服务器答应进行tcp连接（第二次握手）   
浏览器确认，并发送get请求头和数据（第三次握手，这个报文比较小，所以http会在此时进行第一次数据发送）   
服务器返回200 ok响应。

post请求过程：（3次交互）

浏览器请求tcp连接（第一次握手）   
服务器答应进行tcp连接（第二次握手）   
浏览器确认，并发送post请求头（第三次握手，这个报文比较小，所以http会在此时进行第一次数据发送）   
服务器返回100 continue响应   
浏览器开始发送数据   
服务器返回200 ok响应

## 事件捕获和事件冒泡
DOM2级规范统一了事件流的过程,分为三个阶段:事件捕获,在目标元素上,事件冒泡
事件捕获：和“事件冒泡”相反，从根节点开始执行，一直向子节点传递，直到目标节点。
事件冒泡：子元素的触发事件会一直向父节点传递，一直到根结点停止。此过程中，可以在每个节点捕捉到相关事件。可以通过stopPropagation方法终止冒泡。
DOM2级规范在所有HTML元素上都定义了两个方法:`addEventlistener()` 和 `removeEventListener()`
接受三个参数:事件名称,事件处理器函数,一个布尔值(默认false表示冒泡阶段触发,true则捕获阶段触发)
事件代理(事件委托):在DOM元素的父元素上添加事件监听,通过事件对象中的target属性获取到事件目标对象
e.target:是触发事件的子元素 e.currentTarget:是绑定事件的元素

## 怎么实现标签页的通信
WebSocket localstorage SharedWorker
`window.onstorage = (e)=>{}`
`window.addEventListener('storage',(e)=>{console.log(e)})`
onstorage和storage都针对非当前页面对localstorage进行修改时才会触发,当前页面修改不会触发

## 怎么从十万个节点中找到想要的节点，怎么快速在某个节点前插入一个节点？

## 性能优化
一般我会分为以下几个方面来回答，一般会引申到网络、缓存方面的问题：
- server：
使用 cdn
减少不必要的数据返回
使用 gzip
缓存 （etag / expires ...）
- content：
减少 http 请求 (css sprites / inline image)
不同资源放在不同域下 (http1.1)
延迟加载 / 延迟执行(立即下载，延迟执行[before DOMContentLoaded]defer) / 预加载(preload)
async，该布尔属性指示浏览器是否在允许的情况下异步执行该脚本。该属性对于内联脚本无作用 (即没有 src 属性的脚本）。
defer，这个布尔属性被设定用来通知浏览器该脚本将在文档完成解析后，触发DOMContentLoaded事件前执行。
精简 HTML 结构
压缩资源
- css:
in head
较少的层级（之前被问到过是否有统计过层级多与少对性能的实质影响，实际上我是没有做过此类研究，所以知道结论而不懂过程还是欠缺的）
- js:
before 
减少 dom 访问（在 body 内放置的 JS 代码是否可以访问到 body 标签）
- webpack:
tree shaking 去除没有使用的代码
提取公共包，有被问到
拆分模块，按需加载
优化图片，使用 base64 代替小图
file name with hash (etag)


## 怎么实现继承
原型链继承
简单易于实现,但是要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行,无法实现多继承
```js
// 定义一个动物类
function Animal (name) {
  // 属性
  this.name = name || 'Animal';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food);
};

function Cat(){ 
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

var cat = new Cat();
console.log(cat.name);//cat

```
构造继承
可以实现多继承,不能继承原型属性/方法
```js
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
```
实例继承
不限制调用方式,但不能实现多继承
```js
function Cat(name){
  var instance = new Animal();
  instance.name = name || 'Tom';
  return instance;
}
```
拷贝继承
支持多继承,但是效率低占用内存
```js
function Cat(name){
  var animal = new Animal();
  for(var p in animal){
    Cat.prototype[p] = animal[p];
  }
  Cat.prototype.name = name || 'Tom';
}
```
组合继承
```js
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
```
寄生组合继承
```js
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
(function(){
  // 创建一个没有实例方法的类
  var Super = function(){};
  Super.prototype = Animal.prototype;
  //将实例作为子类的原型
  Cat.prototype = new Super();
})();
```
ES6的extends继承
```js
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}   
```

## requestAnimationFrame 原理？是同步还是异步？
异步，传入的函数在重绘之前调用 详细参考：
http://web.jobbole.com/91578/
https://my.oschina.net/bghead/blog/850692
http://www.zhangxinxu.com/wordpress/2013/09/css3-animation-requestanimationframe-tween-%E5%8A%A8%E7%94%BB%E7%AE%97%E6%B3%95/


## Es6,es7有哪些特性
ES6:let const 模板字符串 拓展运算符... 解构赋值 箭头函数 Promise Set Map Class
ES7:幂运算(** 3**2=9) Array.prototype.includes()
ES8:async await Object.values/Object.entries String padding(字符串填充) Object.getOwnPropertyDescriptors

## for...in迭代和for...of有什么区别
for...of获取键值,in获取键名
for...in一般用来遍历对象,但是会遍历到原型上的方法,使用hasOwnProperty(key)来判断 of值变脸当前对象
for...in如果用来遍历数组,索引是字符串,不能用于运算,遍历顺序可能不是按照数组内部顺序,同时会遍历数组以及原型上的可枚举属性
for...of一般用来遍历数组/map/set/字符串等拥有迭代器对象的集合,不能遍历对象
for...of与forEach不同的是能响应break,continue和return语句

## 0.1+0.2!=0.3
因为 JS 采用 IEEE 754 双精度版本（64位），并且只要采用 IEEE 754 的语言都有该问题
parseFloat((0.1 + 0.2).toFixed(10))

## call，apply，bind 三者用法和区别
改变this执行,并让函数执行
call第二个参数及以后是一个一个传递,逗号隔开
apply第二参数是数组传递
bind参数逗号传递,但不立即执行,返回一个结果函数

## call和apply的哪个性能更好
call比apply的性能更好

## lodash和ramda的区别是什么？

## 字符串和new String出来的字符串有啥区别？
直接赋值字符串跟使用String()出来的相等,都是string类型  
new String()出来的是对象类型

## 浅拷贝/深拷贝
见repeat.md

## 高阶函数是什么，怎么去写一个高阶函数
高阶函数：参数值为函数或者返回值为函数。例如map，reduce，filter，sort方法就是高阶函数。
编写高阶函数，就是让函数的参数能够接收别的函数。

## 怎么把es6转成es5，babel怎么工作的
解析：将代码字符串解析成抽象语法树
变换：对抽象语法树进行变换操作
再建：根据变换后的抽象语法树再生成代码字符串

## typeof，instanceof和Object.prototype.toString
typeof只能检测基本数据类型,`typeof null`也返回object,无法分辨数组还是正则
instanceof通过原型两查找,不能检测字面量方式创建出来的基本数据类型值,还有,只要在当前原型链上,结果都是true
toString:返回当前实例所属类信息

## JavaScript 中有哪些不同的函数调用模式？
函数调用  方法调用(对象中方法)  构造器调用(new)  间接调用(call/apply)

## "new"关键字在 JavaScript 中有什么作用？
1.创了一个新对象;
2.this指向构造函数;
3.构造函数有返回,会替换new出来的对象,如果没有就是new出来的对象
4.手动封装一个new运算符
```js
var new2 = function (func) {
    var o = Object.create(func.prototype);   //创建对象
    var k = func.call(o); //改变this指向，把结果付给k
    if (typeof k === 'object') { //判断k的类型是不是对象
        return k;  //是，返回k
    } else {
        return o;  //不是返回返回构造函数的执行结果
    }
} 
```
## 判断是否是一个对象
`Object.prototype.toString.call(obj) === '[object Object]'`

## instanceof的内部机制
判断左边的`__proto__`是否等于右边的`prototype`原型

## 原生js实现轮播图,以及滚动滑动

## postMessage

## 前端监控（数据、性能、异常监控，埋点和上报）
Performace

## 项目里面的前端鉴权是怎么实现的？

## mobx

## 手写函数防抖和函数节流(应用场景)
防抖是连续多次点击只执行一次  search搜索联想 窗口resize只触发一次
节流是连续点击程序在指定间隔时间执行  监听滚动事件等


## 使用es5实现es6的class
Object.defineProperty()

##  Ajax 底层实现，readystate 有哪些
0-（未初始化）还没有调用send()方法
1-（载入）已调用send()方法，正在发送请求
2-（载入完成）send()方法执行完成，已经接收到全部响应内容
3-（交互）正在解析响应内容
4-（完成）响应内容解析完成，可以在客户端调用了

## Object.freeze和Object.seal的区别
Object.preventExtension：禁止对象添加新属性并保留已有属性;
Object.seal：在一个现有对象上调用 Object.preventExtensions(..) 并把所有现有属性标记为 configurable:false;
Object.freeze：在一个现有对象上调用 Object.seal(..) 并把所有“数据访问”属性标记为 writable:false。

## MVC和MVVM的区别
Model用于封装和应用程序的业务逻辑相关的数据以及对数据的处理方法；
View作为视图层，主要负责数据的展示；
Controller定义用户界面对用户输入的响应方式，它连接模型和视图，用于控制应用程序的流程，处理用户的行为和数据上的改变。
MVC将响应机制封装在controller对象中，当用户和你的应用产生交互时，控制器中的事件触发器就开始工作了。
MVVM由 Model,View,ViewModel 三部分构成,把View和Model的同步逻辑自动化了。以前Controller负责的View和Model同步不再手动地进行操作，而是交给框架所提供的数据绑定功能进行负责，只需要告诉它View显示的数据对应的是Model哪一部分即可。也就是双向数据绑定，就是View的变化能实时让Model发生变化，而Model的变化也能实时更新到View。
Model和View并无直接关联，而是通过ViewModel来进行联系的，Model和ViewModel之间有着双向数据绑定的联系。因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步。
这种模式实现了Model和View的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作dom。

## 判断手机端
```js
//  borwserRedirect
 (function browserRedirect(){
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
  var bIsIphone = sUserAgent.match(/iphone os/i) == 'iphone os';
  var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
  var bIsUc = sUserAgent.match(/ucweb/i) == 'web';
  var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
  var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
  var bIsAndroid = sUserAgent.match(/android/i) == 'android';
  if(bIsIpad || bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM || bIsAndroid ){
  window.location.href = '跳转的移动端网址';
  }
 })();
```

## 怎么上传文件

## 前后端分离

## 用JavaScript的异步实现sleep函数

## 手写实现处理跨域的jsonp

## 正则用过吗？exec, 匹配一个手机号

## sort的底层实现机制
数组长度<=22时采用插入排序，大于22用快排。

## JS设计模式
（1）单例模式
定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
实现方法：先判断实例存在与否，如果存在则直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。
适用场景：一个单一对象。比如：弹窗，无论点击多少次，弹窗只应该被创建一次。
（2）发布/订阅模式
定义：又叫观察者模式,它定义对象间的一种一对多的依赖关系,当一个对象的状态发生改变时,所有依赖于它的对象都将得到通知。
场景：订阅感兴趣的专栏和公众号。
（3）策略模式
定义：将一个个算法（解决方案）封装在一个个策略类中。
优点：
策略模式可以避免代码中的多重判断条件。
策略模式很好的体现了开放-封闭原则，将一个个算法（解决方案）封装在一个个策略类中。便于切换，理解，扩展。
策略中的各种算法可以重复利用在系统的各个地方，避免复制粘贴。
策略模式在程序中或多或少的增加了策略类。但比堆砌在业务逻辑中要清晰明了。
违反最少知识原则，必须要了解各种策略类，才能更好的在业务中应用。
应用场景：根据不同的员工绩效计算不同的奖金；表单验证中的多种校验规则。
（4）代理模式
定义：为一个对象提供一个代用品或占位符，以便控制对它的访问。
应用场景：图片懒加载（先通过一张loading图占位，然后通过异步的方式加载图片，等图片加载好了再把完成的图片加载到img标签里面。）
（5）中介者模式
定义：通过一个中介者对象，其他所有相关对象都通过该中介者对象来通信，而不是互相引用，当其中的一个对象发生改变时，只要通知中介者对象就可以。可以解除对象与对象之间的紧耦合关系。
应用场景： 例如购物车需求，存在商品选择表单、颜色选择表单、购买数量表单等等，都会触发change事件，那么可以通过中介者来转发处理这些事件，实现各个事件间的解耦，仅仅维护中介者对象即可。
（6）装饰者模式
定义：在不改变对象自身的基础上，在程序运行期间给对象动态的添加方法。
应用场景： 有方法维持不变，在原有方法上再挂载其他方法来满足现有需求；函数的解耦，将函数拆分成多个可复用的函数，再将拆分出来的函数挂载到某个函数上，实现相同的效果但增强了复用性。

- 线上日志是如何处理的

## websocket
由于 http 存在一个明显的弊端（消息只能有客户端推送到服务器端，而服务器端不能主动推送到客户端），导致如果服务器如果有连续的变化，这时只能使用轮询，而轮询效率过低，并不适合。于是 WebSocket 被发明出来。
相比与 http 具有以下有点：
支持双向通信，实时性更强；
可以发送文本，也可以二进制文件；
协议标识符是 ws，加密后是 wss ；
较少的控制开销。连接创建后，ws客户端、服务端进行数据交换时，协议控制的数据包头部较小。在不包含头部的情况下，服务端到客户端的包头只有2~10字节（取决于数据包长度），客户端到服务端的的话，需要加上额外的4字节的掩码。而HTTP协议每次通信都需要携带完整的头部；
支持扩展。ws协议定义了扩展，用户可以扩展协议，或者实现自定义的子协议。（比如支持自定义压缩算法等）
无跨域问题。

实现比较简单，服务端库如 socket.io、ws ，可以很好的帮助我们入门。而客户端也只需要参照 api 实现即可。

## socket.io

## websocket握手过程

## 把arguments变成数组？兼容？

## 跨域以及解决办法
见repeat.md

## 懒加载怎么实现,手写
场景：一个页面中很多图片，但是首屏只出现几张，这时如果一次性把图片都加载出来会影响性能。这时可以使用懒加载，页面滚动到可视区在加载。优化首屏加载。
实现：img标签src属性为空，给一个data-xx属性，里面存放图片真实地址，当页面滚动直至此图片出现在可视区域时，用js取到该图片的data-xx的值赋给src。
优点：页面加载速度快，减轻服务器压力、节约流量，用户体验好。

## 图片预加载

## JavaScript的sort方法内部使用的什么排序？

## 函数式编程

## 手写实现promise,实现 Promise.finally

## 怎么判断一个点是否在圆形内、正方形内    

## 实现一个事件发布订阅类，其实就是eventEmitter

## 回调函数的坏处

## 如何抽取公共组件的

## 如何实现一个可设置过期时间的localStorage

## 实现一个发布订阅系统，包括on、emit、off等等

## 用docker做了什么

## 优化项目
https://mp.weixin.qq.com/s?__biz=MzUxMTcwOTM4Mg==&mid=2247483962&idx=1&sn=f9337ad983c6303811eb43d07d9f23d5&chksm=f96edb93ce195285943211e645cc683989826abdaaa8ab0b073a20761369ed04843c835c50b7#rd
https://aotu.io/notes/2016/03/16/optimization/

## 项目部署，线上问题等等

## 设计一个单点登录的系统，类似阿里系那种

## 实现一个联想搜索组件

## 一个搜索框的输入联想，会遇到什么问题？如果第一个请求延迟，第二个请求先到，请问怎么处理？
键盘输入太快，每次输入都去联想，需要多次发送请求，会导致用户体验太差，可以使用防抖优化。
在前端做判断，判断此时的值是否与返回的值相同，不同就丢弃，相同就显示在页面。

## JWT

## AMD，CMD，CommonJs，ES6 Module
AMD：requirejs 在推广过程中对模块定义的规范化产出，提前执行，推崇依赖前置
CMD：seajs 在推广过程中对模块定义的规范化产出，延迟执行，推崇依赖就近
CommonJs：模块输出的是一个值的 copy，运行时加载，加载的是一个对象（module.exports 属性），该对象只有在脚本运行完才会生成
ES6 Module：模块输出的是一个值的引用，编译时输出接口，ES6 模块不是对象，它对外接口只是一种静态定义，在代码静态解析阶段就会生成。

## XSS 和 CSRF SQL注入
XSS：跨站脚本攻击，是一种网站应用程序的安全漏洞攻击，是代码注入的一种。常见方式是将恶意代码注入合法代码里隐藏起来，再诱发恶意代码，从而进行各种各样的非法活动。
防范：记住一点 “所有用户输入都是不可信的”，所以得做输入过滤和转义
CSRF：跨站请求伪造，也称 XSRF，是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。与 XSS 相比，XSS利用的是用户对指定网站的信任，CSRF利用的是网站对用户网页浏览器的信任。
防范：验证 HTTP Referer 字段, 用户操作验证（验证码），请求地址中添加 token 并验证,HTTP 头中自定义属性并验证
sql注入:在未授权情况下，非法访问数据库信息
防范:在web输入参数处，对所有的参数做sql转义 杜绝用户提交的参数入库并且执行

## 如何应对流量劫持

## 谈谈XSS防御，以及Content-Security-Policy细节

## OSI七层模型

## OSI七层模型，路由器工作在哪一层？
网络层

## 怎么计算在一个页面上的停留时间
方案1：websocket，前端开个长连接，后台统计长连接时间。
方案2：ajax轮询，隔几秒发一个查询，后台记录第一与最后一个查询间隔时间。
方案3： 关闭窗口或者跳转的时候会触发window.onbeforeunload函数，可以在该函数中做处理（有兼容性问题）；统计完数据记录到本地cookies中，一段时间后统一发送。

## 怎么做一个实时的聊天系统
使用WebSocket和nodejs，《nodejs实战》这本书详细介绍了这个项目。

## websocket有时会出现掉线的问题，怎么解决？
加入心跳机制
```js
var heartCheck = {
    timeout: 60000,//60ms
    timeoutObj: null,
    serverTimeoutObj: null,
    reset: function(){
        clearTimeout(this.timeoutObj);
        clearTimeout(this.serverTimeoutObj);
        this.start();
    },
    start: function(){
        var self = this;
        this.timeoutObj = setTimeout(function(){
            ws.send("HeartBeat");
            self.serverTimeoutObj = setTimeout(function(){
                ws.close();//如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
            }, self.timeout)
        }, this.timeout)
    },
}

ws.onopen = function () {
   heartCheck.start();
};
ws.onmessage = function (event) {
    heartCheck.reset();
}

ws.onclose = function () {
    reconnect();
};
ws.onerror = function () {
    reconnect();
};
```

## PWA

## 写一个程序打印 1 到 100 这些数字，遇到数字为 3 的倍数，打印 “A” 替代该数字；遇到 5 的倍数，用 “B” 代替；遇到即是 3 的倍数又是 5 的倍数，打印 “AB”。

## 跨域通信有哪些方案，各有什么不同？

## 哪些常见操作会造成内存泄漏？

## 主流前端框架如 Angular/React/Vue 等之间有哪些差异及特点，选取一个描述其组件生命周期。

## 一个气球从右上角移动到中间，然后抖动，如何实现

## 监听一段时间内用户对我方网页的操作

## 如何定位（检查）内存泄漏？

## GC(垃圾回收)
https://blog.csdn.net/qq_17550381/article/details/81126809

## dva/dva解决了什么？如何解决？为什么使用？

## JS(代码/算法)
## 实现一个函数，每隔wait秒执行func，一共执行times次

## 实现一个函数,该函数接收一个obj, 一个path, 一个value，实现obj[path] = value，obj类似json格式

## 手动实现parseInt

## reduce实现map

## 有一个长度为 100 的数组，请求出该数组的前 10 个元素之和。

## 将这段英文this is a pen首字母大写

## 生成指定深度和每层广度的代码
当clone层级很深的话就会栈溢出，但数据的广度不会造成溢出
```js
function createData(deep, breadth) {
    var data = {};
    var temp = data;

    for (var i = 0; i < deep; i++) {
        temp = temp['data'] = {};
        for (var j = 0; j < breadth; j++) {
            temp[j] = j;
        }
    }
    return data;
}
createData(1, 3); // 1层深度，每层有3个数据 {data: {0: 0, 1: 1, 2: 2}}
createData(3, 0); // 3层深度，每层有0个数据 {data: {data: {data: {}}}}
```

## 给你一亿个数，是连续的，怎么找出两个不存在的数
用bitmap就能搞定了，存在为1，不存在为0。

## 数组的filter，以下输出结果是什么(2018拼多多)
```js
var arr = [1,2,3];
arr[10] = 9;
arr.filter((item)=> {
    return item === undefined?
})
```
## 输出结果(2017年「今日头条」)  
```js
async function async1 () {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2 () {
    console.log('async2');
}

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});

console.log('script end');
// script start / async1 start / async1 end / promise1 /  script end / setTimeout/ async2 / promise2
```
## 使用递归的方法，将obj变为obj2的格式(拼多多2018)
```js
obj = [
    {id:1,parent:null},
    {id:2,parent:1},
    {id:3,parent:2}
]

obj2 = {
    obj:{
        id: 1,
        parent: null,
        child: {
            id: 2,
            parent: 1,
            child: {
                id: ,3,
                parent: 2
            }
        }
    }
}
```
## 写一个sum方法，可以实现以下两种调用方式
```js
console.log(sum(2,3)) //5
console.log(sum(2)(3)) //5

//方法1
var sum = function(x,y) {
    if(y === undefined) {
        return function(y) {
            return x + y;
        }
    }else {
        return x + y;
    }
}

//方法2
var sum = function(x){
    if( arguments.length === 1) {
        return function (y) {
            return x + y;
        }
    } else {
        console.log('here');
        return arguments[0] + arguments[1];
    }
}
```
## 实现判断变量是否是整数的函数isInter(x)的实现
 在ES6中，是有现成的方法Number.isInteger
```js
//1 异或运算
function isInter(x) {
    return x ^ 0 === x
}

//2 取整
return Math.round(x) === x  //同样可以用floor ceil

//取余
return (typeof x === 'number')&&(x % 1 === 0)

```
## 使下面代码正常运行
```js
const a = [1,2,3,4,5];
a.multiply();
console.log(a);//[1,2,3,4,5,1,4,9,16,25]
```


## 如何每隔三个数加一个逗号，还要考虑小数点的情况
```js
function transform(number){
    var num = number.toString() 
    var numArr = num.split('.')
    var [num, dotNum] = numArr


    var operateNum = num.split('').reverse()
    var result = [], len = operateNum.length
    for(var i = 0; i< len; i++){
         result.push(operateNum[i])
         if(((i+1) % 3 === 0) && (i !== len-1)){
              result.push(',')
        }
    }

    if(dotNum){
         result.reverse().push('.'， ...dotNum)
         return result.join('')
    }else{
         return result.reverse().join('')
    }

}
```

## 手写indexOf
```js
function indexOf(str, val){
    var strLen = str.length, valLen = val.length
    for(var i = 0; i < strLen; i++){
        var matchLen = i + valLen
        var matchStr = str.slice(i, matchLen)
        if(matchLen > strLen){
            return -1
        }
        if(matchStr === val){
            return i
        }
    }
    return -1
}
```

## 实现call
```js
Function.prototype.call2 = function (context) {
    var context = Object(context) || window
    context.fn = this
    var args = []
    for (var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i +']')
    }

    var res = eval('context.fn(' + args + ')')

    delete context.fn
    return res
}
```

## 实现Object.assign
```js
if (typeof Object.assign2 != 'function') {
 //使用Object.defineProperty定义assign2方法
 //原生Object上的方法不可枚举,所以需要设置可枚举为false,不写默认false
  Object.defineProperty(Object, "assign2", {
    value: function (target) {
      'use strict';
      if (target == null) { 
        throw new TypeError('Cannot convert undefined or null to object');
      }
      //原生assign会将基本数据类型包装成对象,使用Object(value)
      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {  
          for (var nextKey in nextSource) {
            //判断该属性是不是自有属性,而不是原型上的
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
```

## 数组扁平化处理
```js
let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
let outputArr = [1,2,2,3,4,5,5,6,7,8,9,11,12,12,13,14,10]

function flatten(arr){
    var res = [];
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flatten(arr[i]));
        }else{
            res.push(arr[i]);
        }
    }
    return res;
}

function flatten(arr){
    return arr.reduce(function(prev,item){
        return prev.concat(Array.isArray(item)?flatten(item):item);
    },[]);
}

function flatten(arr){
    while(arr.some(item=>Array.isArray(item)){
        arr = [].concat(...arr);
    }
    return arr;
}
```

## 实现一个div滑动的动画，由快至慢5s结束（不准用css3)。

## 页面内有一个input输入框，实现在数组arr查询命中词并要求autocomplete效果。

## 实现超出整数存储范围的两个大整数相加function add(a,b)。注意a和b以及函数的返回值都是字符串
```js
function add (a, b) {
    let lenA = a.length,
        lenB = b.length,
        len = lenA > lenB ? lenA : lenB;

    // 先补齐位数一致
    if(lenA > lenB) {
        for(let i = 0; i < lenA - lenB; i++) {
            b = '0' + b;
        }
    } else {
        for(let i = 0; i < lenB - lenA; i++) {
            a = '0' + a;
        }
    }

    let arrA = a.split('').reverse(),
        arrB = b.split('').reverse(),
        arr = [],
        carryAdd = 0;

    for(let i = 0; i < len; i++) {
        let temp = Number(arrA[i]) + Number(arrB[i]) + carryAdd;
        arr[i] = temp > 9 ? temp - 10 : temp;
        carryAdd = temp >= 10 ? 1 : 0;
    }

    if(carryAdd === 1) {
        arr[len] = 1;
    }

    return arr.reverse().join('');
    
}
```
## 对象里按照英文字母排序
```js
sortGroup(){
            let sortCity = {};
            for (let i = 65; i <= 90; i++) {
                if (this.groupCity[String.fromCharCode(i)]) {
                    sortCity[String.fromCharCode(i)] = this.groupCity[String.fromCharCode(i)]
                }
            }
            return sortCity;
        }
```

## 10 个 Ajax 同时发起请求，全部返回展示结果，并且至多允许三次失败，说出设计思路

## 前端持久化的方式、区别

## 基于 Localstorage 设计一个 1M 的缓存系统，需要实现缓存淘汰机制

## 摇一摇事件
html5新增了一个`devicemotion`的事件，可以使用手机的重力感应
```js
const EMPTY_VALUE = 100;
const THREAD_HOLD = 13.8;
var minX = EMPTY_VALUE,
    minY = EMPTY_VALUE;
window.ondevicemotion = function(event){
    var gravity = event.accelerationIncludingGravity,
        x = gravity.x,
        y = gravity.y;
    if(x < minX) minX = x;
    if(y < minY) minY = y;
    if(Math.abs(x - minX) > THREAD_HOLD &&  
            Math.abs(y - minY) > THREAD_HOLD){
        console.log("shake");
        var event = new CustomEvent("shake");
        window.dispatchEvent(event);
        minX = minY = EMPTY_VALUE;
    }   
}   
    
window.addEventListener("shake", function(){
    console.log("window shake callback was called");
});
```

## 自定义事件
```js
var event = new CustomEvent("shake");
window.dispatchEvent(event);
window.addEventListener("shake", function(){
    console.log("window shake callback was called");
});
```