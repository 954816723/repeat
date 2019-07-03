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