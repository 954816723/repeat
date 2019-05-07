## 渐变的话，假如有一个长方体，上面一种颜色，下面一种颜色，你会怎么做？

## 使用CSS绘制几何图形（圆形、三角形、扇形、菱形等）
- 圆
`border-radius:50%;(50~100%都可以)`
- 三角形
```css
/* 利用border边框是四个三角形,设置其中一个颜色,其他透明,可以获取四个方向的三角形 */
div{
    width: 0px;
	height: 0px;
	border-width: 40px;
	border-style: solid;
	border-color: red transparent transparent transparent;
}
/* 带边框的三角形 */
div{
	width: 0px;
	height: 0px;
	border-width:0 40px 40px;
	border-style: solid;
	border-color:  transparent transparent #333;
	position: relative;
}
div:after{
	content:"";
	display: block;
	width: 0px;
	height: 0px;
	border-width: 0 38px 38px;
	border-style: solid;
	border-color: transparent transparent red;
	position: absolute;
	top:1px;
    left:-38px;
}
```
- 菱形
```css
div{
    width: 50px;
    height: 50px;
    background: pink;
    transform: rotateZ(45deg) skew(30deg,30deg);
}
```
- 扇形
```css
/* 扇形是由一个圆形和一个矩形进行组合得到的，用矩形遮住圆形的一部分就形成了扇形 */
div{
    width: 142px;
    height: 142px;
    background: #fff;
    border-radius: 50%;
    background-image: linear-gradient(to right, transparent 50%, #655 0);
}

div::before {
    content: '';
    display: block;
    margin-left: 50%;
    height: 100%;
	width: 100%;
    background-color: inherit;
    transform-origin: left;
	/*调整角度，改变扇形大小*/
    transform: rotate(230deg);
}
```

## 一行文字超出后自动截取(块级元素)
```css
div{
    text-overflow:ellipsis;  /*ellipsis:截取后以...作为省略,clip:没有省略号*/
    white-space:nowrap;  /*强制不换行*/
    overflow:hidden;  /*溢出隐藏*/
}
```

## 超出两行省略号
```css
div{
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```

## 消除table表格每行之间的间隔
```css
div{
    border-collapse: collapse; 
    padding: 0;
    /*cellspacing=0 cellpadding=0是属性,写在标签中的,写在css中无效*/
}
```

## 透明度兼容
```css
div{
    opacity: 0.1;    /*透明度  在IE6~8下不兼容*/
    filter:alpha(opacity=10);  /*不兼容的话使用滤镜来处理*/
}
```

## 解决div相邻,边框变粗问题
```css
div{
    width:200px;
    height:200px;
    border:1px, solid #ccc;
    float:left;
    margin-left:-1px;
}
div:hover{
    border:1px solid #f40;
    position:relative;  //解决鼠标悬浮时少一个边框
}
```

## 使用自定义字体
```css
@font-face {
    font-family: "My font";
    src: url("./path/to/font.woff2") format("woff2"),
        url("./path/to/font.woff") format("woff");
}
```

## 使用纯CSS实现曲线运动（贝塞尔曲线）

## 手写图片瀑布流效果
```less
.masonry {
    // column-count属性指定某个元素应分为的列数
    column-count: 1;
    // 指定的列之间的差距
    column-gap: 0;
}
@media (min-width: 400px) {
    .masonry {
        column-count: 2;
    column-gap: 0;
    }
}
@media (min-width: 1200px) {
    .masonry {
        column-count: 9;
    column-gap: 0;
    }
}
.item {
    // 控制文本块分解成单独的列，以免项目列表的内容跨列，破坏整体的布局
    break-inside: avoid;
    box-sizing: border-box;
    padding: 10px;
}
```
## 超出省略
```css
.line-camp( @clamp:2 ) {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: @clamp;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
}
```

## 两端对齐
```css
div {
    margin: 10px 0; 
    width: 100px;
    border: 1px solid red;
    text-align: justify;
    text-align-last:justify
}
div:after{
    content: '';
    display: inline-block;
    width: 100%;
}
```