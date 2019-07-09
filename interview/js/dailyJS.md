## 2019/7/3
###### 页面导入样式时，使用link和@import有什么区别？
1. link是HTML标签,@import是css提供的  
2. link引入的样式在页面加载时同时加载,@import引入的样式需要等页面加载完成再加载  
3. link没有兼容问题,@import不兼容IE5以下  
4. link可以通过js操作DOM动态引入样式表来改变样式,@import不可以  
###### 圣杯布局和双飞翼布局的理解和区别
1. 作用：圣杯布局和双飞翼布局解决的问题是一样的，就是两边顶宽，中间自适应的三栏布局，中间栏要在放在文档流前面以优先渲染。  
2. 区别：圣杯布局，为了中间div内容不被遮挡，将中间div设置了左右padding-left和padding-right后，将左右两个div用相对布局position: relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div。双飞翼布局，为了中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该子div里用margin-left和margin-right为左右两栏div留出位置。  
###### 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
```js
let array = new Array(5),
    num = random(),
    i = 0;
randomArr(array,num);
function randomArr(array,num){
    if(array.indexOf(num) < 0){
        array.push(num);
        i++;
    }else{
        num = random()
    }
    if(i >= array.length){
        console.log(array);
        return
    }else{
        randomArr(array,nm)
    }
}
function random(){
    return Math.floor(Math.random()*31+2)
}
```
## 2019/7/8
###### html的元素有哪些（包含H5）
div span p ul li table tr th td form input button header section footer h1~h6 textarea image video audio i head body html canvas nav article   

###### CSS3有哪些新增的特性？
transform transition linear-gradient animation box-shadow border-radius border-radius box-sizing text-shadow @font-face word-wrap word-break   

###### 写一个方法去掉字符串中的空格
```js
let str = string.trim().split(' ').join('');

function trim(str){
    let reg = /\s+/g;
    let result = str.replace(reg,str);
    console.log(result);
}
```
## 2019/7/8
###### HTML全局属性(global attribute)有哪些（包含H5）？
全局属性是所有HTML元素共有的属性; 它们可以用于所有元素，即使属性可能对某些元素不起作用  
class id title type width height data-* value src target disabled checked ref name style 

###### 在页面上隐藏元素的方法有哪些？
`display:none`    
`visibility:hidden`  
`opacity:0`  
`width:0;height:0;overflow:hidden;`  
`margin-left:-100%`  
`z-index:-9999999`  
`transform:scale(0)`  

###### 去除字符串中最后一个指定的字符
```js
function del(str,val){
    if(typeof str !== 'string'){
        console.log('不是字符串');
        return
    }
    let i = str.lastIndexOf(val);
    return str.substring(0,i) + str.substring(i+1,str.length)
}
```
## 2019/7/9
###### HTML5的文件离线储存怎么使用，工作原理是什么？
`service workers`

###### CSS选择器有哪些？哪些属性可以继承？
`id` `class` `标签` `后代` `子选择器` `兄弟选择器` `属性选择器`  `伪类选择器` `伪元素选择器`  
字体类的属性可以继承  

###### 写一个方法把下划线命名转成大驼峰命名
```js
function trans(str){
    let temp = str.split('_');
    let arr =temp.map(item=>{
        return item.substr(0,1).toUpperCase() + item.substring(1);
    })
    console.log(arr.join(''))
}
```
## 2019/7/9
###### 简述超链接target属性的取值和作用
`_blank 另一窗口打开` `_self 当前窗口打开` `_top 跳出框架在整个页面打开`  

###### CSS3新增伪类有哪些并简要描述
`first-of-type` `last-o type` `only-of-type` `only-child` `nth-child()` `nth-last-child()` `nth-of-type()` `last-child` `empty` `target` `not()` `enabled` `disabled` `checked`   

###### 写一个把字符串大小写切换的方法
```js
function caseConvert(str){
    return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2)=>{
	return `${s1.toUpperCase()}${s2.toLowerCase()}`
    })
}
```