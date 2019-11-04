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

#### vue能监听到数组变化的方法有哪些？为什么这些方法能监听到呢？

#### vue中是如何使用event对象的？

#### vue首页白屏是什么问题引起的？如何解决呢？

#### 说说你对单向数据流和双向数据流的理解

#### 移动端ui你用的是哪个ui库？有遇到过什么问题吗？

#### 你知道nextTick的原理吗？

#### 说说你对v-clock和v-pre指令的理解

#### 写出你知道的表单修饰符和事件修饰符

#### 说说你对proxy的理解

#### 你有自己用vue写过UI组件库吗？

#### 用vue怎么实现一个换肤的功能？

#### 有在vue中使用过echarts吗？踩过哪些坑？如何解决的？

#### 如果让你教一个2-3年经验前端经验的同事使用vue，你该怎么教？

#### vue性能的优化的方法有哪些？

#### SSR解决了什么问题？有做过SSR吗？你是怎么做的？

#### 说说你觉得认为的vue开发规范有哪些？

#### vue部署上线前需要做哪些准备工作？

#### vue过渡动画实现的方式有哪些？

#### vue在created和mounted这两个生命周期中请求数据有什么区别呢？

#### vue父子组件双向绑定的方法有哪些？

#### vue怎么获取DOM节点？

#### vue项目有做过单元测试吗？

#### vue项目有使用过npm run build --report吗？

#### 如何解决vue打包vendor过大的问题？

#### webpack打包vue速度太慢怎么办？

#### vue在开发过程中要同时跟N个不同的后端人员联调接口（请求的url不一样）时你该怎么办？

#### vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？

#### 说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？

#### 在移动端使用vue，你觉得最佳实践有哪些？

#### 你们项目为什么会选vue而不选择其它的框架呢？

#### 对于即将到来的vue3.0特性你有什么了解的吗？

#### vue开发过程中你有使用什么辅助工具吗？

#### vue和微信小程序写法上有什么区别？

#### 怎么缓存当前的组件？缓存后怎么更新？

#### 你了解什么是高阶组件吗？可否举个例子说明下？

#### 为什么我们写组件的时候可以写在.vue里呢？可以是别的文件名后缀吗？

#### vue-loader是什么？它有什么作用？

#### 说说你对vue的extend（构造器）的理解，它主要是用来做什么的？

#### 如果将axios异步请求同步化处理？

#### 怎么捕获组件vue的错误信息？

#### 为什么vue使用异步更新组件？

#### 如何实现一个虚拟DOM？说说你的思路

#### 写出多种定义组件模板的方法

#### SPA单页面的实现方式有哪些？

#### 说说你对SPA单页面的理解，它的优缺点分别是什么？

#### 说说你都用vue做过哪些类型的项目？

#### 在vue项目中如何引入第三方库（比如jQuery）？有哪些方法可以做到？

#### 使用vue手写一个过滤器

#### 你有使用过render函数吗？有什么好处？

#### 写出你常用的指令有哪些？

#### 手写一个自定义指令及写出如何调用

#### 组件进来请求接口时你是放在哪个生命周期？为什么？

#### 你有用过事件总线(EventBus)吗？说说你的理解

#### 说说vue的优缺点分别是什么？

#### DOM渲染在哪个周期中就已经完成了？

#### 第一次加载页面时会触发哪几个钩子？

#### vue生命周期总共有几个阶段？

#### vue生命周期的作用是什么？

#### vue和angular有什么区别呢？

#### 如何引入scss？引入后如何使用？

#### 使用vue开发过程你是怎么做接口管理的？

#### 为何官方推荐使用axios而不用vue-resource？

#### 你了解axios的原理吗？有看过它的源码吗？

#### 你有封装过axios吗？主要是封装哪方面的？

#### 如何中断axios的请求？

#### axios是什么？怎样使用它？怎么解决跨域的问题？

#### 说说你对vue的template编译的理解？

#### v-on可以绑定多个方法吗？

#### vue常用的修饰符有哪些？列举并说明

#### 你认为vue的核心是什么？

#### v-model是什么？有什么用呢？

#### 说说你对vue的mixin的理解，有什么应用场景？

#### SPA首屏加载速度慢的怎么解决？

#### 删除数组用delete和Vue.delete有什么区别？

#### 动态给vue的data添加一个新的属性时会发生什么？怎样解决？

#### 组件和插件有什么区别？

#### 说说你使用vue过程中遇到的问题（坑）有哪些，你是怎么解决的？

#### 说说你对选项el,template,render的理解

#### vue实例挂载的过程是什么？

#### vue在组件中引入插件的方法有哪些？

#### v-if和v-for的优先级是什么？如果这两个同时出现时，那应该怎么优化才能得到更好的性能？

#### 分别说说vue能监听到数组或对象变化的场景，还有哪些场景是监听不到的？无法监听时有什么解决方案？

#### $nextTick有什么作用？

#### 为什么data属性必须声明为返回一个初始数据对应的函数呢？

#### 怎么在watch监听开始之后立即被调用？

#### watch怎么深度监听对象变化？

#### watch和计算属性有什么区别？

#### vue如何监听键盘事件？

#### v-for循环中key有什么作用？

#### 怎么在vue中使用插件？

#### 你有写过自定义组件吗？

#### 说说你对keep-alive的理解是什么？

#### 怎么使css样式只在当前组件中生效？

#### 你有看过vue的源码吗？如果有那就说说看

#### 你有写过自定义指令吗？自定义指令的生命周期（钩子函数）有哪些？

#### v-show和v-if有什么区别？使用场景分别是什么？

#### 说说你对MVC、MVP、MVVM模式的理解

#### 说下你对指令的理解？

#### 请描述下vue的生命周期是什么？

#### vue组件之间的通信都有哪些？

#### 什么是虚拟DOM？

#### 什么是双向绑定？原理是什么？

#### vue和react有什么不同？使用场景是什么？

#### 说说vue的优缺点

#### 有使用过vue吗？说说你对vue的理解

#### 聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的

#### 为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？

#### 在 Vue 中，子组件为何不可以修改父组件传递的 Prop
如果修改了，Vue 是如何监控到属性的修改并给出警告的。  

#### 双向绑定和 vuex 是否冲突

#### Vue 的父组件和子组件生命周期钩子执行顺序是什么

#### vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？

#### vue 渲染大量数据时应该怎么优化？

#### vue 如何优化首页的加载速度？vue 首页白屏是什么问题引起的？如何解决呢？

#### vue 是如何对数组方法进行变异的？例如 push、pop、splice 等方法

#### Vue 的响应式原理中 Object.defineProperty 有什么缺陷？
为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？  

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
