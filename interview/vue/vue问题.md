## 使用
###### 常用指令
v-model 表单
v-on/: 变量
v-for 循环
v-if
v-show
v-clock
v-pre 跳过编译

this.$route
this.$router
this.$options   当前 Vue 实例的初始化选项
this.$refs
this.$parent

###### export default{}
- data:{} / data(){reutrn {}}
- props {} / []
- created(){}
- mounted(){}
- method:{}
```
watch:{
    fn(newVal,oldVal){}
}

computed:{
    fns(){}
}
```
- components:{}

## mixins
```js
// common/js/mixin.js
export const mixinFn = {
    created(){},
    mounted(){},
    method:{},
    // ....
}

// 组件中
import {mixinFn} from 'common/js/mixin.js';
export default {
    mixins:[mixinFn],
}

```

###### 插槽
```js
// slot.js
<div>
    <slot name="hehe"></slot>
</div>

//component.js
<component>
    <div slot="hehe"></div>
</component>
```

## 路由
###### 原理  
定义VueRouter类
construtor构造方法接收实例化时传递的参数  
构造方法中定义 mode(路由方式) routes(路由规则) routesMap(将路由规则递归转化为对象) history(存放当前路径),初始化操作  
hash模式监听`load`和`hashchang`事件,一旦hash改变,将值保存到history的current中    
history模式监听`load`和`popstate`事件,一旦pathname改变将值保存到history的current中  
使用路由时会使用`Vue.use(VueRouter)`方法,会调用VueRouter的`install`方法,传递Vue,opts参数  
install方法
    通过`Vue.mixin`方法将`beforeCreate()`钩子函数混入到各个组件中  
    通过`Vue.conponent()`定义`router-link`和`router-view`两个组件

钩子函数通过`$options`和`$options`中是否有`router`属性,来判断是否是Vue根实例  
    如果是Vue根组件
        将当前路由实例挂载到`this_root`中,同时将`this.$options.router`挂载到`this._router`上  
        `this.$options.router`是当前路由的实例
        通过`Vue.util.defineReactive(this,'xxx',this.router.history)`方法,将`this._router.history`变为响应式数据  
    如果是子组件  
        通过`this.root = this.$parent._root`获取同一个实例  
钩子函数中通过`Object.defineProperty()`定义`$router`和`$route`

注册`router-link`和`router-view`组件调用`render`方法  
`router-view`中通过`this._self`获取当前实例,在从`_root._router`中获取到`current`和`routesMap`



```js
// router/index.js
import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=>import('../page/home/home.vue')
Vue.use(Router)
export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        }
    ]
})
```

## 路由跳转
`<router-link :to="{path: address,query:{id:1,name:hehe}}"></router-link>` 
获取参数
`this.$route.query.id` 
点击调转
`this.$router.push('/')`
`this.$router.push({path:'name',query:{id:1}})`
`this.$router.go(1)`

###### vuex
公共状态管理  
遵循单向数据流  
Vuex中的数据是响应式的  
传输过程  
1. 通过`new Vuex.Store()`创建一个仓库,state是公共的状态  
2. 在组件内部通过`this.$store.state`属性来调用公共state,进行页面渲染  
3. 当组件修改数据的时候,需要遵循单向数据流,而且只能通过mutation更改数据  
4. 同步操作在mutations中,异步操作在action中  
5. mutations接收两个参数,一个state,一个要修改的数据  
6. 通过`this.$store.dispatch`触发actions中个方法,都会接收一个对象,对象中有一个commit方法,用来触发mutations中的方法  
7. 当mutations中的方法执行完毕后state会发生改变,同时视图发生改变  

###### 原理
通过`Vue.use()`调用`install`方法,将`store`实例挂载到`this.$store`上  
`Store`类中获取参数`options`中的state,通过`new Vue`是state实现双向绑定    
对`module`模块间的关系进行整理`new ModuleCollections(options)`  
    定义newModule对象,用于存储父子module之间的关系  
```js
let newModule = {
    _raw:rawModule,  // 整个options对象
    _children:{},   //表示它包含的模块
    state:rawModule.state   // 自己模块的状态
}
```
    递归将子module定义到父module的_children中,并挂载到root上  
使用定义好的module  
通过遍历利用`Object.defineProperty()`将getters中的方法定义在Store实例的getters对象中,每一个get方法执行对应的函数  
vuex将所有actions和mutations都定义到store根上,相同方法名会一起触发  
循环将所有函数push到对应的方法名下

```js
// index.js
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getter'
import * as actions from './actions'
import state from './state'
import mutations from 'mutations'

Vue.use(Vuex);
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
})

// store.js
const state = {
    id:''
}
export default state

// mutations-type.js
export const GET_ID = 'GET_ID'

// mutations.js
import * as types from './mutations-type.js'
const mutations = {
    [types.GET_ID](state,val){
        state.id = val;
    }
}
export default mutations

// getter.js
export const id = state => state.id;

// actions.js
import * as types from './mutations-type'
export const func = function({commit,state},newVal){
    commit(type.SET_ID,newVal)
}

// main.js
import store from './store/index.js'
new Vue({
    store
})

// 组件中
import {mapGetters,mapMutations,mapActions} from 'vuex'
computed:{
    ...mapGetters([
        'playList',
    ]),
},
methods:{
    ...mapMutations({
        setPlayingState:'SET_PLAYING_STATE',
    }),
    ...mapActions([
        'savePlayHistory'
    ])
}

```

## 生命周期
beforeCreate
    在实例初始化后,数据观测(data observer)和event/watche事件配置之前调用
    此时组件的选项还没挂载,无法访问methods,data,computed上的数据
created
    实例创建完成后立即调用,此时完成了:数据观测,属性和方法的运算,watcher/event事件回调,但是挂载阶段还未开始,$el属性不可见
beforeMount
    在挂载开始之前被调用,想关的render函数首次被调用
mounted
    el被新创建的vm.$el替换,并挂载到实例上去后调用该钩子
    mounted不会承诺所有的子组件也会被一起挂载,希望整个视图都渲染完毕,使用vm.$nextTick
    这个周期可以获取dom
beforeUpdate
    数据更新时调用,发生在虚拟DOM重新渲染和打补丁之前
updated
    数据更新导致的虚拟DOM重新渲染和打补丁,在这之后调用钩子
    此时DOM已经更新
    但避免再次阶段更改状态,可能会导致更新无限循环
beforeDestroy
    实例销毁之前调用
    此时实例完全可用,可以用thiis来获取实例
    一般再这一步做一些重置的操作,比如去掉组件中的定时器和监听dom事件
destroyed
    Vue实例销毁后调用,调用后,实例指示的所有东西都会解绑,事件监听器移除,所有子实例销毁

## 双向数据绑定MVVM
```js
let obj = {}
Object.defineProperty(obj,'a',{
    get:function(){
        console.log('get被调用');
    },
    set:function(val){
        console.log('set被调用,参数是:'+val)
    }
})
```

## Virtual DOM
- 虚拟DOM相比真实DOM，为什么会带来性能上的优化？

## Diff算法
- diff算法是怎么比较新旧节点并更新的？key有什么作用？

## AST

## 父子通讯/vue组件间通信
父->子 props
子->父 this.$emit
不同组件之间 
- eventBus
```js
//eventBus.js
import Vue from 'vue'
export default new Vue()
//A.js
import eventBus from './eventBus'
export default {
    methods:{
        emitToB(){
            eventBus.$emit('eventFromA','数据')
        }
    }
}
//B.js
import eventBus from './eventBus'
export default {
    mounted(){
        this.getData()
    }
    methods:{
        getData(){
            const that = this;
            eventBus.$on('eventFromA',function(val){
                that.title = val
            })
        }
    }
}

```
- vuex

## template编译render

## vue的nextTick实现原理以及应用场景

## key

##  delete和Vue.delete删除数组的区别
delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。
Vue.delete 直接删除了数组 改变了数组的键值。

## vue原理，和react的区别

## 讲vue的响应式原理、依赖收集、监听数组、虚拟dom等等

## vue响应式原理，什么是mvvm

## vue双向绑定讲一讲

## 手写vue双向绑定

## Vue3 proxy解决了哪些问题？

## 使用 JavaScript Proxy实现简单的数据绑定

## vue-router的原理

## 手写vue的mixin方法

## vue原理，包括计算属性、依赖收集等等

## 对vuex的理解，单向数据流

## vuex数据流动过程

## 抽取过哪些vue组件

## v-if 与 v-show 的区别
v-if 的话，是往 DOM 树上添加或者删除元素；v-show 的话，使用 display: none 这些来控制显示元素

## v-if和v-show
v-if有更高的切换开销,v-show有更高的初始渲染开销,如果需要频繁的切换,使用v-show较好,如果运行时条件很少改变,使用v-if较好

## 讲vue-lazyloader的原理，手写伪代码

## vue里面哪儿不会用到双向绑定
input中不适用v-model,而是使用v-bind/:

## Diff 算法,diff算法是对树的深度优先遍历还是广度优先遍历
是深度优先遍历

## vue和react区别
相同点：都支持 ssr，都有 vdom，组件化开发，实现 webComponents 规范，数据驱动等
不同点：vue 是双向数据流（当然为了实现单数据流方便管理组件状态，vuex 便出现了），react 是单向数据流。vue 的 vdom 是追踪每个组件的依赖关系，不会渲染整个组件树，react 每当应该状态被改变时，全部子组件都会 re-render。

## vue里面的虚拟dom是怎么回事,优点？
创建真实DOM的代价高：真实的 DOM 节点 node 实现的属性很多，而 vnode 仅仅实现一些必要的属性，相比起来，创建一个 vnode 的成本比较低。
触发多次浏览器重绘及回流：使用 vnode ，相当于加了一个缓冲，让一次数据变动所带来的所有 node 变化，先在 vnode 中进行修改，然后 diff 之后对所有产生差异的节点集中一次对 DOM tree 进行修改，以减少浏览器的重绘及回流。

## Vue 组件 data 为什么必须是函数
每个组件都是 Vue 的实例。
组件共享 data 属性，当 data 的值是同一个引用类型的值时，改变其中一个会影响其他。

## Vue computed 实现
从两个问题出发：
建立与其他属性（如：data、 Store）的联系；
属性改变后，通知计算属性重新计算。
实现时，主要如下
初始化 data， 使用 Object.defineProperty 把这些属性全部转为 getter/setter。
初始化 computed, 遍历 computed 里的每个属性，每个 computed 属性都是一个 watch 实例。每个属性提供的函数作为属性的 getter，使用 Object.defineProperty 转化。
Object.defineProperty getter 依赖收集。用于依赖发生变化时，触发属性重新计算。
若出现当前 computed 计算属性嵌套其他 computed 计算属性时，先进行其他的依赖收集

## 怎么快速定位哪个组件出现性能问题
通过 timeline 来查看每个函数的调用时常，定位出哪个函数的问题，从而能判断哪个组件出了问题。
https://juejin.im/post/5a6e78abf265da3e3f4cf085
https://developers.google.cn/web/tools/chrome-devtools/?hl=zh-cn

## v-if 和 v-for 能否同时使用
避免一起使用
v-for 的优先级比 v-if 更高,这意味着 v-if 将分别重复运行于每个 v-for 循环中


## 初始化方法放在created 还是 mounted ,区别是什么

## SSR