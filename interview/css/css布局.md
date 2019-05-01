## 清除浮动
1. 使用带有clear:both的空元素
2. 给浮动元素的容器添加overflow:hidden/auto 属性
3. 给父容器添加伪元素::after
```less
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

## 页面布局

###### 水平垂直居中
居中元素定宽高适用
1. absolute + 负margin
```less
.wp {
    position: relative;
}
.box {
    position: absolute;;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
}
```
2. absolute + margin auto
```less
.wp {
    position: relative;
}
.box {
    position: absolute;;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
```
3. absolute + calc
```less
.wp {
    position: relative;
}
.box {
    position: absolute;;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
}
```
居中元素不定宽高
1. absolute + transform
```less
.wp {
    position: relative;
}
.box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```
2. lineheight
```less
.wp {
    line-height: 300px;
    text-align: center;
    font-size: 0px;
}
.box {
    font-size: 16px;
    display: inline-block;
    vertical-align: middle;
    line-height: initial;
    text-align: left; /* 修正文字 */
}
```
3. writing-mode
```less
.wp {
    writing-mode: vertical-lr;
    text-align: center;
}
.wp-inner {
    writing-mode: horizontal-tb;
    display: inline-block;
    text-align: center;
    width: 100%;
}
.box {
    display: inline-block;
    margin: auto;
    text-align: left;
}
```
4. css-table
```less
.wp {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.box {
    display: inline-block;
}
```
5. flex
```less
.wp {
    display: flex;
    justify-content: center;
    align-items: center;
}
```
6. grid
```less
.wp {
    display: grid;
}
.box {
    align-self: center;
    justify-self: center;
}
```

###### 左边定宽，右边自适应方案：float + margin，float + calc
```less
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
###### 左右两边定宽，中间自适应：float，float + calc, 圣杯布局（设置BFC，margin负值法），flex
<!-- 
采用 absolute，导致父元素脱离了文档流，那所有的子元素也需要脱离文档流。如果页面复杂，那开发的难度可想而知
利用浮动  当中间内容高于两侧时，两侧高度不会随中间内容变高而变高
弹性盒子布局(flex)
利用负边距和浮动,实现起来比较复杂
利用网格布局 
-->
```less
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
// 网格布局
.container {
    display: grid;
    grid-template-columns: 100px auto 200px;
}
```
###### 左右居中 行内元素: text-align: center 定宽块状元素: 左右 margin 值为 auto 不定宽块状元素: table布局，position + transform
```less
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
###### 上下垂直居中： 定高：margin，position + margin(负值) 不定高：position + transform，flex，IFC + vertical-align:middle
```less
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

## 实现常用布局（三栏、圣杯、双飞翼、吸顶），可是说出多种方式并理解其优缺点