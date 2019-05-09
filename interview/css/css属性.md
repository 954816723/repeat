## linear-gradient
线性渐变 
`background: linear-gradient(direction, color-stop1, color-stop2, ...);`
需要制定方向(角度),以及渐变颜色,至少两个  

## -webkit-border-image
设置边框的图像  

## text-transform
转换文本大小写  
capitalize  uppercase lowercase  

## box-shadow
设置div的阴影  
`box-shadow: h-shadow v-shadow blur spread color inset;`

## text-shadow
阴影文本  
`text-shadow: h-shadow v-shadow blur color;`

## text-align:justify
实现两端对齐文本效果。

## text-align-last:right
段落的最后一行对齐方式

## animation
animation-name	            指定要绑定到选择器的关键帧的名称  
animation-duration	        动画指定需要多少秒或毫秒完成  
animation-timing-function	  设置动画将如何完成一个周期  
animation-delay	            设置动画在启动前的延迟间隔。  
animation-iteration-count	  定义动画的播放次数。  
animation-direction	        指定是否应该轮流反向播放动画。  
animation-fill-mode	        规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。  
animation-play-state	      指定动画是否正在运行或已暂停。  
initial	                    设置属性为其默认值。 阅读关于 initial的介绍。  
inherit                     继承  

## transform
translate scale rotate skew perspective

## transition
transition-property	        指定CSS属性的name，transition效果
transition-duration	        transition效果需要指定多少秒或毫秒才能完成
transition-timing-function	指定transition效果的转速曲线
transition-delay	          定义transition效果开始的时候

## 可视化拖拽页面(H5 有个可拖拽属性)
- `draggable `
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

## css3新属性
###### 边框：
border-radius：圆角边框，border-radius:25px;
box-shadow：边框阴影，box-shadow: 10px 10px 5px #888888;
border-image：边框图片，border-image:url(border.png) 30 30 round;
###### 背景：
background-size：规定背景图片的尺寸，background-size:63px 100px;
background-origin：规定背景图片的定位区域，背景图片可以放置于 content-box、padding-box 或 border-box 区域。background-origin:content-box;
CSS3 允许您为元素使用多个背景图像。background-image:url(bg_flower.gif),url(bg_flower_2.gif);
###### 文本效果：
text-shadow：向文本应用阴影，可以规定水平阴影、垂直阴影、模糊距离，以及阴影的颜色。text-shadow: 5px 5px 5px #FF0000;
word-wrap：允许文本进行换行。word-wrap:break-word;
###### 字体：CSS3 @font-face 规则可以自定义字体。
###### 2D 转换（transform）
translate()：元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数。 transform: translate(50px,100px);
rotate()：元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。transform: rotate(30deg);
scale()：元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）参数。transform: scale(2,4);
skew()：元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数。transform: skew(30deg,20deg);
matrix()： 把所有 2D  转换方法组合在一起，需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。transform:matrix(0.866,0.5,-0.5,0.866,0,0);
###### 3D 转换
rotateX()：元素围绕其 X 轴以给定的度数进行旋转。transform: rotateX(120deg);
rotateY()：元素围绕其 Y 轴以给定的度数进行旋转。transform: rotateY(130deg);
###### transition：过渡效果，使页面变化更平滑
transition-property ：执行动画对应的属性，例如 color，background 等，可以使用 all 来指定所有的属性。
transition-duration：过渡动画的一个持续时间。
transition-timing-function：在延续时间段，动画变化的速率，常见的有：ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier 。
transition-delay：延迟多久后开始动画。
简写为：transition: `[<transition-property> || <transition-duration> || <transition-timing-function> || <transition-delay>]`;
###### animation：动画
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

## flex
######容器
父容器可以统一设置子容器的排列方式,子容器也可以单独设置自身的排列方式,如果两者同时设置,以子容器的设置为准
######父容器
**设置子容器如何沿主轴排列** : `justify-content`
`flex-start` : 起始端对齐
`flex-end` : 末尾端对齐
`center` : 居中对齐
`space-around` : 子容器沿主轴均匀分步,首尾两端到父容器的距离是子容器间距的一半
`space-between` : 子容器沿主轴均匀分步,首尾两端子容器与父容器相切  

**设置如何沿交叉轴方向分配子容器的间距** : `align-items`
`flex-start` : 起始端对齐
`flex-end` : 末尾端对齐
`center` : 居中对齐
`baseline` : 基线对齐
`stretch` : 子容器沿交叉轴方向的尺寸拉伸至于父容器一致

######子容器
`flex` : 在主轴上如何伸缩
flex的值可以是无单位的数字,也可以有单位,也可以是none(不伸缩)
可以1-3个值连用
![flex.png](https://upload-images.jianshu.io/upload_images/11793838-a7ebea286a5333f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
`align-self` : 单独设置子容器如何沿交叉排列
属性值与父容器`align-items`属性完全一致

######轴
`flex-direction:row / column / row-reverse / column-reverse`

##进阶
`flex-wrap: nowrap / wrap / wrap-reverse` : 设置换行方式( 不换行[默认] /换行 /逆序换行 )
`flex-flow` : `flex-direction`和`flex-wrap`的复合属性

`align-content : `  当子容器多行排列时,设置行与行之间的对齐方式
属性值:`flex-start  flex-end  center  space-around  space-between  sketch`

`flex-basis : ` : 在不伸缩的情况下容器的原始尺寸,主轴横向表示宽度,纵向表示高度
`flex-grow : ` 设置子容器弹性伸展的比例(按比例放大)
`flex-shrink : `  设置子容器弹性收缩的比例(按比例缩小)
`order : `  改变子容器的排列顺序,默认0可负,越小越靠前
