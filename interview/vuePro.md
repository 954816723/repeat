## vue
#### 从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织

#### 你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解
`mustache`胡子语法  
- 可维护性（后期改起来方便）  
- 可扩展性（想要增加功能，增加需求方便）  
- 开发效率提高（程序逻辑组织更好，调试方便）  

#### 你知道v-model的原理吗？说说看
`v-model`是一个语法糖  
监听input事件和绑定属性值  

#### 你有使用过vue开发多语言项目吗？说说你的做法？
i18n  

#### 在使用计算属性的时，函数名和data数据源中的数据可以同名吗？
不能同名,因为不管是计算属性还是data还是props 都会被挂载在vm实例上，因此 这三个都不能同名  

#### vue中data的属性可以和methods中的方法同名吗？为什么？
data中的属性和methods方法重名会优先执行data中的属性并且报错  

#### 怎么给vue定义全局的方法？
- 通过`Vue.prototype[method] = xxx`  
- 通过插件`Vue.use(plugin)`  
- 通过mixin`Vue.mixin()`  

#### vue2.0不再支持v-html中使用过滤器了怎么办？
使用`Vue.filter`

#### 怎么解决vue打包后静态资源图片失效的问题？
找到config/index.js 配置文件，找build打包对象里的assetsPublicPath属性,默认值为/，更改为./就好了  
最新的vue-cli 需要在根目录下建一个vue.config.js 在里面配置publicPath即可  

#### 怎么解决vue动态设置img的src不生效的问题？
`require('@/assets/images/xxx.png')`  

#### 使用vue后怎么针对搜索引擎做SEO优化？
- ssr,即单页面后台渲染  
- vue-meta-info 与prerender-spa-plugin 预渲染  
- nuxt  

#### 跟keep-alive有关的生命周期是哪些？描述下这些生命周期
keep-alive的生命周期  
1. activated： 页面第一次进入的时候，钩子触发的顺序是created->mounted->activated  
2. deactivated: 页面退出的时候会触发deactivated，当再次前进或者后退的时候只触发activated  

#### 你知道vue2.0兼容IE哪个版本以上吗？
不兼容ie8及以下  
是因为vue的响应式原理是基于es5的Object.defineProperty的,而这个方法不支持ie8及以下  

#### 使用vue开发一个todo小应用，谈下你的思路

#### 你有看过vue推荐的风格指南吗？列举出你知道的几条
- 组件名为多个单词  
- 组件数据：组件的 data 必须是一个函数  
- 细致的 Prop 定义  
- 总是用 :key 配合 v-for  
- 避免 v-if 和 v-for 用在一起  
- 为组件样式设置作用域  
- 私有属性名：自定义私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)  

#### 你是从vue哪个版本开始用的？你知道1.x和2.x有什么区别吗？

#### 你知道vue中key的原理吗？说说你对它的理解
便于diff算法的更新，key的唯一性，能让算法更快的找到需要更新的dom，需要注意的是，key要唯一，不然会出现很隐蔽性的更新问题  

#### vue中怎么重置data？
`Object.assign(this.$data, this.$options.data())`  
使用Object.assign()，vm.$data可以获取当前状态下的data，vm.$options.data可以获取到组件初始化状态下的data  

#### vue渲染模板时怎么保留模板中的HTML注释呢？
```js
<template comments>
...
<template>
```

#### Vue.observable你有了解过吗？说说看
vue2.6发布一个新的API，可以处理一些简单的跨组件共享数据状态的问题  
```js
//store.js
import Vue from 'vue';
 
export let store =Vue.observable({count:0,name:'李四'});
export let mutations={
  setCount(count){
    store.count=count;
  },
  changeName(name){
    store.name=name;
  }
}
//Home.vue
import {store,mutations} from '@/store'
export default { 
    data () { 
    return { 
        name1:'主页的name'
    } 
    }, 
    components: { 
    HomeHeader 
    }, 
    computed:{
    count(){
        return store.count
    },
    name(){
        return store.name
    }
    },
    methods:{
        setCount:mutations.setCount,
        changeName:mutations.changeName  
    }
} 
```

#### 你知道style加scoped属性的用途和原理吗？
在标签上绑定了自定义属性(data-v-x形式)，防止css全局污染  
可以使用/deep/或者>>>穿透CSS  

#### 你期待vue3.0有什么功能或者改进的地方？

#### vue边界情况有哪些？
- 访问根实例  
- 问父级组件实例  
- 访问子组件实例或子元素  
- 依赖注入  
- 递归组件  
- 组件之间的循环引用  
- 强制更新  
- 通过 v-once 创建低开销的静态组件  

#### 如何在子组件中访问父组件的实例？
- this.$parent拿到父组件实例  
- this.$children拿到子组件实例（数组）  

#### watch的属性用箭头函数定义结果会怎么样？
因为箭头函数默绑定父级作用域的上下文，所以不会绑定vue实例，所以 this 是undefind  

#### 在vue项目中如果methods的方法用箭头函数定义结果会怎么样？
因为箭头函数默绑定父级作用域的上下文，所以不会绑定vue实例，所以 this 是undefind  

#### 在vue项目中如何配置favicon？
- 人工在index.html中引入  
- 在Vue-cli3可以修改vue.config.js的baseurl设定  

#### 你有使用过babel-polyfill模块吗？主要是用来做什么的？
ES6的转码。IE的兼容  
babel默认只转换语法,而不转换新的API,如需使用新的API,还需要使用对应的转换插件或者polyfill去模拟这些新特性。  

#### 说说你对vue的错误处理的了解？
分为errorCaptured与errorHandler  
- `errorCaptured`是组件内部钩子，可捕捉本组件与子孙组件抛出的错误，接收error、vm、info三个参数，return false后可以阻止错误继续向上抛出  
- `errorHandler`为全局钩子，使用Vue.config.errorHandler配置，接收参数与errorCaptured一致，2.6后可捕捉v-on与promise链的错误，可用于统一错误处理与错误兜底  

#### 在vue事件中传入$event，使用e.target和e.currentTarget有什么区别？
event.currentTarget指向事件所绑定的元素，而event.target始终指向事件发生时的元素。  

#### 在.vue文件中style是必须的吗？那script是必须的吗？为什么？
template是必须的，而script与style都不是必须的  

#### vue怎么实现强制刷新组件？
- 使用this.$forceUpdate强制重新渲染  
- 使用v-if指令  

#### vue自定义事件中父组件怎么接收子组件的多个参数？
子组件传递多个参数，父组件用展开运算符获取  

#### 实际工作中，你总结的vue最佳实践有哪些？

#### vue给组件绑定自定义事件无效怎么解决？
1. 组件外部加修饰符.navtive  
2. 组件内部声明$emit('自定义事件')  

#### vue的属性名称与method的方法名称一样时会发生什么问题？
报错 `"Method 'xxx' has already been defined as a data property"`  
键名优先级：props > data > methods  

#### vue变量名如果以_、$开头的属性会发生什么问题？怎么访问到它们的值？
以 _ 或 $ 开头的属性不会被 Vue 实例代理，因为可能和 Vue 内置的属性、API 方法冲突。可以使用例如 `vm.$data._property`  

#### vue使用v-for遍历对象时，是按什么顺序遍历的？如何保证顺序？
1. 会先判断是否有iterator接口，如果有循环执行next()方法  
2. 没有iterator的情况下，会调用Object.keys()方法，在不同浏览器中，JS引擎不能保证输出顺序一致  
3. 保证对象的输出顺序可以把对象放在数组中，作为数组的元素  

#### vue如果想扩展某个现有的组件时，怎么做呢？
- 使用Vue.extend直接扩展  
- 使用Vue.mixin全局混入  
- HOC封装  
- 加slot扩展  

#### 说下$attrs和$listeners的使用场景
一般我对一些UI库进行二次封装用，比如element-ui，里面的组件不能满足自己的使用场景的时候，会二次封装，但是又想保留他自己的属性和方法，那么这个时候时候$attrs和$listners是个完美的解决方案。
简单的例子，对el-button二次封装  
```html
<el-button v-on="$listeners" v-bind="$attrs" :loading="loading" @click="myClick">

<script> 
export default { 
    name: 'mButton', 
    inheritAttrs: false, 
    props: { 
        debounce: { 
            type: [Boolean, Number] 
        } 
    }, 
    data() { 
        return { 
            timer: 0, 
            loading: false 
        } 
    }, 
    methods: { 
        myClick() { 
            if (!this.debounce) return this.loading = true 
            clearTimeout(this.timer) 
            this.timer = setTimeout(() => { 
                this.loading = false 
            }, typeof this.debounce === 'boolean' ? 500 : this.debounce )
        } 
    } 
} 
</script>
```

#### 分析下vue项目本地开发完成后部署到服务器后报404是什么原因呢？
- 使用了history模式，而后端又没有进行相关资源配置  
- 检查nginx配置，是否正确设置了资源映射条件  
- 检查vue.config.js中是否配置了publicPath，若有则检查是否和项目资源文件在服务器摆放位置一致  

#### v-once的使用场景有哪些？
单次触发的场景,创建低开销的静态组件  

#### 说说你对vue的表单修饰符.lazy的理解
v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步  

#### vue为什么要求组件模板只能有一个根元素？
为了让组件能够正常的生成一个vue实例,需要指定这个vue实例的根入口  
通过这个‘根节点’，来递归遍历整个vue‘树’下的所有节点，并处理为vdom，最后再渲染成真正的HTML，插入在正确的位置  

#### EventBus注册在全局上时，路由切换时会重复触发事件，如何解决呢？
当页面跳转时，原来的vue组件被注销，但是原来vue组件向Bus容器中添加的事件监听器并不会被移除  
当下次进入这个vue组件对应的页面时,执行到$on时，又会向Bus容器中添加一个重复的事件监听器  
在vue组件的beforeDetory钩子函数中将本vue组件往Bus容器中添加的时间监听器全部手动移除  
PS: vue-router组件切换过程  
新組件： beforeCreate
新組件： created
新組件： beforeMount
旧組件： beforeDestroy
旧組件： destroy
新組件： mounted


#### 怎么修改vue打包后生成文件路径？
webpack：output.path  
vue-cli3: outputDir  

#### 你有使用做过vue与原生app交互吗？说说vue与ap交互的方法
用`WebViewJavascriptBridge`建立连接，然后相互调用  
```js
export const connectWebViewJavascriptBridge = callback => { 
    if (window.WebViewJavascriptBridge) { 
        callback(WebViewJavascriptBridge) 
    } else { 
        document.addEventListener( 'WebViewJavascriptBridgeReady', function() { 
            callback(WebViewJavascriptBridge) }, false ) 
    }}
```

#### 使用vue写一个tab切换
```html
<template>
    <div>
        <ul>
            <li 
                v-for="(item,index) in tabList"
                @click="changeTab(index)"
                class="tab"
                :class="index===nowIndex ? active : '' ">
                {{item}}
            </li>
        </ul>
        <div v-show="nowIndex === 0"></div>
        <div v-show="nowIndex === 1"></div>
        <div v-show="nowIndex === 2"></div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                nowIndex:0,
                tabList:['tab1','tab2','tab3']
            }
        },
        methods:{
            changeTab(index){
                this.nowIndex = index
            }
        }
    }
</script>
<style>
</style>
```

#### vue中什么是递归组件？举个例子说明下？
用过组件的name属性，调用自身。例如生成树型菜单  

#### 怎么访问到子组件的实例或者子元素？
用过组件的name属性，调用自身。例如生成树型菜单  

#### 在子组件中怎么访问到父组件的实例？
this.$parent  

#### 在组件中怎么访问到根实例？
this.$root  

#### 说说你对Object.defineProperty的理解
Object.defineProperty定义新属性或修改原有的属性  
vue的数据双向绑定的原理就是用的Object.defineProperty这个方法，里面定义了setter和getter方法，通过观察者模式（发布订阅模式）来监听数据的变化，从而做相应的逻辑处理  

#### vue组件里写的原生addEventListeners监听事件，要手动去销毁吗？为什么？
vue生命周期destroyed会在Vue实例销毁后调用,调用后,Vue实例指示的所有东西都会被解绑定,所有的事件监听器都会被移除,所有的子实例也会被销毁  
挂载在实例上的事件都会被销毁  
但有的事件绑定在文档或者其他与实例不相关的节点上是必须要取消监听的,因为该事件与实例无关,因此不会自动销毁  

#### vue组件里的定时器要怎么销毁？
在生命周期的beforeDestroy或者destroyed进行手动销毁  
```js
const timer = setInterval(() =>{
// 某些定时器操作
}, 500);
// 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
this.$once('hook:beforeDestroy', () => {
    clearInterval(timer);
})
```

#### vue组件会在什么时候下被销毁？
没有使用keep-alive时的路由切换  

#### 使用vue渲染大量数据时应该怎么优化？说下你的思路！
- `Object.freeze`  `this.item = Object.freeze(Object.assign({}, this.item))`  
    取消数据的响应式变化,减少`observer`的开销,减少不少内存开销  
- `clusterize.js`
    `https://github.com/NeXTs/Clusterize.js`
    大概就是保持 一个ul里面只有40个li。通过CSS transition 进行定位  
    当向下滚动的时候 不断把滚动到屏幕上方，已经看不到的节点 修改内容 & 样式 移到最下方，作为新节点展示出来  
    向上滚动的时候就不断把滚动到屏幕下方，已经看不到的节点 修改内容 & 样式 移到最上方，作为新节点展示出来  

#### 在vue中使用this应该注意哪些问题？
vue中使用匿名函数，会出现this指针改变  
解决方法  
1. 使用箭头函数  
2. 定义变量绑定this至vue对象  

#### 你有使用过JSX吗？说说你对JSX的理解
jsx不是一门新的语言，是一种新的语法糖。让我们在js中可以编写像html一样的代码  
允许XML语法直接加入到JavaScript代码中，让你能够高效的通过代码而不是模板来定义界面  

#### 说说组件的命名规范
单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)  
和父组件紧密耦合的子组件应该以父组件名作为前缀命名  
对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的  
组件名应该倾向于完整单词而不是缩写  

#### 怎么配置使vue2.0+支持TypeScript写法？
配置ts-loader，tsconfig  
增加类型扩展，让ts识别vue文件  
vue文件中script里面换成ts写法， 需要增加几个ts扩展的package， 比如vue-property-decorator  

#### <template></template>有什么用？
template标签，HTML5提供的新标签，更加规范和语义化  
template标签内容天生不可见，设置了display：none  
标签里的任何HTML内容都是无效的，不会起任何作用  
标签可以写在页面的任何地方，甚至是head、body、sciprt标签内  
主要用于分组的条件判断和列表渲染  

#### vue的is这个特性你有用过吗？主要用在哪些方面？
用于动态组件且基于 DOM 内模板的限制来工作  
`<component v-bind:is="currentView"></component>`  
有些 HTML 元素，诸如 `<ul>、<ol>、<table> 和 <select>`，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 `<li>、<tr> 和 <option>`，只能出现在其它某些特定的元素内部  

#### vue的:class和:style有几种表示方式？
:class 绑定变量 绑定对象 绑定一个数组 绑定三元表达式  
:style 绑定变量 绑定对象 绑定函数返回值 绑定三元表达式  

#### 你了解什么是函数式组件吗？
函数式组件：  
> 需要提供一个render方法， 接受一个参数（createElement函数）， 方法内根据业务逻辑，通过createElement创建vnodes，最后return vnodes  

createElement函数， 三个参数， 第一个参数是html标签或自定义组件，第二个参数一个obj（包含props， on...等等）， 第三个参数children(通过createElement构建， 或者字符串)  

#### vue怎么改变插入模板的分隔符？
`delimiters`  
```js
new Vue({
  delimiters: ['${', '}']
})
```

#### 组件中写name选项有什么作用？
项目使用keep-alive时，可搭配组件name进行缓存过滤  
DOM做递归组件时需要调用自身name  
vue-devtools调试工具里显示的组见名称是由vue中组件name决定的  

#### 说说你对provide和inject的理解
这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖,所有子组件中都可以通过inject获取使用该参数,不论组件层次有多深，并在起上下游关系成立的时间里始终生效  

#### 开发过程中有使用过devtools吗？
看组件，参数，传值等，尤其是用的vuex的时候  

#### 说说你对slot的理解有多少？slot使用场景有哪些？
slot, 插槽, 在使用组件的时候, 在组建内部插入东西  
组件封装的时候最常使用到  
```html
<!-- myslot.vue -->
<div>
    <slot name="header"></slot>
</div>
<!-- index.vue -->
<myslot>
    <template>
        <h1 v-slot="header"></h1>
    </template>
</mysolt>
```

#### 你有使用过动态组件吗？说说你对它的理解
渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染  
`<component :is="componentId"></component>`

#### prop验证的type类型有哪几种？
Number, String, Boolean, Array, Function, Object, Promise(// or any other constructor)  

#### prop是怎么做验证的？可以设置默认值吗？
`validator`   
```js
props:{
    validator:function(value){
        return ['success','failed'].indexOf(value) !== -1
    }
}
```
prop会在组将创建前验证,所以实例的属性(如`data`,`computed`)等在`default`,`validator`中不可用  
可以通过`default`设置默认值  

#### 怎么缓存当前打开的路由组件，缓存后想更新当前组件怎么办呢？
将需要被缓存在路由组件包裹`<keep-alive></keep-alive>`  
可以在路由meta中加入参数, 对打开的路由进行keep-alive的判断, 通过钩子active等  

#### 说说你对vue组件的设计原则的理解
第一: 容错处理, 这个要做好, 极端场景要考虑到, 不能我传错了一个参数你就原地爆炸  
第二: 缺省值(默认值)要有, 一般把应用较多的设为缺省值  
第三: 颗粒化, 把组件拆分出来  
第四: 一切皆可配置, 如有必要, 组件里面使用中文标点符号, 还是英文的标点符号, 都要考虑到  
第五: 场景化, 如一个dialog弹出, 还需要根据不同的状态封装成success, waring, 等  
第六: 有详细的文档/注释和变更历史, 能查到来龙去脉, 新版本加了什么功能是因为什么  
第七: 组件名称, 参数prop, emit, 名称设计要通俗易懂, 最好能做到代码即注释这种程度  
第八: 可拓展性, 前期可能不需要这个功能, 但是后期可能会用上, 要预留什么, 要注意什么, 心里要有逼数  
第九: 规范化,我这个input组件, 叫on-change, 我另外一个select组件叫change, 信不信老子捶死你  
第十: 分阶段: 不是什么都要一期开发完成看具体业务, 如果一个select, 我只是个简单的select功能, 什么multi老子这个版本压根不需要, 别TM瞎折腾! 给自己加戏  

#### 你了解vue的diff算法吗？
`https://www.cnblogs.com/wind-lanyan/p/9061684.html`

#### vue如何优化首页的加载速度？
异步路由和异步加载  
还有分屏加载, 按需加载, 延时加载图片等, cdn, 域名拆分  

#### vue打包成最终的文件有哪些？
vendor.js, app.js, app.css,  
1.xxx.js  
2.xxx.js  

如果有设置到单独提取css的话  
还有  
1.xxx.css  
......  

#### ajax、fetch、axios这三都有什么区别？
1. ajax是最早出现发送后端请求的技术，属于原生js范畴,核心是使用XMLHttpRequest对象,使用较多并有先后顺序的话，容易产生回调地狱  
2. fetch是基于es6中的Promise对象设计的，参数和jQuery中的ajax类似，它并不是对ajax进一步封装，它属于原生js范畴。没有使用XMLHttpRequest对象  
3. axios不是原生js,使用时需要对其进行安装，客户端和服务器端都可以使用，可以在请求和相应阶段进行拦截，基于promise对象  

#### vue能监听到数组变化的方法有哪些？为什么这些方法能监听到呢？
`push()`  
`pop()`  
`shift()`  
`unshift()`  
`splice()`  
`sort()`  
`reverse()`  
Vue框架内将上面的方法进行了重写,新的方法里增加了监听  

#### vue中是如何使用event对象的？
`@click=“func”` 默认第一个参数传入`event`对象  
`@click="func(0, $event)"` 如果自己需要传入参数和`event`对象，则需要使用$event来获取`event`对象并传入`func`  

#### vue首页白屏是什么问题引起的？如何解决呢？
找到config/index.js 配置文件，找build打包对象里的assetsPublicPath属性,默认值为/，更改为./就好了  
最新的vue-cli 需要在根目录下建一个vue.config.js 在里面配置publicPath即可  

项目中使用了es6的语法，一些浏览器不支持es6，造成编译错误不能解析而造成白屏  

#### 说说你对单向数据流和双向数据流的理解
单向数据流：所有状态的改变可记录、可跟踪，源头易追溯；所有数据只有一份，组件数据只有唯一的入口和出口，使得程序更直观更容易理解，有利于应用的可维护性  
双向数据流：无论数据改变，或是用户操作，都能带来互相的变动，自动更新,十分方便,但会导致数据问题的源头难以被跟踪到  

#### 移动端ui你用的是哪个ui库？有遇到过什么问题吗？
vant  mint  

#### 你知道nextTick的原理吗？
`https://juejin.im/post/5ae3f0956fb9a07ac90cf43e`  

#### 说说你对v-clock和v-pre指令的理解
这个指令保持在元素上在标签中加入一个`v-cloak`自定义属性直到关联实例结束编译。和 CSS 规则如 `[v-cloak] { display: none }` 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕  
```css
[v-cloak] {
  display: none;
}
```

`v-pre`可以用来阻止预编译，有`v-pre`指令的标签内部的内容不会被编译，会原样输出  
如果已知页面内部有大段内容无需编译，使用v-pre指令阻止编译可以提高性能，同时可以防止页面内有可能导致Vue编译出错的代码存在  

#### 写出你知道的表单修饰符和事件修饰符
事件修饰符.stop .prevent .capture .self .once .passive  
表单修饰符.number .lazy .trim  

#### 说说你对proxy的理解
vue的数据劫持有两个缺点:  
1. 无法监听通过索引修改数组的值的变化  
2. 无法监听object也就是对象的值的变化  
所以vue2.x中才会有$set属性的存在  

proxy是es6中推出的新api，可以弥补以上两个缺点，所以vue3.x版本用proxy替换object.defineproperty  

#### 你有自己用vue写过UI组件库吗？

#### 用vue怎么实现一个换肤的功能？

#### 有在vue中使用过echarts吗？踩过哪些坑？如何解决的？
注意dom的渲染时机 和chart的实例化时机 在相应的生命周期方法中做操作。结合强制刷新 应该就能解决大部分问题  

#### vue性能的优化的方法有哪些？
1. 项目中小图片图片转base64，通过工具如webpack进行图片压缩，文件进行压缩混淆等  
2. vue-router 懒加载，异步路由  
3. 第三方依赖按需加载，比如使用element-ui框架，但是里面的组件只用到了其中一部分，可以单独建一个引入element组件的文件，在里面引入我们项目中需要的组件，然后vue.use它  
4. 通过webpack进行处理，有一个externals属性，可以在里面设置不需要打包的文件，比如可以设置将vue、vue-router、element-ui等等设置进去，打包的时候就不会打包他们，然后将vue、vue-router、element-ui等资源在html中引入  
5. 可以借助开启gzip压缩文件，减小文件大小  
6. 生产环境build时不生成map文件  
7. 图片懒加载  
8. v-if与v-show根据具体业务场景适当选取  
9. 善用kee-alive  
10. 通用方法封装为模块，减少代码冗余  
11. 细分vuejs组件  
12. 可以通过一些加载loading动画，以及资源加载完成前，可以通过占位符占位的方式，避免渲染时出现空白页，视觉上提升加载速度  

#### SSR解决了什么问题？有做过SSR吗？你是怎么做的？
SEO 优化首屏加载速度  

#### 说说你觉得认为的vue开发规范有哪些？
合理的命名规范  
语义化的变量命名  
详细的注释  
统一的编码规范  

#### vue部署上线前需要做哪些准备工作？
router 是不是hash 是否需要配置nginx , publicPath , 是不是要配置cdn  

#### vue过渡动画实现的方式有哪些？
1. 使用vue的transition标签结合css样式完成动画  
2. 利用animate.css结合transition实现动画  
3. 利用 vue中的钩子函数实现动画  

#### vue在created和mounted这两个生命周期中请求数据有什么区别呢？
在created的时候，视图中的html并没有渲染出来，所以此时如果直接去操作html的dom节点，一定找不到相关的元素  
而在mounted中，由于此时html已经渲染出来了，所以可以直接操作dom节点  

#### vue父子组件双向绑定的方法有哪些？
1. 利用对象的引用关系来实现  
2. 父子组件之间的数据传递  
3. 使用.sync修饰符  
4. v-model  
`https://blog.csdn.net/w390058785/article/details/81076569`

#### vue怎么获取DOM节点？
`this.$ref.xxx`  

#### vue项目有做过单元测试吗？

#### vue项目有使用过npm run build --report吗？
会根据构建统计生成报告，它会帮助分析包中包含的模块们的大小  
给 process.env 对象添加了一个属性 npm_config_report: "true",调用webpack-bundle-analyzer插件  

#### 如何解决vue打包vendor过大的问题？
1. 新增externals配置，表示不需要打包的文件，然后在index.html中通过CDN引入  
```js
externals: {
    "vue": "Vue",
    "vue-router": "VueRouter",
    "vuex": "Vuex",
    "element-ui": "ELEMENT",
    "BMap": "BMap"
}
```
2. 使用路由懒加载  

#### webpack打包vue速度太慢怎么办？

#### vue在开发过程中要同时跟N个不同的后端人员联调接口（请求的url不一样）时你该怎么办？
devServer中把所有的服务人员的地址代理都写进去  
然后动态更改接口的baseUrl，这样切换不同后端人员的时候不用重启   

#### vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？
通过指令  

#### 说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？

#### 在移动端使用vue，你觉得最佳实践有哪些？
vant mint  

#### 你们项目为什么会选vue而不选择其它的框架呢？
快  

#### 对于即将到来的vue3.0特性你有什么了解的吗？
使用Proxy代替Object.defineProperty  

#### vue开发过程中你有使用什么辅助工具吗？
vue-devtools  

#### vue和微信小程序写法上有什么区别？
生命周期  数据绑定  显示隐藏元素  事件绑定  取值  

#### 怎么缓存当前的组件？缓存后怎么更新？
keep-alive  
通过actived钩子  

#### 你了解什么是高阶组件吗？可否举个例子说明下？
所谓高阶组件其实就是一个高阶函数, 即返回一个组件函数的函数  
1. 高阶组件(HOC)应该是无副作用的纯函数，且不应该修改原组件,即原组件不能有变动  
2. 高阶组件(HOC)不关心你传递的数据(props)是什么，并且新生成组件不关心数据来源  
3. 高阶组件(HOC)接收到的 props 应该透传给被包装组件即直接将原组件prop传给包装组件  
4. 高阶组件完全可以添加、删除、修改 props  
`https://blog.csdn.net/z609373067/article/details/81258966`

#### 为什么我们写组件的时候可以写在.vue里呢？可以是别的文件名后缀吗？
可以,配置相应的loader  

#### vue-loader是什么？它有什么作用？
解析和转换 .vue 文件，提取出其中的逻辑代码 script、样式代码 style、以及 HTML 模版 template，再分别把它们交给对应的 Loader 去处理  

#### 说说你对vue的extend（构造器）的理解，它主要是用来做什么的？
构建一个组件和vue.components注册组件一起使用  

#### 如何将axios异步请求同步化处理？
async await  

#### 怎么捕获组件vue的错误信息？
errorCaptured  

#### 为什么vue使用异步更新组件？
批量更新 收集当前的改动一次性更新 节省diff开销吧  

#### 如何实现一个虚拟DOM？说说你的思路
虚拟Dom在vue底层实现中是一个类，每次_render的时候都会实例化Vnode为一个虚拟dom对象。也就是说本质上是用一个js对象来描述dom节点  

#### 写出多种定义组件模板的方法
1. 字符串  
2. 模板字面量  
3. x-template  
4. 内联模板  
5. render 函数  
6. JSF  
7. 单文件组件  
`https://blog.csdn.net/alphapersonality/article/details/80248005`  

#### SPA单页面的实现方式有哪些？
1. 监听地址栏中hash变化驱动界面变化  
2. 用pushsate记录浏览器的历史，驱动界面发送变化  
3. 直接在界面用普通事件驱动界面变化  
它们都是遵循同一种原则：div 的显示与隐藏  

#### 说说你对SPA单页面的理解，它的优缺点分别是什么？
是一种只需要将单个页面加载到服务器之中的web应用程序。当浏览器向服务器发出第一个请求时，服务器会返回一个index.html文件，它所需的js，css等会在显示时统一加载，部分页面需要时加载  
优点：  
1. 良好的交互式体验。意思是：用户无需刷新页面，获取数据通过异步ajax获取，页面显示流畅  
2. 良好的前后端分离模式（MVVM），减轻服务端压力。服务器只需要输出数据就可以，不用管逻辑和页面展示，吞吐能力会提高几倍  
3. 共用同一套后端程序代码，不用修改就可用于web界面，手机和平板等客户端设备  
缺点：  
1. 不利于SEO优化  
2. 由于单页应用在一个页面中显示，所以不可以使用浏览器自带的前进后退功能，想要实现页面切换需要自己进行管理  
3. 首屏加载过慢（初次加载耗时多）  

#### 说说你都用vue做过哪些类型的项目？

#### 在vue项目中如何引入第三方库（比如jQuery）？有哪些方法可以做到？
1. 绝对路径直接引入，全局可用  
主入口页面 index.html 中用 script 标签引入：  
`<script src="./static/jquery-1.12.4.js"></script>`  
由于开启了 ESLint 检测，所以会报一个 warning[警告] ：`'$' is not defined` 。需要加 `/* eslint-disable */`  
2. 绝对路径直接引入，配置后，import 引入后再使用  
还是先在主入口页面 index.html 中用 script 标签引入：  
`<script src="./static/jquery-1.12.4.js"></script>`  
然后，在 webpack 中配置一个 externals   
```js
externals: { 'jquery': 'jQuery' }
// 这样，就可以在每一个组件中用 import 来引用这个 jquery 了
import $ from 'jquery'
export default {
    created() {
    console.log($)
    }
}
```
3. webpack中配置 alias，import 引入后再使用  
只需要在 webpack 的配置文件中，在 resolve 中为 jQuery 添加一个 alias[别名]  
```js
resolve: { 
    extensions: ['.js', '.vue', '.json'], 
    alias: { 
        '@': resolve('src'), 
        'jquery': resolve('static/jquery-1.12.4.js') 
    } 
}
```
在任意组件中，通过 import 的方式来使用 jquery 了  
4. webpack 中配置 plugins，无需 import 全局可用  
在第三种的基础上，如果我们增加一个 plugins 的配置，那么，我们在使用的时候，无需 import $ from 'jquery' 也可以  
```js
resolve: { 
    extensions: ['.js', '.vue', '.json'], 
    alias: { 
        '@': resolve('src'), 
        'jquery': resolve('static/jquery-1.12.4.js') 
    } 
}, 
plugins: [ new webpack.ProvidePlugin({ $: 'jquery' }) ]
```
在项目中，就可以直接使用 $ 了  

#### 使用vue手写一个过滤器
```js
// {{600 | money}} //￥600.00
filters:{
  money:val=>{
      return `￥${val}.00`
}
}
```

#### 你有使用过render函数吗？有什么好处？

#### 写出你常用的指令有哪些？
v-model v-if v-else v-show v-for v-bind  

#### 手写一个自定义指令及写出如何调用
```js
vue.directive('custom-module', {
    insetred: function(el,binding,vnode){

    }
});
```

#### 组件进来请求接口时你是放在哪个生命周期？为什么？
一般在created 因为在这个生命周期我们常用到的都已经初始化好了  
如果涉及dom 那就mounted  

#### 你有用过事件总线(EventBus)吗？说说你的理解
组件传值的一种方式（例如兄弟组件）  

#### 说说vue的优缺点分别是什么？

#### DOM渲染在哪个周期中就已经完成了？
mounted生命周期  

#### 第一次加载页面时会触发哪几个钩子？
beforeCreate, created, beforeMount, mounted  

#### vue生命周期总共有几个阶段？
8  

#### vue生命周期的作用是什么？
准确地控制数据流和其对DOM的影响  

#### 如何引入scss？引入后如何使用？
安装scss依赖包：  
`npm install sass-loader --save-dev npm install node-sass --save-dev`  
在build文件夹下修改 webpack.base.conf.js 文件：  
在 module 下的 rules 里添加配置，如下：  
`{ test: /\.scss$/, loaders: ['style', 'css', 'sass'] }`  
应用：  
在vue文件中应用scss时，需要在style样式标签上添加lang="scss"，即<style lang="scss">  

#### 使用vue开发过程你是怎么做接口管理的？
在request.js中对 axios 请求 和 响应进行劫持，统一处理，然后在 api 文件夹中引入 request.js 后再使用 封装后的方法进行请求  

#### 为何官方推荐使用axios而不用vue-resource？
vue-resources不再更新了  
axios就是一个基于ES6的Promise的网络请求库,更加方便强大  

#### 你了解axios的原理吗？有看过它的源码吗？

#### 你有封装过axios吗？主要是封装哪方面的？
封装处理配置（路径、时间、token）、统一管理接口、错误处理、不同形式的请求、消息提示、loading等  

#### 如何中断axios的请求？
可以使用cancel token取消一个请求  
`https://segmentfault.com/a/1190000008470355`  
```js
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.get('/user/12345', {
    cancelToken:source.toke
}).catch(function(thrown){
    if(axiso.isCancel(thrown)){
        console.log('Rquest canceled', thrown.message);
    }else{
        //handle error
    }
});

//取消请求(信息参数设可设置的)
source.cancel("操作被用户取消");
```

#### axios是什么？怎样使用它？怎么解决跨域的问题？
axios 的是一种异步请求，用法和ajax类似，安装npm install axios --save 即可使用  
请求中包括get,post,put, patch ,delete等五种请求方式  
解决跨域可以在请求头中添加Access-Control-Allow-Origin，也可以在index.js文件中更改proxyTable配置等解决跨域问题   

#### 说说你对vue的template编译的理解？
首先，通过compile编译器把template编译成AST语法树（abstract syntax tree 即 源代码的抽象语法结构的树状表现形式），compile是createCompiler的返回值，createCompiler是用以创建编译器的。另外compile还负责合并option  
然后，AST会经过generate（将AST语法树转化成render funtion字符串的过程）得到render函数，render的返回值是VNode，VNode是Vue的虚拟DOM节点，里面有（标签名、子节点、文本等等）  

#### v-on可以绑定多个方法吗？
可以  

#### vue常用的修饰符有哪些？列举并说明
事件修饰符.stop .prevent .capture .self .once .passive  
表单修饰符.number .lazy .trim  

#### 你认为vue的核心是什么？
1. 数据->虚拟dom->dom  
2. 响应式数据  
这两部分大大节省了开发者对数据变动转换到页面显示的操作，可以让开发者聚焦业务，聚焦数据的处理  

#### v-model是什么？有什么用呢？

#### 说说你对vue的mixin的理解，有什么应用场景？
多个实例引用了相同或相似的方法或属性等，可将这些重复的内容抽取出来作为mixins的js，export出去，在需要引用的vue文件通过mixins属性注入，与当前实例的其他内容进行merge  

#### SPA首屏加载速度慢的怎么解决？
1. 通过Gzip压缩  
2. 使用路由懒加载  
3. 利用webpack中的externals这个属性把打包后不需要打包的库文件都分离出去，减小项目打包后的大小  
4. 使用SSR渲染  

#### 删除数组用delete和Vue.delete有什么区别？
delete：只是被删除数组成员变为 empty / undefined，其他元素键值不变  
Vue.delete：直接删了数组成员，并改变了数组的键值,触发vue的响应式更新  

#### 动态给vue的data添加一个新的属性时会发生什么？怎样解决？
直接添加属性会因为新的属性没有监听导致页面不能响应该数据的变化。通过vue.$set方法来动态添加响应式属性  

#### 组件和插件有什么区别？

#### 说说你使用vue过程中遇到的问题（坑）有哪些，你是怎么解决的？

#### 说说你对选项el,template,render的理解
el: 把当前实例挂载在元素上  
template: 实例模版, 可以是.vue中的template, 也可以是template选项, 最终会编译成render函数  
render: 不需要通过编译的可执行函数  

template和render, 开发时各有优缺点, 不过在线上尽量不要有template  

#### vue实例挂载的过程是什么？
render, 没有则去编译  
编译vdom  
对实例进行watch  

#### vue在组件中引入插件的方法有哪些？

#### v-if和v-for的优先级是什么？如果这两个同时出现时，那应该怎么优化才能得到更好的性能？
v-for 的优先级更高  
避免出现这种情况，如果实在需要，则在外嵌套template，在这一层进行v-if判断，然后在内部进行v-for循环  

#### 分别说说vue能监听到数组或对象变化的场景，还有哪些场景是监听不到的？无法监听时有什么解决方案？

#### $nextTick有什么作用？
在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM  

#### 为什么data属性必须声明为返回一个初始数据对应的函数呢？
对象为引用类型，当重用组件时，由于数据对象都指向同一个data对象，当在一个组件中修改data时，其他重用的组件中的data会同时被修改；而使用返回对象的函数，由于每次返回的都是一个新对象（Object的实例），引用地址不同，则不会出现这个问题  

#### 怎么在watch监听开始之后立即被调用？
参数immediate  

#### watch怎么深度监听对象变化？
deep:true  

#### watch和计算属性有什么区别？
计算属性是依赖的值改变会重新执行函数，计算属性是取返回值作为最新结果，所以里面不能异步的返回结果。不能写异步逻辑  

侦听属性是侦听的值改变会重新执行函数，将一个值重新赋值作为最新结果，所以赋值的时候可以进行一些异步操作  

#### vue如何监听键盘事件？
@keyup.按键别名  

#### v-for循环中key有什么作用？
性能优化,diff时更快更准确找到变化的位置  

#### 怎么在vue中使用插件？
npm 安装 然后再main.js 引入 最后 vue.use(插件名)  

#### 你有写过自定义组件吗？

#### 说说你对keep-alive的理解是什么？
保留组件状态 避免重新渲染  

#### 怎么使css样式只在当前组件中生效？
scoped  

#### 你有看过vue的源码吗？如果有那就说说看

#### 你有写过自定义指令吗？自定义指令的生命周期（钩子函数）有哪些？

#### v-show和v-if有什么区别？使用场景分别是什么？
v-if 是DOM 销毁和重建,如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块  
v-show 是css的display显示和隐藏,不管初始条件是什么，元素总是会被渲染  
v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好  

#### 说说你对MVC、MVP、MVVM模式的理解

#### 说下你对指令的理解？

#### 请描述下vue的生命周期是什么？
生命周期就是vue从开始创建到销毁的过程，分为四大步（创建，挂载，更新，销毁）  
每一步又分为两小步，如beforeCreate，created。beforeCreate前，也就是new Vue的时候会初始化事件和生命周期  
beforeCreate和created之间会挂载Data，绑定事件；接下来会根据el挂载页面元素，如果没有设置el则生命周期结束，直到手动挂载；el挂载结束后，根据templete/outerHTML(el)渲染页面  
在beforeMount前虚拟DOM已经创建完成  
之后在mounted前，将vm.$el替换掉页面元素el;mounted将虚拟dom挂载到真实页面（此时页面已经全部渲染完成）  
之后发生数据变化时触发beforeUpdate和updated进行一些操作  
最后主动调用销毁函数或者组件自动销毁时beforeDestroy，手动撤销监听事件，计时器等  
destroyed时仅存在Dom节点，其他所有东西已自动销毁。这就是我所理解的vue的一个完整的生命周期  

#### vue组件之间的通信都有哪些？
1. props  
2. $emit/$on  
3. ( $parents/$children ) / $refs  
4. Vuex  
5. Bus  
6. ( provide/inject )  
7. ( $attrs/$listeners )  

#### 什么是虚拟DOM？

#### 什么是双向绑定？原理是什么？
通过Observer 把数据劫持(Object.defineProperty())  
加入到订阅器(Dep) 订阅器收集订阅者(Watcher )、视图通过编译(Compile)、解析指令(Directive)等一些列操作收集给订阅者  
最后通过触发数据变化update 通知所有订阅者完成数据驱动  

#### vue和react有什么不同？使用场景是什么？

#### 说说vue的优缺点
优点：  
1. 数据驱动
2. 模块化
3. 轻量级
4. SPA
5. 版本3.0的界面化管理工具比较好使
6.vue易入门
缺点：  
1. 不支持低版本浏览器  

#### 有使用过vue吗？说说你对vue的理解
优点：  
1. 数据驱动
2. 模块化
3. 轻量级
4. SPA
5. 版本3.0的界面化管理工具比较好使
6.vue易入门
缺点：  
1. 不支持低版本浏览器  

#### 聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的

#### 为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？
为了能用 devtools 追踪状态变化  

#### 在 Vue 中，子组件为何不可以修改父组件传递的 Prop
如果修改了，Vue 是如何监控到属性的修改并给出警告的。  

数据流向的单一保证了数据变化的可追踪性  

#### 双向绑定和 vuex 是否冲突
当在严格模式中使用 Vuex 时，在属于 Vuex 的 state 上使用 v-model,会抛出一个错误  
用“Vuex 的思维”去解决这个问题的方法是：给 <input> 中绑定 value，然后侦听 input 或者 change 事件，在事件回调中调用 action  

#### Vue 的父组件和子组件生命周期钩子执行顺序是什么
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted  

#### vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？

#### vue 渲染大量数据时应该怎么优化？
虚拟列表，Object.freeze冻结对象,分页,loading  

#### vue 如何优化首页的加载速度？vue 首页白屏是什么问题引起的？如何解决呢？
为什么  
这类问题不仅是vue。因为是spa，而且所有的渲染都在脚本上，js执行需要时间。另外加载js也要时间，所以页面越大，加载时间越长，而且js执行的时间也长，dcl发生的时间点就更晚，所以会白屏  

怎么办  
代码拆分。code split、动态import  
多页面+单页面组合，不是整个网站都是同一个页面切换前端路由，酌情拆分一些其他页面作为新页面  
直出ssr。使用ssr减少前端跑js的时间，逻辑放服务端处理把完整的页面返回  
部分直出。使用ssr服务端压力会变大，所以可以把页面重要的部分先直出，非重要部分放前端  
接入quicklink，实际上就是检查页面链接然后在浏览器空闲时间进行prefetch  
接入service worker缓存，和ssr一起搭配使用更佳  
体验上。增加lodaing、骨架屏  
有了各种缓存，热启动是没什么问题了。最后要优化冷启动时间，使用prefetch  
前端渲染上。使用raf渲染，不阻塞主线程。react里面已使用异步渲染  
服务端rpc上。使用pb协议而不是文本协议  
传输层使用quic协议传输。貌似没多少个团队用上～  
常规操作。cdn、减少请求、雪碧图、gzip、浏览器缓存什么的就不多说了  

#### vue 是如何对数组方法进行变异的？例如 push、pop、splice 等方法
对于这些变异方法vue做了包裹，在原型上进行了拦截，调用原生的数组方法后，还会执行发布和变更的操作来触发视图的更新  
```js
const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {  
  // cache original method
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // notify change
    ob.dep.notify()
    return result
  })
})
```

#### Vue 的响应式原理中 Object.defineProperty 有什么缺陷？
为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？  

Object.defineProperty无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应  
Object.defineProperty只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。Proxy可以劫持整个对象，并返回一个新的对象。  
Proxy不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性   

#### React 和 Vue 的 diff 时间复杂度从 O(n^3) 优化到 O(n) ，那么 O(n^3) 和 O(n) 是如何计算出来的？


## vue-cli
#### vue-cli提供了的哪几种脚手架模板？

#### vue-cli工程中常用的npm命令有哪些？

#### 在使用vue-cli开发vue项目时，自动刷新页面的原理你了解吗？

#### vue-cli3插件有写过吗？怎么写一个代码生成插件？

#### vue-cli生成的项目可以使用es6、es7的语法吗？为什么？

#### vue-cli怎么解决跨域的问题？

#### vue-cli中你经常的加载器有哪些？

#### 你知道什么是脚手架吗？

#### 说下你了解的vue-cli原理？你可以自己实现个类vue-cli吗？

#### 怎么使用vue-cli3创建一个项目？

#### vue-cli3你有使用过吗？它和2.x版本有什么区别？

#### vue-cli默认是单页面的，那要弄成多页面该怎么办呢？

#### 不用vue-cli，你自己有搭建过vue的开发环境吗？流程是什么？

## vue-router
#### vue-router怎么重定向页面？

#### vue-router怎么配置404页面？

#### 切换路由时，需要保存草稿的功能，怎么实现呢？

#### vue-router路由有几种模式？说说它们的区别？

#### vue-router有哪几种导航钩子（ 导航守卫 ）？

#### 说说你对router-link的了解

#### vue-router如何响应路由参数的变化？

#### 你有看过vue-router的源码吗？说说看

#### 切换到新路由时，页面要滚动到顶部或保持原先的滚动位置怎么做呢？

#### 在什么场景下会用到嵌套路由？

#### 如何获取路由传过来的参数？

#### 说说active-class是哪个组件的属性？

#### 在vue组件中怎么获取到当前的路由信息？

#### vur-router怎么重定向？

#### 怎样动态加载路由？

#### 怎么实现路由懒加载呢？

#### 如果让你从零开始写一个vue路由，说说你的思路

#### 说说vue-router完整的导航解析流程是什么？

#### 路由之间是怎么跳转的？有哪些方式？

#### 如果vue-router使用history模式，部署时要注意什么？

#### route和router有什么区别？

#### vue-router钩子函数有哪些？都有哪些参数？

#### vue-router是用来做什么的？它有哪些组件？

## vuex
#### 你有写过vuex中store的插件吗？

#### 你有使用过vuex的module吗？主要是在什么场景下使用？

#### vuex中actions和mutations有什么区别？

#### vuex使用actions时不支持多参数传递怎么办？

#### 你觉得vuex有什么缺点？

#### 你觉得要是不用vuex的话会带来哪些问题？

#### vuex怎么知道state是通过mutation修改还是外部直接修改的？

#### 请求数据是写在组件的methods中还是在vuex的action中？

#### 怎么监听vuex数据的变化？

#### vuex的action和mutation的特性是什么？有什么区别？

#### 页面刷新后vuex的state数据丢失怎么解决？

#### vuex的state、getter、mutation、action、module特性分别是什么？

#### vuex的store有几个属性值？分别讲讲它们的作用是什么？

#### 你理解的vuex是什么呢？哪些场景会用到？不用会有问题吗？有哪些特性？

#### 使用vuex的优势是什么？

#### 有用过vuex吗？它主要解决的是什么问题？推荐在哪些场景用？

## ElementUI
#### ElementUI是怎么做表单验证的？在循环里对每个input验证怎么做呢？

#### 你有二次封装过ElementUI组件吗？

#### ElementUI怎么修改组件的默认样式？

#### ElementUI的穿梭组件如果数据量大会变卡怎么解决不卡的问题呢？

#### ElementUI表格组件如何实现动态表头？

#### ElementUI使用表格组件时有遇到过问题吗？

#### 有阅读过ElementUI的源码吗？

#### 项目中有使用过ElementUI吗？有遇到过哪些问题？它的使用场景主要是哪些？

#### 有用过哪些vue的ui？说说它们的优缺点？

## mint-ui
#### mint-ui使用过程中有没有遇到什么坑？怎么解决的？

#### 说出几个mint-ui常用的组件

#### mint-ui是什么？你有使用过吗？
