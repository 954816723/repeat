## Promise

## 浅拷贝/深拷贝

## 防抖/节流
```js
// 防抖动函数
function debounce(fn,wait=50,immediate) {
    let timer;
    return function() {
        if(immediate) {
            fn.apply(this,arguments)
        }
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=> {
            fn.apply(this,arguments)
        },wait)
    }
}

function throttle(fn, wait) {
	let prev = new Date();
	return function() { 
	    const args = arguments;
		const now = new Date();
		if (now - prev > wait) {
			fn.apply(this, args);
			prev = new Date();
		}
	}
}

// 通过第三个参数来切换模式
const throttle = function(fn, delay, isDebounce) {
  let timer
  let lastCall = 0
  return function (...args) {
    if (isDebounce) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn(...args)
      }, delay)
    } else {
      const now = new Date().getTime()
      if (now - lastCall < delay) return
      lastCall = now
      fn(...args)
    }
  }
}

```

## 数组去重
```js
[...new Set(arr)]

var arr = [1,2,1,2,3,5,4,5,3,4,4,4,4],
    init=[]
var result = arr.sort().reduce((init, current)=>{
    console.log(init,current)
    if(init.length===0 || init[init.length-1]!==current){
        init.push(current);
    }
    return init;
}, []);
console.log(result);//1,2,3,4,5

```

## new
```js
//方法1
function create(){
   //1.创建一个空对象
   let obj={}
   //2.获取构造函数
   let Con=[].shift.call(arguments)
   //3.设置空对象的原型
   obj._proto_=Con.prototype
   //4.绑定this并执行构造函数，给新对象添加属性和方法
   let result=Con.apply(obj,arguments)
   //5.确保返回值为对象
   return result instanceof Object?result:obj
}
//方法2
//通过分析原生的new方法可以看出，在new一个函数的时候，
// 会返回一个func同时在这个func里面会返回一个对象Object，
// 这个对象包含父类func的属性以及隐藏的__proto__
function New(f) {
    //返回一个func
    return function () {
        var o = {"__proto__": f.prototype};
        f.apply(o, arguments);//继承父类的属性

        return o; //返回一个Object
    }
}

```

## call/apply/bind
```js
// 将函数设为对象的属性
// 执行&删除这个函数
// 指定this到函数并传入给定参数执行函数
// 如果不传入参数，默认指向为 window
Function.prototype.call2 = function(content = window) {
    content.fn = this;
    let args = [...arguments].slice(1);
    let result = content.fn(...args);
    delete content.fn;
    return result;
}
let foo = {
    value: 1
}
function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}
bar.call2(foo, 'black', '18') // black 18 1

Function.prototype.apply2 = function(context = window) {
    context.fn = this
    let result;
    // 判断是否有第二个参数
    if(arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
// bind实现需要考虑实例化后对原型链的影响。
// call实现?
Function.prototype.bind2 = function(content) {
    if(typeof this != "function") {
        throw Error("not a function")
    }
    // 若没问参数类型则从这开始写
    let fn = this;
    let args = [...arguments].slice(1);
    
    let resFn = function() {
        return fn.apply(this instanceof resFn ? this : content,args.concat(...arguments) )
    }
    function tmp() {}
    tmp.prototype = this.prototype;
    resFn.prototype = new tmp();
    
    return resFn;
}

```

## instanceof
```js
function instanceOf(left,right) {

    let proto = left.__proto__;
    let prototype = right.prototype
    while(true) {
        if(proto === null) return false
        if(proto === prototype) return true
        proto = proto.__proto__;
    }
}
```

## JSON.parse()/JSON.stringfy()
```js
function jsonStringify(obj) {
    let type = typeof obj;
    if (type !== "object") {
        if (/string|undefined|function/.test(type)) {
            obj = '"' + obj + '"';
        }
        return String(obj);
    } else {
        let json = []
        let arr = Array.isArray(obj)
        for (let k in obj) {
            let v = obj[k];
            let type = typeof v;
            if (/string|undefined|function/.test(type)) {
                v = '"' + v + '"';
            } else if (type === "object") {
                v = jsonStringify(v);
            }
            json.push((arr ? "" : '"' + k + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
    }
}
jsonStringify({x : 5}) // "{"x":5}"
jsonStringify([1, "false", false]) // "[1,"false",false]"
jsonStringify({b: undefined}) // "{"b":"undefined"}"

function jsonParse(opt) {
    return eval('(' + opt + ')');
}
//Function与eval有相同的字符串参数特性
//eval 与 Function 都有着动态编译js代码的作用，但是在实际的编程中并不推荐使用
var jsonStr = '{ "age": 20, "name": "jack" }'
var json = (new Function('return ' + jsonStr))();
```

## 正则实现千位分隔符
```js
function commafy(num) {
        return num && num
            .toString()
            .replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
                return $1 + ",";
            });
    }
 console.log(commafy(1312567.903000))

```

## 实现一个JS函数柯里化
```js
function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
    return function(){
        newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < length) {
            return curry.call(this,fn,newArgs);
        }else{
            return fn.apply(this,newArgs);
        }
    }
}

function multiFn(a, b, c) {
    return a * b * c;
}

var multi = curry(multiFn);

multi(2)(3)(4);
multi(2,3,4);
multi(2)(3,4);
multi(2,3)(4);

//es6
const curry = (fn, arr = []) => (...args) => (
  arg => arg.length === fn.length
    ? fn(...arg)
    : curry(fn, arg)
)([...arr, ...args])

let curryTest=curry((a,b,c,d)=>a+b+c+d)
curryTest(1,2,3)(4) //返回10
curryTest(1,2)(4)(3) //返回10
curryTest(1,2)(3,4) //返回10
```

## 实现一个继承
```js
// 一般只建议写这种，因为其它方式的继承会在一次实例中调用两次父类的构造函数或有其它缺点。
// 核心实现是：用一个 F 空的构造函数去取代执行了 Parent 这个构造函数。
function Parent(name) {
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
}
function Child(name, parentName) {
    Parent.call(this, parentName);  
    this.name = name;    
}
function create(proto) {
    function F(){}
    F.prototype = proto;
    return new F();
}
Child.prototype = create(Parent.prototype);
Child.prototype.sayName = function() {
    console.log('child name:', this.name);
}
Child.prototype.constructor = Child;

var parent = new Parent('father');
parent.sayName();    // parent name: father

var child = new Child('son', 'father');
```

## 封装fetch
```js
async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;

	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}

	if (window.fetch && method == 'fetch') {
		let requestConfig = {
			credentials: 'include',
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			mode: "cors",
			cache: "force-cache"
		}

		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}
		
		try {
			const response = await fetch(url, requestConfig);
			const responseJson = await response.json();
			return responseJson
		} catch (error) {
			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}
```

## 封装jsonp
```js
function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    window[callback] = function(data) {
      resolve(data)
      document.body.removeChild(script)
    }
    params = { ...params, callback } // wd=b&callback=show
    let arrs = []
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arrs.join('&')}`
    document.body.appendChild(script)
  })
}
jsonp({
  url: 'http://localhost:3000/say',
  params: { wd: 'Iloveyou' },
  callback: 'show'
}).then(data => {
  console.log(data)
})
```

## 封装Ajax
```js
/* 封装ajax函数
 * @param {string}opt.type http连接的方式，包括POST和GET两种方式
 * @param {string}opt.url 发送请求的url
 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 * @param {object}opt.data 发送的参数，格式为对象类型
 * @param {function}opt.success ajax发送并接收成功调用的回调函数
 */
function myAjax(opt){
     opt = opt || {};
     opt.method = opt.method.toUpperCase() || 'POST';
     opt.url = opt.url || '';
     opt.async = opt.async || true;
     opt.data = opt.data || null;
     opt.success = opt.success || function () {}
     let xmlHttp = null;
     if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
     }else{
         xmlHttp =new ActiveXObject('Microsoft.XMLHTTP')
     }
     let params;
    for (var key in opt.data){
        params.push(key + '=' + opt.data[key]);
    }
    let postData = params.join('&');
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        xmlHttp.send(postData);
    }else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
        xmlHttp.send(null);
    } 
     xmlHttp.onreadystatechange= function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                opt.success(xmlHttp.responseText);//如果是json数据可以在这使用opt.success(JSON.parse( xmlHttp.responseText))
            }
     };
}
```

## url拿参数
```js
var url = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2";
function parseQueryString(url){
    var str = url.split("?")[1],    //通过?得到一个数组,取?后面的参数
        items = str.split("&");    //分割成数组
    var arr,name,value;

    for(var i=0; i<items.length; i++){
        arr = items[i].split("=");    //["key0", "0"]
        name = arr[0];
        value = arr[1];
        this[name] = value;
    }
}

var obj = new parseQueryString(url);
alert(obj.key2)
```

## 懒加载
```js
//不使用代理模式实现图片懒加载
let myImage = (function(){
    let node = document.createElement('img');
    document.body.appendChild(node);
    let img = new Image();
    img.onload = function(){
        node.src = this.src;
    }
    return {
        setSrc:function(src){
            node.src = 'http://小图.gif';
            img.src = src;
        }
    }
})()
myImage.setSrc('http://大图.jpg');

//使用代理模式实现图片懒加载
let imgFunc = (function(){
    let node = document.createElement('img');
    document.appendChild(node);
    return {
        setSrc:function(src){
            node.src = src;
        }
    }
})()
let proxyImg = (function(){
    let img = new Image();
    img.onload = function(){
        imgFunc.setSrc(this.src)
    }
    return {
        setSrc:function(src){
            imgFunc.setSrc('http://小图.gif');
            img.src = src;
        }
    }
})()
proxyImg.setSrc('http://大图.png');
```

## 发布订阅(on/emit/off)
```js
let Event = (function(){
    let clientList = {},
        listen,
        trigger,
        remove;
    listen = function(key,fn){
        if(!clientList[key]){
            clientList[key] = [];
        }
        clientList[key].push(fn);
    }
    trigger = function(){
        let key = Array.prototype.shift.call(arguments);
        let fns = clientList[key];
        if(!fns || fns.length ===0) return false;
        for(let i = 0;i<fns.length;i++){
            fns[i].apply(this,arguments)
        }
    }
    remove = function(key,fn){
        let fns = clientList[key];
        if(!fns) return false;
        if(!fn){
            fns && (fns.length = 0);
        }else{
            for(let i = 0;i<fns.length;i++){
                let cur = fns[i];
                if(cur === fn){
                    fns.splice(i,1)
                }
            }
        }
    }
    return {
        listen,
        trigger,
        remove
    }
})();
Event.listen('hehe',function(data){
    console.log(data)
});
Event.trigger('hehe','xixi');
```

## 数组扁平化
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
    return [].concat(...arr.map(x=>{
        Array.isArray(x) ? flatten(x) : x;
    }))
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

## Object.assign
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

## 实现sleep

## ES6的Set内部实现

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
## 手动实现parseInt

## reduce实现map

## vue双向数据绑定

## 手写 Proxy / Object.defineProperty

## es5 实现 class



