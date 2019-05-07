## Xhtml和html的区别
XHTML 元素必须被正确地嵌套。
XHTML 元素必须被关闭。
标签名必须用小写字母。
XHTML 文档必须拥有根元素。

## 遇到过哪些兼容性问题
https://www.cnblogs.com/zhoudawei/p/7497544.html

## 浏览器内核有哪些，移动端用的是哪个
Trident内核：IE,MaxThon,TT,The Word,360,搜狗浏览器等。[又称为MSHTML]
Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等；
Presto内核：Opera7及以上。[Opera内核原为：Presto，现为：Blink]
Webkit内核：Safari,Chrome等。[Chrome的:Blink(Webkit的分支)]

对于Android手机而言，使用率最高的就是Webkit内核。

## HTML标签中class内的顺序并不重要，主要是看css中class的顺序，后面的会覆盖前面的

## display:none与visibility:hidden
(1) display:none; HTML元素（对象）的宽高，高度等各种属性值都将“丢失”,视为不存在，而且不加载。
(2) visibility:hidden; HTML元素（对象）仅仅是在视觉上看不见（完全透明），而它所占据的空间位置仍然存在，也即是说它仍然具有高度，宽度等属性值。


## CSS盒模型，在不同浏览器的差异
盒模型由content padding border margin组成
盒模型分为标准模型和IE模型
标准模型的宽高就是content的宽高
IE模型的宽高由content padding border组成
通过box-sizing属性更改,content-box(标准) border-box(IE)

## JS获取宽高
1. dom.style.width/height  只能获取内联
2. dom.currentStyle.width/height  IE
3. window.getComputedStyle(dom).width/height  兼容其他浏览器
4. dom.getBoundingClientRect().width/height 根据元素在视窗中的绝对位置来获取宽高的
4. dom.offsetWidth/offsetHeight

## BFC实现原理，可以解决的问题，如何创建BFC
块级格式化上下文
- BFC 的原理
其实也就是 BFC 的渲染规则（能说出以下四点就够了）。包括：
1. BFC 内部的子元素，在垂直方向，边距会发生重叠。
2. BFC在页面中是独立的容器，外面的元素不会影响里面的元素，反之亦然。
3. BFC区域不与旁边的float box区域重叠。（可以用来清除浮动带来的影响）。
4. 计算BFC的高度时，浮动的子元素也参与计算。
- 如何生成BFC
1. 方法1：overflow: 不为visible，可以让属性是 hidden、auto。【最常用】
2. 方法2：浮动中：float的属性值不为none。意思是，只要设置了浮动，当前元素就创建了BFC。
3. 方法3：定位中：只要posiiton的值不是 static或者是relative即可，可以是absolute或fixed，也就生成了一个BFC。
4. 方法4：display为inline-block, table-cell, table-caption, flex, inline-flex
5. 根元素
- BFC应用
1. 阻止margin重叠
2. 可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个div都位于同一个 BFC 区域之中)
3. 自适应两栏布局
4. 可以阻止元素被浮动元素覆盖

## CSS所有选择器及其优先级、使用场景，哪些可以继承，如何运用at规则
- 优先级  
！important>行内样式>id选择器>类选择器>标签选择器>通配符>继承  

css中子元素会继承父元素的字体属性
但是a标签不会继承颜色属性和文字装饰属性
h标签不会继承文字大小和粗细属性

- @规则  
    - `@charset "utf-8"`
    - `@import "./style.css"`
    - `@media only screen and (max-width:1200px){}`
    - `@font-face{font-family:ziti;src:url('http://....')}`
    - `@keyframes name{}`

## CSS伪类和伪元素有哪些，它们的区别和实际应用
css引入伪类和伪元素为了描述现有css无法描述的东西  
css3中规定使用双冒号表示伪元素  
但是IE8以下一些浏览器不兼容:: 所以大部分伪元素既可以单冒号,也可以双冒号  
伪类操作的是文档树中已有的元素,而伪元素则创建了一个文档以外的元素  
伪类 :hover :active :link :visited :nth-child :nth-of-type :first-child :last-child  
伪元素 ::after ::before ::first-line(某个元素的第一行) ::first-letter(元素的首字母) ::selection(匹配被用户选中或高亮的部分) ::palceholder(改变全屏下背景颜色,默认黑色,只支持双冒号)  

## HTML文档流的排版规则，CSS几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，
将窗体自上而下分成一行一行,并且在每行中按从左至右一次排放元素
内联元素不会独占一行,块级元素都独有一行,浮动元素按规则浮动在行的一端,若当前容不下则再起一行
使用float脱离文档流时,其他盒子会无视这个元素,但其他盒子的文本依然会给这个元素让出位置,而使用position脱离文档流后会直接无视
position:static    元素框正常形成,块级元素形成一个矩形框,作为文档流一部分,行内元素则会创建一个或多个行框,置于其父元素中
         relative  相对定位,保留原本位置
         absolute  绝对定位,完全离开文档流,根据最近的且position不为static的父对象的位置进行定位
         fixed     固定定位,脱离文档流,相对于根元素进行定位
         inherit   继承

## 雪碧图实现原理
将小图标合并到一张图片上,利用css的背景定位来显示需要的部分
减少加载网页图片对服务器请求次数
提高页面的加载速度

## 可使用CSS函数复用代码，实现特殊效果
- attr()    返回选择元素的属性值
- calc()    允许计算 CSS 的属性值，比如动态计算长度值
- linear-gradient()     创建一个线性渐变的图像
- radial-gradient()     用径向渐变创建图像
- repeating-linear-gradient()	用重复的线性渐变创建图像   
- repeating-radial-gradient()   类似 radial-gradient()，用重复的径向渐变创建图像

## CSS模块化方案、如何配置按需加载、如何防止CSS阻塞渲染

## 熟练使用CSS实现常见动画，如渐变、移动、旋转、缩放等等

## CSS浏览器兼容性写法，了解不同API在不同浏览器下的兼容性情况
- -webkit- 针对safari，chrome浏览器的内核CSS写法
- -moz- 针对firefox浏览器的内核CSS写法
- -ms- 针对ie内核的CSS写法
- -o- 针对Opera内核的CSS写法

## css实现图片自适应宽高
max-width max-height

## CSS实现背景图片固定宽高比自适应调整
padding-top:percent;高度/宽度百分比

## 块级元素有哪些，怎么转成行内元素
div h1-h6 ol ul dl table form p
display:inline-block 

## 讲flex，手写出flex常用的属性，并且讲出作用
flex弹性布局,display:flex
设置flex后,子元素的float,clear,vertical-align都会失效
flex-direction(排列方向) flex-wrap(换行) flex-flow(前两者简写) justify-content(主轴对齐方式) align-items(交叉轴堆积方式) align-content(多轴对齐方式)
flex-grow 项目的放大比例，默认为0，即如果存在剩余空间，也不放大
flex-shrink 项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

## CSS 重排和重绘之间有什么区别？
重排
这个过程就是通过渲染树中渲染对象的信息，计算出每一个渲染对象的位置和尺寸
将其安置在浏览器窗口的正确位置
触发：增加、删除、修改、移动、修改css样式
重绘
浏览器会根据元素的新属性重新绘制，使元素呈现新的外观
重绘不会带来重新布局，并不一定伴随重排
触发：dom改变，css移动，改变visibility、outline、背景色等属性
position 要引起 重排，translate 重绘

## css哪些属性可以继承
字体相关：line-height, font-family, font-size, font-style, font-variant, font-weight, font
文本相关： letter-spacing, text-align, text-indent, text-transform, word-spacing
列表相关：list-style-image,  list-style-position, list-style-type, list-style
颜色：color

## defer和async的区别
defer要等到整个页面在内存中正常渲染结束（DOM结构完全生成，以及其他脚本执行完成），才会执行。多个defer脚本会按照它们在页面出现的顺序加载。==“渲染完再执行”==
async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。多个async脚本是不能保证加载顺序的。==“下载完就执行”==

## BFC、IFC、GFC、FFC：FC（Formatting Contexts），格式化上下文
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

## CSS里面有哪些相对单位？都是相对什么的？
绝对单位：不依赖其他元素的大小值
    px像素 in英寸 mm毫米
相对单位：依赖其他元素的值
    em：相对于父元素
    rem：相对于html的font-size值

## innerHTML有什么问题？有什么简单的办法可以避免插入文本被XSS攻击吗？
innerHTML会执行js代码,如果有不安全的js代码会导致问题

## 为什么不推荐用style内联元素？内联元素有什么缺点？（css文件可以缓存）
内联之后的CSS不会进行缓存，每次都会重新下载

## HTML中attribute和property的区别是什么？
attribute是HTML标签上的某个属性，如id、class、value等以及自定义属性，它的值只能是字符串,直接在html标签上添加的和使用setAttribute添加的情况一致，即html标签添加的都是attribute属性
    getAttribute() setAttribute() removeAttribute()
property是js获取的DOM对象上的属性值,可以使用xx.属性进行更改，通常来讲，更改互相影响（value除外）

## css会阻塞页面渲染吗？会的话该怎么解决呢？怎么做到只加载首页的css？
1. css加载不会阻塞DOM树的解析
2. css加载会阻塞DOM树的渲染
3. css加载会阻塞后面js语句的执行、
4. 如果页面中同时存在css和js，并且存在js在css后面，则DOMContentLoaded事件会在css加载完后才执行。
5. 其他情况下，DOMContentLoaded都不会等待css加载，并且DOMContentLoaded事件也不会等待图片、视频等其他资源加载。

## display 有哪些属性  
none block inline inline-block table flex table-cell

## em,rem,px的区别
px像素,相对于屏幕分辨率
em 相当对象内文本的font-size,如果当前也是em,则相对于父元素font-size
rem 参考根元素<html>的font-size

## IE盒模型和标准盒模型，用哪个属性改变
盒模型:content padding border margin  
标准盒模型:宽高是内容content的宽高
IE和盒模型:宽高是内容content+填充padding+边框border
box-sizing:content-box(标准模型)/border-box(IE模型)

## 描述一下渐进增强和优雅降级。
渐进增强（Progressive Enhancement）：一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。
优雅降级（Graceful Degradation）：一开始就构建站点的完整功能，然后针对浏览器测试和修复。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览。

## CSS 中可以让文字垂直和水平方向上重叠的两个属性是什么？
垂直方向 line-height
水平方向 letter-spacing

## 如何解决使用 inline-block 引起的空白间隙的问题？
letter-spacing
父元素letter-spacing:-6px 子元素letter-spacing:0px

## 行内元素是否可以用 margin、padding
行内元素不能设置宽高，竖直方向的margin、padding

## fixed是相对于谁定位的？如果加上transform会出现问题吗？
fixed相对于浏览器窗口定位
如果fixed元素的父层添加了transform属性就会失效,变成absolute表现

## meta标签
见repeat

## 写出5种css隐藏元素的办法
1. `opacity: 0;`
2. `visibility: hidden;`
3. `display: none;`
4. 
```
position: absolute;
top: -9999px;
left: -9999px;
```
5. `clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);`

## 谈谈css预处理器机制

## 建议使用 padding 代替 margin

## position:fixed 降级问题
使用 `position:fixed` 这个属性。如果其父元素中有使用 `transform`，`fixed` 的效果会降级为 `absolute`

## css中使用变量var
```css
:root{
    --width:100px;
}
div{
  width:var(--width);
}

/* js */
/* document.documentElement.style.setProperty(); */
```

## 从 html 元素继承 box-sizing
```css
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```

## 1px
```less
/* 方案1 */
.border_bottom { 
    overflow: hidden; 
    position: relative; 
    border: none!important; 
}
.border_bottom:after { 
    content: ".";
    position: absolute; 
    left: 0; 
    bottom: 0; 
    width: 100%; 
    height: 1px; 
    background-color: #d4d6d7; 
    -webkit-transform-origin: 0 0;  
    transform-origin: 0 0; 
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}

/* 方案2 */
.border_bottom {
  box-shadow: inset 0px -1px 1px -1px #d4d6d7;
}

/* 方案3 */
.min-device-pixel-ratio(@scale2, @scale3) {
  @media screen and (min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2) {
    transform: @scale2;
  }
  @media screen and (min-device-pixel-ratio: 3), (-webkit-min-device-pixel-ratio: 3) {
    transform: @scale3;
  }
}

.border-1px(@color: #DDD, @radius: 2PX, @style: solid) {
  &::before {
    content: "";
    pointer-events: none;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: 0 0;
    border: 1PX @style @color;
    border-radius: @radius;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    @media screen and (min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2) {
      width: 200%;
      height: 200%;
      border-radius: @radius * 2;
      transform: scale(.5);
    }
    @media screen and (min-device-pixel-ratio: 3), (-webkit-min-device-pixel-ratio: 3) {
      width: 300%;
      height: 300%;
      border-radius: @radius * 3;
      transform: scale(.33);
    }
  }
}

.border-top-1px(@color: #DDD, @style: solid) {
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-top: 1Px @style @color;
    transform-origin: 0 0;
    .min-device-pixel-ratio(scaleY(.5), scaleY(.33));
  }
}
```

## 解决不同dpr机型圆大小不一样
```less
/*@size 建议取双数*/
.circle(@size, @backgroundColor) {  
    width: @size;
    height: @size;
    background-color: @backgroundColor;
    [data-dpr="1"] & {
        width: @size * 0.5;
        height: @size * 0.5;
    }
    [data-dpr="3"] & {
        width: @size * 1.5;
        height: @size * 1.5;
    }
}
```

## css优化
- 保持简单，不要使用嵌套过多过于复杂的选择器
- 通配符和属性选择器效率最低，需要匹配的元素最多，尽量避免使用
- 不要使用类选择器和ID选择器修饰元素标签，如h3#markdown-content
- 不要为了追求速度而放弃可读性与可维护性
- 不要使用@import
- 优化重排与重绘

## 1px
```scss
@mixin hairline-common($border-radius) {
  position: relative;
  z-index: 0;
  &:before {
    position: absolute;
    content: '';
    border-radius: $border-radius;
    box-sizing: border-box;
    transform-origin: 0 0;
  }
}
@mixin hairline($direct: 'all', $border-color: #ccc, $border-radius: 0) {
  @include hairline-common($border-radius);
  &:before {
    transform: scale(.5);
    @if $direct == 'all' {
      top: 0;
      left: 0;
      width: 200%;
      height: 200%;
      box-shadow: 0 0 0 1px $border-color;
      z-index: -1;
    } @else if $direct == 'left' or $direct == 'right' {
      #{$direct}: 0;
      top: 0;
      width: 0;
      height: 200%;
      border-#{$direct}: 1px solid $border-color;
    } @else {
      #{$direct}: 0;
      left: 0;
      width: 200%;
      height: 0;
      border-#{$direct}: 1px solid $border-color;
    }
  }
}
```