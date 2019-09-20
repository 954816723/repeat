#### 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
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

#### 写一个方法去掉字符串中的空格
```js
let str = string.trim().split(' ').join('');

function trim(str){
    let reg = /\s+/g;
    let result = str.replace(reg,str);
    console.log(result);
}
```

#### 去除字符串中最后一个指定的字符
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

#### 写一个方法把下划线命名转成大驼峰命名
```js
function trans(str){
    let temp = str.split('_');
    let arr =temp.map(item=>{
        return item.substr(0,1).toUpperCase() + item.substring(1);
    })
    console.log(arr.join(''))
}
```

#### 写一个把字符串大小写切换的方法
```js
function caseConvert(str){
    return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2)=>{
	return `${s1.toUpperCase()}${s2.toLowerCase()}`
    })
}
```

#### 写一个去除制表符和换行符的方法
```js
const removeSymbol = (str) => str.replace(/\t|\n|\r|\v|\f/g, "");

const str =
  "\t11122233\n_aaaaaaa\r\n_bbbbbb\t_3333333\r_4444444\n_555555";
  
console.log(removeSymbol(str));
```

#### 统计某一字符或字符串在另一个字符串中出现的次数
```js
function total(str,target){
    return (str.match(new RegExp(target, 'g')).length);
}
var childInNums = parent.split(child).length - 1
```

#### 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？
key的作用是为了在diff算法执行时更快的找到对应的节点，提高diff速度  

#### ['1', '2', '3'].map(parseInt) what & why ?
`[1,NaN,NaN]`  
`parseInt(string,radix)`函数用来解析字符串,使字符串成为指定基数的整数  
接受两个参数,第一个表示被处理的值,第二个表示解析时的基数(介于2~36之间)  
如果省略或为0,则以10为基础来解析,如果它以`0x``0X`开头,将以16为基数  
如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN  

#### 什么是防抖和节流？有什么区别？如何实现？
1. 防抖  
n秒内函数只会执行一次,如果n秒内函数再次出触发,则重新计算时间  
```js
function debounce(fn){
    let timer = null
    return function(){
        cleartimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this,arguments)
        },500)
    }
}
```
2. 节流  
高频事件触发,但在n秒内只会执行一次  
```js
function throttle(fn){
    let flag = true
    return function(){
        if(!flag) return
        flag = false
        setTimeout(() => {
            fn.apply(this,arguments)
            flag = true
        },500)
    }
}
```

#### 介绍下 Set、Map、WeakSet 和 WeakMap 的区别？
Set 和 Map主要的应用场景在于 `数据重组`和`数据存储`  
1. Set(集合)  
ES6新增的一种数据结构,类似于数组,但成员是唯一且无序的,没有重复的值  
Set本身是一种构造函数,用来生成Set数据结构 `new Set()`  
Set 对象允许你储存任何类型的唯一值,向 Set 加入值的时候，不会发生类型转换  
认为NaN等于自身  
- Set 实例属性   
    - constructor： 构造函数  
    - size：元素数量  
- Set 实例方法  
    - add(value)：新增，相当于 array里的push  
    - delete(value)：存在即删除集合中value  
    - has(value)：判断集合中是否存在 value  
    - clear()：清空集合  
`Array.from` 方法可以将 Set 结构转为数组  
2. WeakSet  
WeakSet对象允许你将弱引用对象存储在一个集合中  
WeakSet和Set的区别:  
- WeakSet 只能储存对象引用，不能存放值，而 Set 对象都可以  
- WeakSet 对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑 WeakSet 对该对象的应用，如果没有其他的变量或属性引用这个对象值，则这个对象将会被垃圾回收掉（不考虑该对象还存在于 WeakSet 中），所以，WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到了（被垃圾回收了），WeakSet 对象是无法被遍历的（ES6 规定 WeakSet 不可遍历），也没有办法拿到它包含的所有元素  
- 属性：  
    - `constructor`：构造函数，任何一个具有 Iterable 接口的对象，都可以作参数  
- 方法:  
    `add(value)`：在WeakSet 对象中添加一个元素value  
    `has(value)`：判断 WeakSet 对象中是否包含value  
    `delete(value)`：删除元素 value  
    `clear()`：清空所有元素，*`注意该方法已废弃`*  
3. Map(字典)  
集合与字典的区别:  
- 共同点: 集合和字典可以存储不重复的值  
- 不同点: 集合是以`[value,value]`的形式存储元素,字典是以`[key,value]`的形式存储元素  
注意，只有对同一个对象的引用，Map 结构才将其视为同一个键  
- 属性：  
    - constructor：构造函数  
    - size：返回字典中所包含的元素个数  
- 操作方法：  
    - set(key, value)：向字典中添加新元素  
    - get(key)：通过键查找特定的数值并返回  
    - has(key)：判断字典中是否存在键key  
    - delete(key)：通过键 key 从字典中移除对应的数据  
    - clear()：将这个字典中的所有元素删除  
4. WeakMap  
WeakMap 对象是一组键值对的集合，其中的键是弱引用对象，而值可以是任意  
注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用  
WeakMap 中，每个键对自己所引用对象的引用都是弱引用，在没有其他引用和该键引用同一对象，这个对象将会被垃圾回收（相应的key则变成无效的），所以，WeakMap 的 key 是不可枚举的  
- 属性：  
    - constructor：构造函数  
- 方法：  
    - has(key)：判断是否有 key 关联对象  
    - get(key)：返回key关联对象（没有则则返回 undefined）  
    - set(key)：设置一组key关联对象  
    - delete(key)：移除 key 的关联对象  
5. 总结  
Set  
成员唯一、无序且不重复  
[value, value]，键值与键名是一致的（或者说只有键值，没有键名）  
可以遍历，方法有：add、delete、has  
WeakSet  
成员都是对象  
成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄漏  
不能遍历，方法有add、delete、has  
Map  
本质上是键值对的集合，类似集合  
可以遍历，方法很多可以跟各种数据格式转换  
WeakMap  
只接受对象作为键名（null除外），不接受其他类型的值作为键名  
键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的  
不能遍历，方法有get、set、has、delete  

#### 介绍下深度优先遍历和广度优先遍历，如何实现？

#### 请分别用深度优先思想和广度优先思想实现一个拷贝函数？

#### ES5/ES6 的继承除了写法以外还有什么区别？

#### setTimeout、Promise、Async/Await 的区别

#### Async/Await 如何通过同步的方式实现异步

#### 异步笔试题
```js
//请写出下面代码的运行结果

async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
```

#### 算法手写题
已知如下数组：  

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];  

编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组  

#### JS 异步解决方案的发展历程以及优缺点。

#### Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？

#### 情人节福利题，如何实现一个 new

#### 简单讲解一下http2的多路复用

#### 谈谈你对TCP三次握手和四次挥手的理解

#### A、B 机器正常连接后，B 机器突然重启，问 A 此时处于 TCP 什么状态
如果A 与 B 建立了正常连接后，从未相互发过数据，这个时候 B 突然机器重启，问 A 此时处于 TCP 什么状态？如何消除服务器程序中的这个状态？（超纲题，了解即可）  

#### React 中 setState 什么时候是同步的，什么时候是异步的？

#### React setState 笔试题，下面的代码输出什么？
```js
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }

  render() {
    return null;
  }
};
```

#### 介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？

#### 有以下 3 个判断数组的方法，请分别介绍它们之间的区别和优劣
Object.prototype.toString.call() 、 instanceof 以及 Array.isArray()  

#### 介绍下重绘和回流（Repaint & Reflow），以及如何进行优化

#### 介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景

#### 聊聊 Redux 和 Vuex 的设计思想

#### 说说浏览器和 Node 事件循环的区别

#### 介绍模块化发展历程
可从IIFE、AMD、CMD、CommonJS、UMD、webpack(require.ensure)、ES Module、<script type="module"> 这几个角度考虑。  

#### 全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取？。

#### cookie 和 token 都存放在 header 中，为什么不会劫持 token？

#### 聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的

#### 两个数组合并成一个数组
请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。  

#### 改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。
```js
for (var i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}
```

#### Virtual DOM 真的比操作原生 DOM 快吗？谈谈你的想法。

#### 下面的代码打印什么内容，为什么？
```js
var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();
```

#### 简单改造下面的代码，使之分别打印 10 和 20。
```js
var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();
```

#### 浏览器缓存读取规则
可以分成 Service Worker、Memory Cache、Disk Cache 和 Push Cache，那请求的时候 from memory cache 和 from disk cache 的依据是什么，哪些数据什么时候存放在 Memory Cache 和 Disk Cache中？  

#### 使用迭代的方式实现 flatten 函数。

#### 为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？

#### 下面代码中 a 在什么情况下会打印 1？
```js
var a = ?;
if(a == 1 && a == 2 && a == 3){
 	console.log(1);
}
```

#### 介绍下 BFC 及其应用。

#### 在 Vue 中，子组件为何不可以修改父组件传递的 Prop
如果修改了，Vue 是如何监控到属性的修改并给出警告的。  

#### 下面代码输出什么
```js
var a = 10;
(function () {
    console.log(a)
    a = 5
    console.log(window.a)
    var a = 20;
    console.log(a)
})()
```

#### 实现一个 sleep 函数
比如 sleep(1000) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现  

#### 使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果

#### 介绍 HTTPS 握手过程

#### HTTPS 握手过程中，客户端如何验证证书的合法性

#### 输出以下代码执行的结果并解释为什么
```js
var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
```

#### 双向绑定和 vuex 是否冲突

#### call 和 apply 的区别是什么，哪个性能更好一些

#### 为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？

#### 实现 (5).add(3).minus(2) 功能。
例： 5 + 3 - 2，结果为 6  

#### Vue 的响应式原理中 Object.defineProperty 有什么缺陷？
为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？  

#### 怎么让一个 div 水平垂直居中

#### 输出以下代码的执行结果并解释为什么
```js
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x) 	
console.log(b.x)
```

#### 冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？

#### 某公司 1 到 12 月份的销售额存在一个对象里面
如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。  

#### 要求设计 LazyMan 类，实现以下功能。
```js
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
```

#### 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景。

#### 箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？

#### 给定两个数组，写一个方法来计算它们的交集。
例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。  

#### 已知如下代码，如何修改才能让图片宽度为 300px ？注意下面代码不可修改。
```html
<img src="1.jpg" style="width:480px!important;”>
```

#### 介绍下如何实现 token 加密

#### redux 为什么要把 reducer 设计成纯函数

#### 如何设计实现无缝轮播

#### 模拟实现一个 Promise.finally

####  a.b.c.d 和 a['b']['c']['d']，哪个性能更高？

#### ES6 代码转成 ES5 代码的实现思路是什么

#### 数组编程题
随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。  

####  如何解决移动端 Retina 屏 1px 像素问题

####  如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 。

####  介绍下 webpack 热更新原理，是如何做到在不刷新浏览器的前提下更新页面的

####  实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。

####  为什么普通 for 循环的性能远远高于 forEach 的性能，请解释其中的原因。

####  介绍下 BFC、IFC、GFC 和 FFC

####  使用 JavaScript Proxy 实现简单的数据绑定

#### 数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多少

#### 输出以下代码运行结果
```js
// example 1
var a={}, b='123', c=123;  
a[b]='b';
a[c]='c';  
console.log(a[b]);

---------------------
// example 2
var a={}, b=Symbol('123'), c=Symbol('123');  
a[b]='b';
a[c]='c';  
console.log(a[b]);

---------------------
// example 3
var a={}, b={key:'123'}, c={key:'456'};  
a[b]='b';
a[c]='c';  
console.log(a[b]);
```

#### 算法题「旋转数组」
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。  

示例 1：  

输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3  
输出: [5, 6, 7, 1, 2, 3, 4]  
解释:  
向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]  
向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]  
向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]  
示例 2：  

输入: [-1, -100, 3, 99] 和 k = 2  
输出: [3, 99, -1, -100]  
解释:   
向右旋转 1 步: [99, -1, -100, 3]  
向右旋转 2 步: [3, 99, -1, -100]  

#### Vue 的父组件和子组件生命周期钩子执行顺序是什么

#### input 搜索如何防抖，如何处理中文输入

#### 介绍下 Promise.all 使用、原理实现及错误处理

#### 打印出 1 - 10000 之间的所有对称数
例如：121、1331 等  

#### 周一算法题之「移动零」
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。  

示例:  
输入: [0,1,0,3,12]  
输出: [1,3,12,0,0]  
说明:  

必须在原数组上操作，不能拷贝额外的数组。  
尽量减少操作次数。  

#### var、let 和 const 区别的实现原理是什么

#### 请实现一个 add 函数，满足以下功能。
```js
add(1); 			// 1
add(1)(2);  	// 3
add(1)(2)(3)；// 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6
```

#### react-router 里的 `<Link>` 标签和 `<a>` 标签有什么区别

#### 算法题之「两数之和」
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。  
你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。  

示例：  
给定 nums = [2, 7, 11, 15], target = 9  
因为 nums[0] + nums[1] = 2 + 7 = 9  
所以返回 [0, 1]  

#### 在输入框中如何判断输入的是一个正确的网址。

#### 实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度
```js
//以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：

// 原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convert(list, ...);

// 转换后的结果如下
let result = [
    {
      id: 1,
      name: '部门A',
      parentId: 0,
      children: [
        {
          id: 3,
          name: '部门C',
          parentId: 1,
          children: [
            {
              id: 6,
              name: '部门F',
              parentId: 3
            }, {
              id: 16,
              name: '部门L',
              parentId: 3
            }
          ]
        },
        {
          id: 4,
          name: '部门D',
          parentId: 1,
          children: [
            {
              id: 8,
              name: '部门H',
              parentId: 4
            }
          ]
        }
      ]
    },
  ···
];
```

#### 设计并实现 Promise.race()

#### 实现模糊搜索结果的关键词高亮显示

#### 介绍下 HTTPS 中间人攻击

#### 已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
```js
const value = '112'
const fn = (value) => {
...
}
fn(value) // 输出 [1， 11， 112]
```


#### 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))。
```js
//示例 1：
nums1 = [1, 3]
nums2 = [2]
//中位数是 2.0
//示例 2：
nums1 = [1, 2]
nums2 = [3, 4]
//中位数是(2 + 3) / 2 = 2.5
```

#### vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？

#### 模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况

#### 介绍下前端加密的常见场景和方法

#### React 和 Vue 的 diff 时间复杂度从 O(n^3) 优化到 O(n) ，那么 O(n^3) 和 O(n) 是如何计算出来的？

#### 写出如下代码的打印结果
```js
function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com"
  o = new Object()
  o.siteUrl = "http://www.google.com"
} 
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl);
```

#### 编程算法题
用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。  

#### 请写出如下代码的打印结果
```js
function Foo() {
Foo.a = function() {
  console.log(1)
}
this.a = function() {
  console.log(2)
}
}
Foo.prototype.a = function() {
console.log(3)
}
Foo.a = function() {
console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();
```

#### 修改以下 print 函数，使之输出 0 到 99，或者 99 到 0
```js
//要求：
//1、只能修改 setTimeout 到 Math.floor(Math.random() * 1000 的代码
//2、不能修改 Math.floor(Math.random() * 1000
//3、不能使用全局变量
function print(n){
setTimeout(() => {
 console.log(n);
}, Math.floor(Math.random() * 1000));
}
for(var i = 0; i < 100; i++){
print(i);
}
```

#### 不用加减乘除运算符，求整数的7倍

#### 模拟实现一个 localStorage

#### 模拟 localStorage 时如何实现过期时间功能

#### 编程题
url有三种情况  

https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33  
https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33  
https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33  
匹配elective后的数字输出（写出你认为的最优解法）:  

[] || ['800'] || ['800','700']  

#### 分别写出如下代码的返回值
```js
String('11') == new String('11');
String('11') === new String('11');
```

#### 考虑到性能问题，如何快速从一个巨大的数组中随机获取部分元素。
比如有个数组有100K个元素，从中不重复随机选取10K个元素。  

#### 请写出如下代码的打印结果
```js
var name = 'Tom';
(function() {
 if (typeof name == 'undefined') {
     var name = 'Jack';
     console.log('Goodbye ' + name);
 } else {
     console.log('Hello ' + name);
 }
})();
```

#### 扩展题，请写出如下代码的打印结果
```js
var name = 'Tom';
(function() {
 if (typeof name == 'undefined') {
     name = 'Jack';
     console.log('Goodbye ' + name);
 } else {
     console.log('Hello ' + name);
 }
})();
```

#### 编程题，请写一个函数，完成以下功能
输入 '1, 2, 3, 5, 7, 8, 10' 输出 '1~3, 5, 7~8, 10'  

#### 编程题，写个程序把 entry 转换成如下对象
```js
var entry = {
a: {
b: {
  c: {
    dd: 'abcdd'
  }
},
d: {
  xx: 'adxx'
},
e: 'ae'
}
}

// 要求转换成如下对象
var output = {
'a.b.c.dd': 'abcdd',
'a.d.xx': 'adxx',
'a.e': 'ae'
}
```

#### 编程题，写个程序把 entry 转换成如下对象（跟昨日题目相反）
```js
var entry = {
'a.b.c.dd': 'abcdd',
'a.d.xx': 'adxx',
'a.e': 'ae'
}

// 要求转换成如下对象
var output = {
a: {
b: {
  c: {
    dd: 'abcdd'
  }
},
d: {
  xx: 'adxx'
},
e: 'ae'
}
}
```

#### 编程题，根据以下要求，写一个数组去重函数（蘑菇街）
如传入的数组元素为[123, "meili", "123", "mogu", 123]，则输出：[123, "meili", "123", "mogu"]  
如传入的数组元素为[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]，则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]  
如传入的数组元素为[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]，则输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]  

#### 编程题，找出字符串中连续出现最多的字符和个数（蘑菇街）
```js
'abcaakjbb' => {'a':2,'b':2}
'abbkejsbcccwqaa' => {'c':3}
```

#### 写一个单向链数据结构的 js 实现并标注复杂度（水滴筹）

#### 输出以下代码运行结果
```js
1 + "1"

2 * "2"

[1, 2] + [2, 1]

"a" + + "b"
```

#### 介绍下 http1.0、1.1、2.0 协议的区别？

#### vue 渲染大量数据时应该怎么优化？

#### vue 如何优化首页的加载速度？vue 首页白屏是什么问题引起的？如何解决呢？

#### 为什么 for 循环嵌套顺序会影响性能？
```js
var t1 = new Date().getTime()
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 1000; j++) {
    for (let k = 0; k < 10000; k++) {
    }
  }
}
var t2 = new Date().getTime()
console.log('first time', t2 - t1)

for (let i = 0; i < 10000; i++) {
  for (let j = 0; j < 1000; j++) {
    for (let k = 0; k < 100; k++) {

    }
  }
}
var t3 = new Date().getTime()
console.log('two time', t3 - t2)
```

#### 统计 1 ~ n 整数中出现 1 的次数。

#### webpack 打包 vue 速度太慢怎么办？

#### vue 是如何对数组方法进行变异的？例如 push、pop、splice 等方法

#### 永久性重定向（301）和临时性重定向（302）对 SEO 有什么影响

#### 算法题
如何将[{id: 1}, {id: 2, pId: 1}, ...] 的重复数组（有重复数据）转成树形结构的数组 [{id: 1, child: [{id: 2, pId: 1}]}, ...] （需要去重）  

#### 扑克牌问题
有一堆扑克牌，将牌堆第一张放到桌子上，再将接下来的牌堆的第一张放到牌底，如此往复；  
最后桌子上的牌顺序为： (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)；  
问：原来那堆牌的顺序，用函数实现。  

#### 如何用 css 或 js 实现多行文本溢出省略效果，考虑兼容性

#### Http 状态码 301 和 302 的应用场景分别是什么

#### 输出以下代码执行结果
```js
function wait() {
return new Promise(resolve =>
 setTimeout(resolve, 10 * 1000)
)
}

async function main() {
console.time();
const x = wait();
const y = wait();
const z = wait();
await x;
await y;
await z;
console.timeEnd();
}
main();
```

#### 输出以下代码执行结果，大致时间就好（不同于上题）
```js
function wait() {
return new Promise(resolve =>
 setTimeout(resolve, 10 * 1000)
)
}

async function main() {
console.time();
await wait();
await wait();
await wait();
console.timeEnd();
}
main();
```

#### 接口如何防刷

#### 实现一个 Dialog 类，Dialog可以创建 dialog 对话框，对话框支持可拖拽（腾讯）

#### 用 setTimeout 实现 setInterval，阐述实现的效果与 setInterval 的差异

#### 求两个日期中间的有效日期
如 2015-2-8 到 2015-3-3，返回【2015-2-8 2015-2-9...】  

#### 算法题（盛大）
在一个字符串数组中有红、黄、蓝三种颜色的球，且个数不相等、顺序不一致，请为该数组排序。使得排序后数组中球的顺序为:黄、红、蓝。  
例如：红蓝蓝黄红黄蓝红红黄红，排序后为：黄黄黄红红红红红蓝蓝蓝。  

#### 如何实现骨架屏，说说你的思路



#### 用原生JS封装插件的方式有哪些？

#### 用js模拟实现微信抢红包的算法，并说明你的思路

#### 如何实现锁定网页、密码解锁的效果？说说你的方法和步骤是什么？

#### 你知道1和Number(1)的区别是什么吗？

#### 说说CORS为何要区分预检请求和简单请求呢？

#### 实现异步编程有哪些方式？推荐用哪种？

#### 为什么说js是单线程，而不是多线程呢？

#### 使用js实现摩斯密码的加密和解密

#### 请使用原生的js实现斐波那契数列

#### 阻止事件的默认行为有哪些？说说它们之间的区别是什么？

#### 请举例说明动态操作DOM的方法有哪些？

#### 原生Math的方法有哪些？请列举并描述其功能

#### 什么是词法分析？请描述下js词法分析的过程？

#### 自己实现数组的 map、filter、find 方法

#### 请描述下函数的执行过程

#### 写一个洗扑克牌的方法

#### 说用原生js实现封装一个选项卡的功能

#### 说下你对柯里化函数(currying)的理解，它有什么运用场景？

#### 请描述下ajax的请求都有哪些步骤？

#### 用js实现页面局部打印和预览原理是什么呢？同时在IE上有什么不同？

#### 用js实现小写金额转大写的方法

#### 请解释下NaN === NaN的结果

#### 请写出如下代码运行的结果并解释为什么？[代码]
```js
    var type = 'images';
    var size = {width: 800, height: 600};
    var format = ['jpg', 'png'];

    function change(type, size, format){
        type = 'video';
        size = {width: 1024, height: 768};
        format.push('map');
    }

    change(type, size, format);

    console.log(type, size, format);
```
#### 写一个方法，将字符串中的单词倒转后输出，如：my love -> ym evol

#### 原生的字符串操作方法有哪些？请列举并描述其功能

#### JSON.stringify有什么局限性和哪些技巧？

#### 如何实现一个全屏的功能？

#### 举例说明js关闭当前窗口有哪些方法？

#### 说说你对js包装对象的理解

#### JavaScript有几种类型值？能否画出它们的内存图？

#### 保护js代码的方式有哪些？分别说说他们的原理是什么？

#### 你有用过webRTC吗？它有什么运用场景？

#### 如何实现文件拖动上传？

#### 分析('b' + 'a' + +'a' + 'a').toLowerCase()返回的结果

#### 能否正确获取本地上传的文件路径？如果可以怎么做？如果不可以解释下为什么？

#### 请说说escape、encodeURI、decodeURI、encodeURIComponent和decodeURIComponent的区别？

#### 如何终止WebWork？

#### 写一个方法把多维数组降维

#### 使用正则去掉html中标签与标签之间的空格

#### document.write和innerHTML有什么区别？

#### 如何使用js来截图？怎样截可见区域和整个页面？

#### 分别写出防抖和节流的两个函数，并描述它们分别有什么运用场景？

#### 写一个把数字转成中文的方法，例如：101转成一百零一

#### 用js写一个事件侦听器的方法

#### 函数声明与函数表达式有什么区别？

#### 请用js编写一个红绿灯程序

#### 请详细描述AJAX的工作原理

#### 请描述下什么是原型模式？它主要运用在哪些场景？

#### 请描述下js的原型和原型链的理解以及它们之间的关系

#### 写一个方法判断给定的字符串是否同态(isomorphic)

#### 说说你对作用域链的理解

#### 写个方法，找出指定字符串中重复最多的字符及其长度

#### 请说说json和jsonp的区别？

#### 你是如何更好地处理Async/Await的异常呢的？

#### 准确说出'1,2,3,4'.split()的结果是什么（包括类型和值）？

#### 不依赖第三方库，说下如何使用js读取pdf？

#### 分别封装精确运算的加减乘除四个方法

#### 不用第三方库，说说纯js怎么实现读取和导出excel？

#### 说说你理解的同步和异步的区别是什么？

#### 写例子说明如何给li绑定事件（ul下有1000+个li）？

#### 要实现一个js的持续动画，你有什么比较好的方法？

#### 分别写出数组的交集、并集、差集、补集这四个方法

#### 用js写出死循环的方法有哪些？

#### js的函数有哪几种调用形式？

#### 解释下为什么{} + [] === 0为true？

#### 请描述下null和undefined的区别是什么？这两者分别运用在什么场景？

#### 写个方法随机打乱一个数组

#### js异步加载有哪些方案？

#### 判断instanceof的结果并解释原因 [代码]
```js
    function test(){ 
        return test; 
    } 
    new test() instanceof test;
```    
#### 请写一个sleep（暂停）函数

#### 把Script标签放在页面最底部的</body>之前和之后有什么区别？浏览器会如何解析它们？

#### js延迟加载的方式有哪些？

#### 请描述你对浏览器同源策略的理解

#### 举例说明js如何实现继承？

#### 用js实现一个九九乘法口诀表

#### 在js中怎么捕获异常？写出来看看？应该在哪些场景下采用呢？

#### 举例说明什么是decodeURI()和encodeURI()是什么？

#### 举例说明什么是IIFEs？它有什么好处？

#### 举例说明数组和对象的迭代方法分别有哪些？

#### 请快速答出此题的答案并解释：var x, y = 1; x + y = ?

#### 说说instanceof和typeof的实现原理并自己模拟实现一个instanceof

#### js中=、==、===三个的区别是什么？并说明它们各自的工作过程

#### 写一个方法随机生成指定位数的字符串

#### 移动端点击事件为什么会有延迟？有哪些方法可以解决？

#### 写一个字符串重复的repeat函数

#### 说说你对深浅拷贝的理解？并实现一个对数组和对象深拷贝的方法

#### Ajax请求中get和post方式有什么区别呢？分别在哪些场景下使用？

#### 说说你对base64的理解，它的使用场景有哪些？

#### formData主要是用来做什么的？它的操作方法有哪些？

#### 举例子说说你对js隐式类型转换的理解

#### 请解释下什么是cookie隔离？为什么要隔离？如何隔离？

#### 说说你对数据类型转换的理解是什么？类型转换的方法有哪些？

#### 如何让(a==1 && a==2 && a==3)的值为true，把"=="换成"==="后还能为true吗？

#### 举例子说明javascript的变量声明提升和函数声明提升

#### 有用过HTML5的WebWork吗？它主要解决了什么问题？

#### 写一个方法获取图片的原始宽高

#### 请实现一个flattenDeep函数，把多维数组扁平化

#### 写一个格式化金额的方法

#### 请说下你对__proto__和prototype的理解

#### 写一个方法，使得sum(x)(y)和sum(x,y)返回的结果相同

#### JSONP的原理是什么？解决什么问题？

#### 写出4个使用this的典型例子

#### 写一个函数找出给定数组中的最大差值

#### document的load 和ready有什么区别？

#### 什么是事件委托？它有什么好处？能简单的写一个例子吗？

#### 字符串相连有哪些方式？哪种最好？为什么？

#### 请写出一个函数求出N的阶乘（即N!）

#### 写个还剩下多少天过年的倒计时

#### 你对事件循环有了解吗？说说看！

#### 请说说你对事件冒泡机制的理解？

#### 写一个使两个整数进行交换的方法（不能使用临时变量）

#### 写出几种创建对象的方式，并说说他们的区别是什么？

#### 深度克隆对象的方法有哪些，并把你认为最好的写出来

#### JQuery的源码看过吗？能不能简单概括一下它的实现原理？

#### window对象和document对象有什么区别？

#### 说说你对IIFE的理解

#### 为什么会有跨域问题？怎么解决跨域？

#### 说说你对模块化的理解

#### 说说你对eval的理解

#### 找到字符串中最长的单词，并返回它的长度

#### 请手写一个幻灯片的效果

#### 请你解释一个为什么10.toFixed(10)会报错？

#### 请用canvas写一个关于520浪漫表白的代码

#### 说说你对this的理解

#### 造成内存泄漏的操作有哪些？

#### 写一个方法把0和1互转（0置1，1置0）

#### 写一个方法判断字符串是否为回文字符串

#### 写一个获取数组的最大值、最小值的方法

#### 解释下这段代码的意思！

#### 说说你对arguments的理解，它是数组吗？

#### 说说bind、call、apply的区别？并手写实现一个bind的方法

#### 写一个判断设备来源的方法

#### 如何快速让一个数组乱序，写出来

#### 0.1 + 0.2、0.1 + 0.3和0.1 * 0.2分别等于多少？并解释下为什么？

#### 你对new操作符的理解是什么？手动实现一个new方法

#### 写一个方法验证是否为中文

#### 写一个验证身份证号的方法

#### "attribute"和"property"有什么不同？

#### 你理解的"use strict";是什么?使用它有什么优缺点？

#### typeof('abc')和typeof 'abc'都是string, 那么typeof是操作符还是函数？

#### 返回到顶部的方法有哪些？把其中一个方法出来

#### 写一个数组去重的方法（支持多维数组）

#### 什么是闭包？优缺点分别是什么？

#### 说说你对javascript的作用域的理解

#### 写一个获取当前url查询字符串中的参数的方法

#### 简要描述下JS有哪些内置的对象

#### 简要描述下什么是回调函数并写一个例子出来

#### 写一个判断数据类型的方法

#### 写一个加密字符串的方法

#### 统计某一字符或字符串在另一个字符串中出现的次数

#### 写一个去除制表符和换行符的方法

#### 写一个把字符串大小写切换的方法

#### 写一个方法把下划线命名转成大驼峰命名

#### 去除字符串中最后一个指定的字符

#### 写一个方法去掉字符串中的空格

#### 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
