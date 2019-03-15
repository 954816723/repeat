## CSS
- Xhtml和html的区别
XHTML 元素必须被正确地嵌套。
XHTML 元素必须被关闭。
标签名必须用小写字母。
XHTML 文档必须拥有根元素。

- 遇到过哪些兼容性问题
https://www.cnblogs.com/zhoudawei/p/7497544.html

- 浏览器内核有哪些，移动端用的是哪个
Trident内核：IE,MaxThon,TT,The Word,360,搜狗浏览器等。[又称为MSHTML]
Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等；
Presto内核：Opera7及以上。[Opera内核原为：Presto，现为：Blink]
Webkit内核：Safari,Chrome等。[Chrome的:Blink(Webkit的分支)]

对于Android手机而言，使用率最高的就是Webkit内核。

- display:none与visibility:hidden
(1) display:none; HTML元素（对象）的宽高，高度等各种属性值都将“丢失”,视为不存在，而且不加载。
(2) visibility:hidden; HTML元素（对象）仅仅是在视觉上看不见（完全透明），而它所占据的空间位置仍然存在，也即是说它仍然具有高度，宽度等属性值。

- css实现图片自适应宽高
max-width max-height

- CSS实现背景图片固定宽高比自适应调整
padding-top:percent;高度/宽度百分比

- 块级元素有哪些，怎么转成行内元素
div h1-h6 ol ul dl table form p
display:inline-block 

- 讲flex，手写出flex常用的属性，并且讲出作用
flex弹性布局,display:flex
设置flex后,子元素的float,clear,vertical-align都会失效
flex-direction(排列方向) flex-wrap(换行) flex-flow(前两者简写) justify-content(主轴对齐方式) align-items(交叉轴堆积方式) align-content(多轴对齐方式)
flex-grow 项目的放大比例，默认为0，即如果存在剩余空间，也不放大
flex-shrink 项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

- CSS 重排和重绘之间有什么区别？
重排
这个过程就是通过渲染树中渲染对象的信息，计算出每一个渲染对象的位置和尺寸
将其安置在浏览器窗口的正确位置
触发：增加、删除、修改、移动、修改css样式
重绘
浏览器会根据元素的新属性重新绘制，使元素呈现新的外观
重绘不会带来重新布局，并不一定伴随重排
触发：dom改变，css移动，改变visibility、outline、背景色等属性
position 要引起 重排，translate 重绘

- 100 * 100 的 Canvas 占内存多大？

- 有哪些伪类和伪元素，伪类选择器有哪些
伪类 :hover :active :link :visited :nth-child() :nth-of-type() :first-child :last-child
伪元素 ::after ::before ::first-line ::first-letter ::selection

- css哪些属性可以继承
字体相关：line-height, font-family, font-size, font-style, font-variant, font-weight, font
文本相关： letter-spacing, text-align, text-indent, text-transform, word-spacing
列表相关：list-style-image,  list-style-position, list-style-type, list-style
颜色：color

- defer和async的区别
defer要等到整个页面在内存中正常渲染结束（DOM结构完全生成，以及其他脚本执行完成），才会执行。多个defer脚本会按照它们在页面出现的顺序加载。==“渲染完再执行”==
async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。多个async脚本是不能保证加载顺序的。==“下载完就执行”==

- 清除浮动
1. 使用带有clear:both的空元素
2. 给浮动元素的容器添加overflow:hidden/auto 属性
3. 给父容器添加伪元素::after
```
.clearfix{
    zoom:1; //IE6
}
.clearfix::after{
    content:".";
    height:0;
    clear:both;
    display:block;
    visibility:hidden;
}
```

- BFC、IFC、GFC、FFC：FC（Formatting Contexts），格式化上下文
FC的全称是：Formatting Contexts，是W3C CSS2.1规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。
BFC
BFC(Block Formatting Contexts)直译为"块级格式化上下文"。Block Formatting Contexts就是页面上的一个隔离的渲染区域，容器里面的子元素不会在布局上影响到外面的元素，反之也是如此。如何产生BFC？
float的值不为none。 
overflow的值不为visible。 
position的值不为relative和static。
display的值为table-cell, table-caption, inline-block中的任何一个。 
那BFC一般有什么用呢？比如常见的多栏布局，结合块级别元素浮动，里面的元素则是在一个相对隔离的环境里运行。
IFC
IFC(Inline Formatting Contexts)直译为"内联格式化上下文"，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)
IFC中的line box一般左右都贴紧整个IFC，但是会因为float元素而扰乱。float元素会位于IFC与与line box之间，使得line box宽度缩短。 同个ifc下的多个line box高度会不同。 IFC中时不可能有块级元素的，当插入块级元素时（如p中插入div）会产生两个匿名块与div分隔开，即产生两个IFC，每个IFC对外表现为块级元素，与div垂直排列。
那么IFC一般有什么用呢？
水平居中：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。
垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。
GFC
GFC(GridLayout Formatting Contexts)直译为"网格布局格式化上下文"，当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。 
那么GFC有什么用呢，和table又有什么区别呢？首先同样是一个二维的表格，但GridLayout会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染语义和控制。
FFC
FFC(Flex Formatting Contexts)直译为"自适应格式化上下文"，display值为flex或者inline-flex的元素将会生成自适应容器（flex container），可惜这个牛逼的属性只有谷歌和火狐支持，不过在移动端也足够了，至少safari和chrome还是OK的，毕竟这俩在移动端才是王道。
Flex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或 inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素，而设置为 inline-flex 的容器则渲染为一个行内元素。
伸缩容器中的每一个子元素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如何布局。

- 选择器优先级
！important>行内样式>id选择器>类选择器>标签选择器>通配符>继承

- display 有哪些属性  
none block inline inline-block table flex

- 左边定宽，右边自适应方案：float + margin，float + calc
```css
/* 方案1 */ 
.left {
  width: 120px;
  float: left;
}
.right {
  margin-left: 120px;
}
/* 方案2 */ 
.left {
  width: 120px;
  float: left;
}
.right {
  width: calc(100% - 120px);
  float: left;
}
```

- 左右两边定宽，中间自适应：float，float + calc, 圣杯布局（设置BFC，margin负值法），flex
```css
.wrap {
  width: 100%;
  height: 200px;
}
.wrap > div {
  height: 100%;
}
/* 方案1 */
.left {
  width: 120px;
  float: left;
}
.right {
  float: right;
  width: 120px;
}
.center {
  margin: 0 120px; 
}
/* 方案2 */
.left {
  width: 120px;
  float: left;
}
.right {
  float: right;
  width: 120px;
}
.center {
  width: calc(100% - 240px);
  margin-left: 120px;
}
/* 方案3 */
.wrap {
  display: flex;
}
.left {
  width: 120px;
}
.right {
  width: 120px;
}
.center {
  flex: 1;
}
```
- 左右居中
行内元素: text-align: center
定宽块状元素: 左右 margin 值为 auto
不定宽块状元素: table布局，position + transform
```css
/* 方案1 */
.wrap {
  text-align: center
}
.center {
  display: inline;
  /* or */
  /* display: inline-block; */
}
/* 方案2 */
.center {
  width: 100px;
  margin: 0 auto;
}
/* 方案2 */
.wrap {
  position: relative;
}
.center {
  position: absulote;
  left: 50%;
  transform: translateX(-50%);
}
```
- 上下垂直居中：
定高：margin，position + margin(负值)
不定高：position + transform，flex，IFC + vertical-align:middle
```css
/* 定高方案1 */
.center {
  height: 100px;
  margin: 50px 0;   
}
/* 定高方案2 */
.center {
  height: 100px;
  position: absolute;
  top: 50%;
  margin-top: -25px;
}
/* 不定高方案1 */
.center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
/* 不定高方案2 */
.wrap {
  display: flex;
  align-items: center;
}
.center {
  width: 100%;
}
/* 不定高方案3 */
/* 设置 inline-block 则会在外层产生 IFC，高度设为 100% 撑开 wrap 的高度 */
.wrap::before {
  content: '';
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.wrap {
  text-align: center;
}
.center {
  display: inline-block;  
  vertical-align: middle;
}
```
-  em,rem,px的区别
px像素,相对于屏幕分辨率
em 相当对象内文本的font-size,如果当前也是em,则相对于父元素font-szie
rem 参考根元素<html>的font-size

-  IE盒模型和标准盒模型，用哪个属性改变
盒模型:content padding border margin  
标准盒模型:宽高是内容content的宽高
IE和盒模型:宽高是内容content+填充padding+边框border
box-sizing:content-box(标准模型)/border-box(IE模型)

- meta标签
见repeat

- css3新属性
（1）边框：
border-radius：圆角边框，border-radius:25px;
box-shadow：边框阴影，box-shadow: 10px 10px 5px #888888;
border-image：边框图片，border-image:url(border.png) 30 30 round;
（2）背景：
background-size：规定背景图片的尺寸，background-size:63px 100px;
background-origin：规定背景图片的定位区域，背景图片可以放置于 content-box、padding-box 或 border-box 区域。background-origin:content-box;
CSS3 允许您为元素使用多个背景图像。background-image:url(bg_flower.gif),url(bg_flower_2.gif);
（3）文本效果：
text-shadow：向文本应用阴影，可以规定水平阴影、垂直阴影、模糊距离，以及阴影的颜色。text-shadow: 5px 5px 5px #FF0000;
word-wrap：允许文本进行换行。word-wrap:break-word;
（4）字体：CSS3 @font-face 规则可以自定义字体。
（5）2D 转换（transform）
translate()：元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数。 transform: translate(50px,100px);
rotate()：元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。transform: rotate(30deg);
scale()：元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）参数。transform: scale(2,4);
skew()：元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数。transform: skew(30deg,20deg);
matrix()： 把所有 2D  转换方法组合在一起，需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。transform:matrix(0.866,0.5,-0.5,0.866,0,0);
（6）3D 转换
rotateX()：元素围绕其 X 轴以给定的度数进行旋转。transform: rotateX(120deg);
rotateY()：元素围绕其 Y 轴以给定的度数进行旋转。transform: rotateY(130deg);
（7）transition：过渡效果，使页面变化更平滑
transition-property ：执行动画对应的属性，例如 color，background 等，可以使用 all 来指定所有的属性。
transition-duration：过渡动画的一个持续时间。
transition-timing-function：在延续时间段，动画变化的速率，常见的有：ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier 。
transition-delay：延迟多久后开始动画。
简写为：transition: `[<transition-property> || <transition-duration> || <transition-timing-function> || <transition-delay>]`;
（8）animation：动画
使用CSS3 @keyframes 规则。
animation-name: 定义动画名称
animation-duration: 指定元素播放动画所持续的时间长
animation-timing-function:ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>)： 指元素根据时间的推进来改变属性值的变换速率，说得简单点就是动画的播放方式。
animation-delay: 指定元素动画开始时间
animation-iteration-count:infinite | <number>：指定元素播放动画的循环次
animation-direction: normal | alternate： 指定元素动画播放的方向，其只有两个值，默认值为normal，如果设置为normal时，动画的每次循环都是向前播放；另一个值是alternate，他的作用是，动画播放在第偶数次向前播放，第奇数次向反方向播放。
animation-play-state:running | paused ：控制元素动画的播放状态。
简写为： `animation:[<animation-name> || <animation-duration> || <animation-timing-function> || <animation-delay> || <animation-iteration-count> || <animation-direction>]`
更多详见W3C


- 描述一下渐进增强和优雅降级。

- CSS 中可以让文字垂直和水平方向上重叠的两个属性是什么？
垂直方向 line-height
水平方向 letter-spacing

- 如何解决使用 inline-block 引起的空白间隙的问题？
letter-spacing
父元素letter-spacing:-6px 子元素letter-spacing:0px

- 使用 CSS 创建一个三角形（一个箭头向右的三角图标）。

- 使用 CSS 实现三个 div 等比排列在一行，两列宽度固定中间自适应。

- 可视化拖拽页面(H5 有个可拖拽属性)
draggable 
`<img draggable="true" />`
ondragstart 
```js
function drag(ev)
{
  ev.dataTransfer.setData("Text",ev.target.id);
}
```
ondragover  需调用 ondragover 事件的 event.preventDefault() 方法
ondrop
```js
function drop(ev)
{
  ev.preventDefault();
  var data=ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(data));
}
```

- postion 定位
position 定位的话，默认是 static。然后，如果 position: fixed 的时候，就是相对于根元素进行定位。然后，如果是 position: absolute 的时候，根据前面那个进行了 position: relative 的标记，进行相对定位。然后，positon: relative，我常用的就是将它作为 positon: relative 的定位作用。

- 渐变的话，假如有一个长方体，上面一种颜色，下面一种颜色，你会怎么做？

## JS(概念)
- let、const、var的区别；如果const定义的是个对象，能够修改对象的属性吗？
let新增与ES6中,用来取代var,消除var的不合理之处
let,const不存在变量提升
let声明的变量存在块级作用域
let不允许统一作用域内重复声明
暂时性死区,在代码块内,在let声明变量之前,该变量不可使用
const声明常量,一旦声明,不可修改
const声明的是对象的话,能修改属性,const保存的是对象的地址,地址不可更改

- window的onload事件和DOMContentLoaded谁先谁后？
DOMContentLoaded要在onload之前
当DOM树构建完成的时候就会触发DOMContentLoaded,
onload是在页面载入完成的时候触发,包括图片等
jquery中$(document).ready()/$(function(){})都是DOMContentLoaded事件

- get和post分别进行几次数据交互
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

- 事件捕获和事件冒泡
DOM2级规范统一了事件流的过程,分为三个阶段:事件捕获,在目标元素上,事件冒泡
DOM2级规范在所有HTML元素上都定义了两个方法:`addEventlistener()` 和 `removeEventListener()`
接受三个参数:事件名称,事件处理器函数,一个布尔值(默认false表示冒泡阶段触发,true则捕获阶段触发)
事件代理(事件委托):在DOM元素的父元素上添加事件监听,通过事件对象中的target属性获取到事件目标对象
e.target:是触发事件的子元素 e.currentTarget:是父级元素

- 怎么实现标签页的通信
WebSocket localstorage SharedWorker
`window.onstorage = (e)=>{}`
`window.addEventListener('storage',(e)=>{console.log(e)})`
onstorage和storage都针对非当前页面对localstorage进行修改时才会触发,当前页面修改不会触发

- 怎么从十万个节点中找到想要的节点，怎么快速在某个节点前插入一个节点？

- 怎么实现继承
原型链继承
简单易于实现,但是要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行,无法实现多继承
```
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
```
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
```
实例继承
不限制调用方式,但不能实现多继承
```
function Cat(name){
  var instance = new Animal();
  instance.name = name || 'Tom';
  return instance;
}
```
拷贝继承
支持多继承,但是效率低占用内存
```
function Cat(name){
  var animal = new Animal();
  for(var p in animal){
    Cat.prototype[p] = animal[p];
  }
  Cat.prototype.name = name || 'Tom';
}
```
组合继承
```
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
```
寄生组合继承
```
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
```
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

- requestAnimationFrame 原理？是同步还是异步？
异步，传入的函数在重绘之前调用 详细参考：
http://web.jobbole.com/91578/
https://my.oschina.net/bghead/blog/850692
http://www.zhangxinxu.com/wordpress/2013/09/css3-animation-requestanimationframe-tween-%E5%8A%A8%E7%94%BB%E7%AE%97%E6%B3%95/


- Es6,es7有哪些特性
ES6:let const 模板字符串 拓展运算符... 解构赋值 箭头函数 Promise Set Map Class
ES7:幂运算(** 3**2=9) Array.prototype.includes()
ES8:async await Object.values/Object.entries String padding(字符串填充) Object.getOwnPropertyDescriptors

- 原型/作用域/作用域链
见repeat.md

- 事件循环(Event Loop)
JS是一门单线程语言,事件循环是JS实现异步的方法,也是JS的执行机制
JS有一个主线程和一个调用栈,所有的任务都会被放到调用栈等待主线程执行
JS调用栈采用后进先出,函数执行会被添加到栈的顶部,当执行栈执行完成后,从顶部移出,知道栈内被清空
JS中任务分为同步任务和异步任务,同步任务会按照顺序等待主线程依次执行
异步任务会在异步任务有结果后,将注册的回调函数放入任务队列中等待调用栈被清空,被读取到栈内等待主线程执行
不同类型的任务被分为宏任务和微任务,不同类型的任务进入不同的任务队列
JS代码执行时,进入整体代码后,执行所有同步任务(宏任务),开始第一次循环,接着执行所有的微任务,然后再从宏任务开始,找到其中一个任务队列执行完毕,在执行所有微任务,以此循环
执行完一个宏任务后,就会看是否有微任务,有就执行微任务中的所有任务,没有就继续读取宏任务中排在前面的任务,以此类推

- Node中的事件循环
timers: 执行setTimeout和setInterval中到期的callback。
pending callback: 上一轮循环中少数的callback会放在这一阶段执行。
idle, prepare: 仅在内部使用。
poll: 最重要的阶段，执行pending callback，在适当的情况下回阻塞在这个阶段。
check: 执行setImmediate(setImmediate()是将事件插入到事件队列尾部，主线程和事件队列的函数执行完成之后立即执行setImmediate指定的回调函数)的callback。
close callbacks: 执行close事件的callback，例如socket.on('close'[,fn])或者http.server.on('close, fn)。

- 浏览器的事件循环和nodejs事件循环的区别

- this/箭头函数
见repeat.md

- 闭包,什么时候闭包会消除
因为作用域链，外部不能访问内部的变量和方法，这时我们就需要通过闭包，返回内部的方法和变量给外部，从而就形成了一个闭包。
JavaScript是一门具有自动垃圾回收机制的编程语言，主要有两种方式：
标记清除（最常用）
垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记（可以使用任何标记方式）。然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾收集器完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。

引用计数
引用计数（reference counting）的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次数加1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。当这个值的引用次数变成0 时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾收集器下次再运行时，它就会释放那些引用次数为零的值所占用的内存。
导致问题：会导致循环引用的变量和函数无法回收。
解决：将用完的函数或者变量置为null。

- 怎么理解js是单线程的
主要说一下异步以及事件循环机制，还有事件队列中的宏任务、微任务。

macrotask：主代码块，setTimeout，setInterval、setImmediate等。
microtask：process.nextTick（相当于node.js版的setTimeout），Promise 。process.nextTick的优先级高于Promise。

- for...in迭代和for...of有什么区别
for...in一般用来遍历对象,但是会遍历到原型上的方法,使用hasOwnProperty(key)来判断
for...in如果用来遍历数组,索引是字符串,不能用于运算,遍历顺序可能不是按照数组内部顺序,同时会遍历数组以及原型上的可枚举属性
for...of一般用来遍历数组/map/set/字符串等拥有迭代器对象的集合,不能遍历对象
for...of与forEach不同的是能响应break,continue和return语句

- 0.1+0.2!=0.3
因为 JS 采用 IEEE 754 双精度版本（64位），并且只要采用 IEEE 754 的语言都有该问题
parseFloat((0.1 + 0.2).toFixed(10))

- call，apply，bind 三者用法和区别
改变this执行,并让函数执行
call第二个参数及以后是一个一个传递,逗号隔开
apply第二参数是数组传递
bind参数逗号传递,但不立即执行,返回一个结果函数

- call和apply的哪个性能更好
call比apply的性能更好

- 浅拷贝/深拷贝
见repeat.md

- 高阶函数是什么，怎么去写一个高阶函数
高阶函数：参数值为函数或者返回值为函数。例如map，reduce，filter，sort方法就是高阶函数。
编写高阶函数，就是让函数的参数能够接收别的函数。

- 怎么把es6转成es5，babel怎么工作的
解析：将代码字符串解析成抽象语法树
变换：对抽象语法树进行变换操作
再建：根据变换后的抽象语法树再生成代码字符串

- typeof，instanceof和Object.prototype.toString
typeof只能检测基本数据类型,`typeof null`也返回object,无法分辨数组还是正则
instanceof通过原型两查找,不能检测字面量方式创建出来的基本数据类型值,还有,只要在当前原型链上,结果都是true
toString:返回当前实例所属类信息

- JavaScript 中有哪些不同的函数调用模式？
函数调用  方法调用(对象中方法)  构造器调用(new)  间接调用(call/apply)

- "new"关键字在 JavaScript 中有什么作用？
1.创了一个新对象;
2.this指向构造函数;
3.构造函数有返回,会替换new出来的对象,如果没有就是new出来的对象
4.手动封装一个new运算符
```
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
- 判断是否是一个对象
`Object.prototype.toString.call(obj) === '[object Object]'`

- instanceof的内部机制
判断左边的`__proto__`是否等于右边的`prototype`原型

- 原生js实现轮播图,以及滚动滑动

- postMessage

- 前端监控（数据、性能、异常监控，埋点和上报）
Performace

- 项目里面的前端鉴权是怎么实现的？


- 手写函数防抖和函数节流(应用场景)
防抖是连续多次点击只执行一次  search搜索联想 窗口resize只触发一次
节流是连续点击程序在指定间隔时间执行  监听滚动事件等

- 讲讲常用的es6语法，比如let、promise、class async awiat  generator Set/Map weakset, weakmap等等

- 使用es5实现es6的class
Object.defineProperty()

-  Ajax 底层实现，readystate 有哪些
0-（未初始化）还没有调用send()方法
1-（载入）已调用send()方法，正在发送请求
2-（载入完成）send()方法执行完成，已经接收到全部响应内容
3-（交互）正在解析响应内容
4-（完成）响应内容解析完成，可以在客户端调用了

- Object.freeze和Object.seal的区别
Object.preventExtension：禁止对象添加新属性并保留已有属性;
Object.seal：在一个现有对象上调用 Object.preventExtensions(..) 并把所有现有属性标记为 configurable:false;
Object.freeze：在一个现有对象上调用 Object.seal(..) 并把所有“数据访问”属性标记为 writable:false。

- MVC和MVVM的区别
Model用于封装和应用程序的业务逻辑相关的数据以及对数据的处理方法；
View作为视图层，主要负责数据的展示；
Controller定义用户界面对用户输入的响应方式，它连接模型和视图，用于控制应用程序的流程，处理用户的行为和数据上的改变。
MVC将响应机制封装在controller对象中，当用户和你的应用产生交互时，控制器中的事件触发器就开始工作了。
MVVM由 Model,View,ViewModel 三部分构成,把View和Model的同步逻辑自动化了。以前Controller负责的View和Model同步不再手动地进行操作，而是交给框架所提供的数据绑定功能进行负责，只需要告诉它View显示的数据对应的是Model哪一部分即可。也就是双向数据绑定，就是View的变化能实时让Model发生变化，而Model的变化也能实时更新到View。
Model和View并无直接关联，而是通过ViewModel来进行联系的，Model和ViewModel之间有着双向数据绑定的联系。因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步。
这种模式实现了Model和View的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作dom。

- 怎么上传文件

- 用JavaScript的异步实现sleep函数

- 手写实现处理跨域的jsonp

- 正则用过吗？exec, 匹配一个手机号

- sort的底层实现机制
数组长度<=22时采用插入排序，大于22用快排。

- JS设计模式
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

- websocket
由于 http 存在一个明显的弊端（消息只能有客户端推送到服务器端，而服务器端不能主动推送到客户端），导致如果服务器如果有连续的变化，这时只能使用轮询，而轮询效率过低，并不适合。于是 WebSocket 被发明出来。
相比与 http 具有以下有点：
支持双向通信，实时性更强；
可以发送文本，也可以二进制文件；
协议标识符是 ws，加密后是 wss ；
较少的控制开销。连接创建后，ws客户端、服务端进行数据交换时，协议控制的数据包头部较小。在不包含头部的情况下，服务端到客户端的包头只有2~10字节（取决于数据包长度），客户端到服务端的的话，需要加上额外的4字节的掩码。而HTTP协议每次通信都需要携带完整的头部；
支持扩展。ws协议定义了扩展，用户可以扩展协议，或者实现自定义的子协议。（比如支持自定义压缩算法等）
无跨域问题。

实现比较简单，服务端库如 socket.io、ws ，可以很好的帮助我们入门。而客户端也只需要参照 api 实现即可。

- websocket握手过程


- 跨域以及解决办法
见repeat.md

- 懒加载怎么实现
场景：一个页面中很多图片，但是首屏只出现几张，这时如果一次性把图片都加载出来会影响性能。这时可以使用懒加载，页面滚动到可视区在加载。优化首屏加载。
实现：img标签src属性为空，给一个data-xx属性，里面存放图片真实地址，当页面滚动直至此图片出现在可视区域时，用js取到该图片的data-xx的值赋给src。
优点：页面加载速度快，减轻服务器压力、节约流量，用户体验好。

- JavaScript的sort方法内部使用的什么排序？

- 函数式编程

- 手写实现promise,实现 Promise.finally

- 怎么判断一个点是否在圆形内、正方形内    

- 实现一个事件发布订阅类，其实就是eventEmitter

- 回调函数的坏处

- 如何抽取公共组件的

- 如何实现一个可设置过期时间的localStorage

- 实现一个发布订阅系统，包括on、emit、off等等

- 用docker做了什么

- 优化项目
https://mp.weixin.qq.com/s?__biz=MzUxMTcwOTM4Mg==&mid=2247483962&idx=1&sn=f9337ad983c6303811eb43d07d9f23d5&chksm=f96edb93ce195285943211e645cc683989826abdaaa8ab0b073a20761369ed04843c835c50b7#rd
https://aotu.io/notes/2016/03/16/optimization/

- 项目部署，线上问题等等

- 设计一个单点登录的系统，类似阿里系那种

- 实现一个联想搜索组件

- 一个搜索框的输入联想，会遇到什么问题？如果第一个请求延迟，第二个请求先到，请问怎么处理？
键盘输入太快，每次输入都去联想，需要多次发送请求，会导致用户体验太差，可以使用防抖优化。
在前端做判断，判断此时的值是否与返回的值相同，不同就丢弃，相同就显示在页面。

- webpack热更新原理，使用过的插件

- AMD，CMD，CommonJs，ES6 Module
AMD：requirejs 在推广过程中对模块定义的规范化产出，提前执行，推崇依赖前置
CMD：seajs 在推广过程中对模块定义的规范化产出，延迟执行，推崇依赖就近
CommonJs：模块输出的是一个值的 copy，运行时加载，加载的是一个对象（module.exports 属性），该对象只有在脚本运行完才会生成
ES6 Module：模块输出的是一个值的引用，编译时输出接口，ES6 模块不是对象，它对外接口只是一种静态定义，在代码静态解析阶段就会生成。

- XSS 和 CSRF SQL注入
XSS：跨站脚本攻击，是一种网站应用程序的安全漏洞攻击，是代码注入的一种。常见方式是将恶意代码注入合法代码里隐藏起来，再诱发恶意代码，从而进行各种各样的非法活动。
防范：记住一点 “所有用户输入都是不可信的”，所以得做输入过滤和转义
CSRF：跨站请求伪造，也称 XSRF，是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。与 XSS 相比，XSS利用的是用户对指定网站的信任，CSRF利用的是网站对用户网页浏览器的信任。
防范：验证 HTTP Referer 字段, 用户操作验证（验证码），请求地址中添加 token 并验证,HTTP 头中自定义属性并验证
sql注入:在未授权情况下，非法访问数据库信息
防范:在web输入参数处，对所有的参数做sql转义 杜绝用户提交的参数入库并且执行

- OSI七层模型

- OSI七层模型，路由器工作在哪一层？
网络层

- 怎么计算在一个页面上的停留时间
方案1：websocket，前端开个长连接，后台统计长连接时间。
方案2：ajax轮询，隔几秒发一个查询，后台记录第一与最后一个查询间隔时间。
方案3： 关闭窗口或者跳转的时候会触发window.onbeforeunload函数，可以在该函数中做处理（有兼容性问题）；统计完数据记录到本地cookies中，一段时间后统一发送。

- 怎么做一个实时的聊天系统
使用WebSocket和nodejs，《nodejs实战》这本书详细介绍了这个项目。

- websocket有时会出现掉线的问题，怎么解决？
加入心跳机制
```
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

- PWA

- 有一个长度为 100 的数组，请求出该数组的前 10 个元素之和。

- 写一个程序打印 1 到 100 这些数字，遇到数字为 3 的倍数，打印 “A” 替代该数字；遇到 5 的倍数，用 “B” 代替；遇到即是 3 的倍数又是 5 的倍数，打印 “AB”。

- 跨域通信有哪些方案，各有什么不同？

- 哪些常见操作会造成内存泄漏？

- 主流前端框架如 Angular/React/Vue 等之间有哪些差异及特点，选取一个描述其组件生命周期。

## vue
-  delete和Vue.delete删除数组的区别
delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。
Vue.delete 直接删除了数组 改变了数组的键值。

- vue原理，和react的区别

- 讲vue的响应式原理、依赖收集、监听数组、虚拟dom等等

- vue响应式原理，什么是mvvm

- 前端持久化的方式、区别

- vue双向绑定讲一讲

- 手写vue双向绑定

- 使用 JavaScript Proxy实现简单的数据绑定

- vue-router的原理

- 手写vue的mixin方法

- vue原理，包括计算属性、依赖收集等等

- 对vuex的理解，单向数据流

- 抽取过哪些vue组件

- v-if 与 v-show 的区别
v-if 的话，是往 DOM 树上添加或者删除元素；v-show 的话，使用 display: none 这些来控制显示元素

- 讲vue-lazyloader的原理，手写伪代码

- vue里面哪儿不会用到双向绑定
input中不适用v-model,而是使用v-bind/:

- Diff 算法,diff算法是对树的深度优先遍历还是广度优先遍历
是深度优先遍历

- vue和react区别
相同点：都支持 ssr，都有 vdom，组件化开发，实现 webComponents 规范，数据驱动等
不同点：vue 是双向数据流（当然为了实现单数据流方便管理组件状态，vuex 便出现了），react 是单向数据流。vue 的 vdom 是追踪每个组件的依赖关系，不会渲染整个组件树，react 每当应该状态被改变时，全部子组件都会 re-render。

- vue里面的虚拟dom是怎么回事,优点？
创建真实DOM的代价高：真实的 DOM 节点 node 实现的属性很多，而 vnode 仅仅实现一些必要的属性，相比起来，创建一个 vnode 的成本比较低。
触发多次浏览器重绘及回流：使用 vnode ，相当于加了一个缓冲，让一次数据变动所带来的所有 node 变化，先在 vnode 中进行修改，然后 diff 之后对所有产生差异的节点集中一次对 DOM tree 进行修改，以减少浏览器的重绘及回流。

- Vue 组件 data 为什么必须是函数
每个组件都是 Vue 的实例。
组件共享 data 属性，当 data 的值是同一个引用类型的值时，改变其中一个会影响其他。

- Vue computed 实现
从两个问题出发：
建立与其他属性（如：data、 Store）的联系；
属性改变后，通知计算属性重新计算。
实现时，主要如下
初始化 data， 使用 Object.defineProperty 把这些属性全部转为 getter/setter。
初始化 computed, 遍历 computed 里的每个属性，每个 computed 属性都是一个 watch 实例。每个属性提供的函数作为属性的 getter，使用 Object.defineProperty 转化。
Object.defineProperty getter 依赖收集。用于依赖发生变化时，触发属性重新计算。
若出现当前 computed 计算属性嵌套其他 computed 计算属性时，先进行其他的依赖收集

- 怎么快速定位哪个组件出现性能问题
通过 timeline 来查看每个函数的调用时常，定位出哪个函数的问题，从而能判断哪个组件出了问题。
https://juejin.im/post/5a6e78abf265da3e3f4cf085
https://developers.google.cn/web/tools/chrome-devtools/?hl=zh-cn

- 讲vue-lazyloader源码以及设计

## node/express
- express设计原理，面试官对动态路由匹配一直追问下去

- 讲express的设计原理

- 讲express框架的设计思想

- 讲nodejs的eventEmitter的实现

- 讲express的中间件系统是如何设计的

## webpack
- 项目中怎么用的webpack，怎么优化

- 模块化介绍一下，什么是编译时优化

- 用webpack做了什么

## JS(代码/算法)
- 有哪些排序算法，时间复杂度是多少？什么时候快排的效率最低？
|排序算法|最坏事件复杂度|平均时间复杂度|稳定度|空间复杂度|
|-|-|-|-|-|
|冒泡排序|O(n^2)|O(n^2)|稳定|O(1)|
|插入排序|O(n^2)|O(n^2)|稳定|O(1)|
|选择排序|O(n^2)|O(n^2)|稳定|O(1)|
|快速排序|O(n^2)|O(n*log2n)|不稳定|O(log2n)~O(n)|
|二叉树排序|O(n^2)|O(n*log2n)|不一定|O(n)|
|堆排序|O(n*log2n)|O(n*log2n)|不稳定|O(1)|

整个序列已经有序或完全倒序时，快排的效率最低。

- 冒泡排序和快速排序的区别

- 手写快排，时间复杂度，优化

- 手动实现parseInt

- 生成指定深度和每层广度的代码
当clone层级很深的话就会栈溢出，但数据的广度不会造成溢出
```
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

- 给你一亿个数，是连续的，怎么找出两个不存在的数
用bitmap就能搞定了，存在为1，不存在为0。

- 数组的filter，以下输出结果是什么(2018拼多多)
```
var arr = [1,2,3];
arr[10] = 9;
arr.filter((item)=> {
    return item === undefined?
})
```
- 输出结果(2017年「今日头条」)  
```
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
```
- 使用递归的方法，将obj变为obj2的格式(拼多多2018)
```
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
- 写一个sum方法，可以实现以下两种调用方式
```
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
- 实现判断变量是否是整数的函数isInter(x)的实现
 在ES6中，是有现成的方法Number.isInteger
```
//1 异或运算
function isInter(x) {
    return x ^ 0 === x
}

//2 取整
return Math.round(x) === x  //同样可以用floor ceil

//取余
return (typeof x === 'number')&&(x % 1 === 0)

```
- 使下面代码正常运行
```
const a = [1,2,3,4,5];
a.multiply();
console.log(a);//[1,2,3,4,5,1,4,9,16,25]
```

- 给定一个数组排序，使得奇数位的值不大于相邻偶数位的值

- 如何每隔三个数加一个逗号，还要考虑小数点的情况
```
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

- 手写indexOf
```
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

- 实现call
```
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

- 实现Object.assign
```
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

- 数组扁平化处理
```
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

- 实现一个div滑动的动画，由快至慢5s结束（不准用css3)。

- 页面内有一个input输入框，实现在数组arr查询命中词并要求autocomplete效果。

- 实现超出整数存储范围的两个大整数相加function add(a,b)。注意a和b以及函数的返回值都是字符串
```
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

- 能写一个二叉树么，怎么去遍历

- 描述一下归并排序是怎么实现的？

- 快速排序算法说下，基点怎么选？如果一个数组是已经排序好的怎么选基点？
数组元素随机，取固定基准；
数组元素已排序或逆序，取随机基准；
更好的方法：三数取中，选取数组开头，中间和结尾的元素，通过比较，选择中间的值作为快排的基准。

- 10 个 Ajax 同时发起请求，全部返回展示结果，并且至多允许三次失败，说出设计思路

- 基于 Localstorage 设计一个 1M 的缓存系统，需要实现缓存淘汰机制

- 