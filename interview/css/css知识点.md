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

## display:none与visibility:hidden
(1) display:none; HTML元素（对象）的宽高，高度等各种属性值都将“丢失”,视为不存在，而且不加载。
(2) visibility:hidden; HTML元素（对象）仅仅是在视觉上看不见（完全透明），而它所占据的空间位置仍然存在，也即是说它仍然具有高度，宽度等属性值。

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


## 有哪些伪类和伪元素，伪类选择器有哪些
伪类 :hover :active :link :visited :nth-child() :nth-of-type() :first-child :last-child
伪元素 ::after ::before ::first-line ::first-letter ::selection

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

## 什么是BFC？垂直margin重叠是为什么？怎么解决这个问题？
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
- BFC应用
1. 阻止margin重叠
2. 可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个div都位于同一个 BFC 区域之中)
3. 自适应两栏布局
4. 可以阻止元素被浮动元素覆盖

## CSS里面有哪些相对单位？都是相对什么的？

## innerHTML有什么问题？有什么简单的办法可以避免插入文本被XSS攻击吗？

## 为什么不推荐用style内联元素？内联元素有什么缺点？（css文件可以缓存）

## HTML中attribute和property的区别是什么？

## css会阻塞页面渲染吗？会的话该怎么解决呢？怎么做到只加载首页的css？

## 选择器优先级
！important>行内样式>id选择器>类选择器>标签选择器>通配符>继承

## display 有哪些属性  
none block inline inline-block table flex

## em,rem,px的区别
px像素,相对于屏幕分辨率
em 相当对象内文本的font-size,如果当前也是em,则相对于父元素font-szie
rem 参考根元素<html>的font-size

## IE盒模型和标准盒模型，用哪个属性改变
盒模型:content padding border margin  
标准盒模型:宽高是内容content的宽高
IE和盒模型:宽高是内容content+填充padding+边框border
box-sizing:content-box(标准模型)/border-box(IE模型)

## 描述一下渐进增强和优雅降级。

## CSS 中可以让文字垂直和水平方向上重叠的两个属性是什么？
垂直方向 line-height
水平方向 letter-spacing

## 如何解决使用 inline-block 引起的空白间隙的问题？
letter-spacing
父元素letter-spacing:-6px 子元素letter-spacing:0px

## 行内元素是否可以用 margin、padding

## postion 定位
position 定位的话，默认是 static。然后，如果 position: fixed 的时候，就是相对于根元素进行定位。然后，如果是 position: absolute 的时候，根据前面那个进行了 position: relative 的标记，进行相对定位。然后，positon: relative，我常用的就是将它作为 positon: relative 的定位作用。

## fixed是相对于谁定位的？如果加上transform会出现问题吗？

## meta标签
见repeat

## 100 * 100 的 Canvas 占内存多大？

## fixed是相对于谁定位的？如果加上transform会出现问题吗？


## 写出5种css隐藏元素的办法
```
1.opacity: 0;

2.visibility: hidden;

3.display: none;

4.position: absolute;
top: -9999px;
left: -9999px;

5.clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);

```

## 谈谈css预处理器机制
