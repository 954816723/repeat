Flow 类型检查
npm install flow-bin -g

flow init生成配置文件

需要检查文件头部加入/*@flow*/

flow命令检查文件

添加类型注释:<类型> key: ?string = null

vue源码基于rollup构建
构建相关配置都在script目录下

目录结构
├── dist ---------------------------------- 构建后文件的输出目录
├── examples ------------------------------ 存放一些使用Vue开发的应用案例
├── flow ---------------------------------- 类型声明，使用开源项目 [Flow](https://flowtype.org/)
├── packages ------------------------------ 存放独立发布的包的目录
├── scripts ------------------------------- 构建相关的文件，一般情况下我们不需要动
│   ├── git-hooks ------------------------- 存放git钩子的目录
│   ├── alias.js -------------------------- 别名配置
│   ├── config.js ------------------------- 生成rollup配置的文件
│   ├── build.js -------------------------- 对 config.js 中所有的rollup配置进行构建
│   ├── ci.sh ----------------------------- 持续集成运行的脚本
│   ├── release.sh ------------------------ 用于自动发布新版本的脚本
├── src ----------------------------------- 这个是我们最应该关注的目录，包含了源码
│   ├── compiler -------------------------- 编译器代码的存放目录，将 template 编译为 render 函数
│   ├── core ------------------------------ 存放通用的，与平台无关的代码
│   │   ├── observer ---------------------- 响应系统，包含数据观测的核心代码
│   │   ├── vdom -------------------------- 包含虚拟DOM创建(creation)和打补丁(patching)的代码
│   │   ├── instance ---------------------- 包含Vue构造函数设计相关的代码
│   │   ├── global-api -------------------- 包含给Vue构造函数挂载全局方法(静态方法)或属性的代码
│   │   ├── components -------------------- 包含抽象出来的通用组件
│   ├── server ---------------------------- 包含服务端渲染(server-side rendering)的相关代码
│   ├── platforms ------------------------- 包含平台特有的相关代码，不同平台的不同构建的入口文件也在这里
│   │   ├── web --------------------------- web平台
│   │   │   ├── entry-runtime.js ---------- 运行时构建的入口，不包含模板(template)到render函数的编译器，所以不支持 `template` 选项，我们使用vue默认导出的就是这个运行时的版本。大家使用的时候要注意
│   │   │   ├── entry-runtime-with-compiler.js -- 独立构建版本的入口，它在 entry-runtime 的基础上添加了模板(template)到render函数的编译器
│   │   │   ├── entry-compiler.js --------- vue-template-compiler 包的入口文件
│   │   │   ├── entry-server-renderer.js -- vue-server-renderer 包的入口文件
│   │   │   ├── entry-server-basic-renderer.js -- 输出 packages/vue-server-renderer/basic.js 文件
│   │   ├── weex -------------------------- 混合应用
│   ├── sfc ------------------------------- 包含单文件组件(.vue文件)的解析逻辑，用于vue-template-compiler包
│   ├── shared ---------------------------- 包含整个代码库通用的代码
├── test ---------------------------------- 包含所有测试文件
├── .editorconfig ------------------------- 针对编辑器的编码风格配置文件
├── .babelrc ------------------------------ babel 配置文件
├── .eslintignore ------------------------- eslint 忽略配置
├── .eslintrc ----------------------------- eslint 配置文件
├── .flowconfig --------------------------- flow 的配置文件
├── .gitignore ---------------------------- git 忽略配置
├── package.json -------------------------- 不解释
├── yarn.lock ----------------------------- yarn 锁定文件

## Vue双向数据绑定
- 通过数据劫持结合发布者-订阅者模式,通过`Object.defineProperty()`劫持各个属性的`getter`和`setter`
1. 实现一个数据监听器Observer,能够对数据对象的所有属性进行监听
2. 实现一个指令解析器Compile,对每个元素节点的指令进行扫描和解析,根据指令模板替换数据,以及绑定相应的更新函数
3. 实现一个Watcher,作为连接Observer和Compile的桥梁,能够订阅并收到每个属性变动的通知,执行绑定指令相应的回调函数,从而更新视图
4. mvvm入口函数,整合以上三者

## Vue Api
###### 指令
- v-text : 更新dom对象的textContent
- v-html : 更新dom对象的innerHTML
- v-bind : 当表达式值改变时,将其响应式作用于dom,简写 :
- v-on : 绑定事件,简写@
    事件修饰符
    .stop阻止冒泡 .prevent阻止默认行为 .capture使用捕获模式 .self元素本身才会触发事件  .once事件只触发一次
    按键值修饰符
    监听键盘事件时,允许v-on/@添加案件修饰符
- v-model : 表单元素上创建双向数据绑定
- v-for : 循环遍历数据
    key属性 : 更高效的更新虚拟DOM,给每个节点做一个唯一标识,Diff算法可以正确的识别节点,复用相同的节点
    在相同标签名的过渡切换时,也会使用到key属性,为了让vue可以区分它们,否则只会替换其内部属性而不会触发过渡效果
- v-if : 根据表达式的值的真假,销毁或重建元素
- v-show : 根据表达式值的真假,切换元素的display css属性
    一般,v-if有更高的切换开销,v-show有更高的初始渲染开销,如果需要频繁的切换,使用v-show较好,如果运行时条件很少改变,使用v-if较好
    不推荐v-if和v-for一起使用,v-for具有比v-if更高的优先级
- v-slot : 
- v-once : vue只渲染元素和组件一次,随后将会被视为静态内容跳过,优化性能
- v-pre : 跳过这个元素和子元素的编译过程
- v-clock : 这个指令保持在元素上直到关联实例结束编译
###### 全局Api
- Vue.extend : 使用基础Vue构造器,创建一个子类,参数是包含组件选项的对象
- Vue.nextTick : 在下次DOM更新循环结束之后执行回调
- Vue.set : 向响应式对象中添加属性
- Vue.delete : 删除对象的属性
- Vue.use : 安装Vue.js插件,在new Vue()之前调用
- Vue.directive : 注册或获取全局指令
- Vue.filter : 注册或获取全局过滤器
- Vue.component : 注册或获取全局组件
- Vue.mixin : 全局注册一个混入,影响注册之后所有创建的Vue实例
- Vue.compile
###### 选项/资源
- filter:过滤器
- components
###### 选项/组合
- parent
- mixins
- extends
###### 选项/数据
- data : Vue实例的数据对象,注意,组件中只接受Fn
- props : 可以是数组或对象,接受父组件的数据
- methods : 绑定方法,this自动绑定为Vue实例
- watch:监视数据变化(对象)
    watch是一个对象,键是需要观察的表达式,值是对应回调函数
    当表达式的值发生变化后,会调用相应的回调函数完成监视操作
    vm.$watch
- computed:计算属性(对象)
    计算属性是基于他们的依赖进行缓存的,只有在它的依赖发生改变时才会重新求值
    computed中的属性不能与data中的属性同名,会报错
    计算属性默认只有getter,不过在需要时也可以提供一个setter
    实现原理类似于数据绑定,new Watcher
###### 实例属性
- vm.$data : Vue实例观察的数据对象
- vm.$props : 当前组件接收到的props对象
- vm.$el : 实例使用的根DOM
- vm.$options : 当前实例的初始化选项
- vm.$refs : 一个对象,持有注册过ref特性的所有dom元素和组件实例
- vm.$slots : 用来访问被插槽分发的内容  
- vm.$parent : 父实例,有的话
- vm.$root : 当前组件树的根vue实例,没有父实例就是自己
- vm.$attrs : 包含父作用域中不作为prop被识别且获取的特性绑定
###### 实例方法
- vm.$watch : 观察 Vue 实例变化的一个表达式或计算属性函数
- vm.$set : 全局 Vue.set 的别名
- vm.$delete : 全局 Vue.delete 的别名
- vm.$on : 监听当前实例上的自定义事件,事件可以有vm.$emit触发
- vm.$emit : 触发当前实例上的事件,附加参数都会传递给监听器回调
- vm.$once : 监听一个自定义事件,只触发一次,之后移除
- vm.$off : 移除自定义事件监听器
- vm.$mount : 挂载
- vm.$forceUpdate : 迫使Vue实例重新渲染
- vm.$nextTick : 将回调延迟到下一次DOM更新循环之后执行,跟全局方法一致,不同的是回调this
- vm.$destroy : 完全销毁一个实例
###### 内置组件
- component : 动态组件,根据this的值,决定渲染哪一个组件
- keep-alive : 包裹动态组件,缓存不活动的组件,而不是销毁它,当组件在 `<keep-alive>` 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行
- transition : 添加过渡效果
- transition-group : 为多个元素添加过渡效果,要有独立的key
- slot : 插槽
###### 特殊特性
- key : 主要用于虚拟DOM算法
- ref : 用来给元素或组件注册引用信息
## 组件/组件通讯
- vm.$refs:获取组件(或元素)
- 父传子
    方式:父级在子组件上定义数据,变量需要加v-bind,字面量直接写,子组件通过props来接收数据,属性值必须一样
- 子传父
    方式:在父组件中定义好方法,子组件中绑定事件,事件触发调用$emit(),进行参数传递,触发父组件上的方法
- 非父子组件通讯
    使用一个空的Vue实例来实现,组件A触发方法,调用空Vue的$emit方法,传递方法名和数据
    组件B通过空Vue的$on绑定相同的方法名

## Vue生命周期
- 组件实例周期
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

## Vue组件间的交互
props emit provide inject attrs listeners eventbus vuex

## render

## VNode

## Diff

## vue Router
- hash模式通过监听load和hashchange事件
- history模式通过history Api实现,点击触发history.pushState({},null,pathname),监听浏览器前进后退事件addEventListener('popstate',()=>{})
###### 原理
- 定义VueRouter类,获取mode,routes,将数组routes格式化为对象,定义history存放当前路径
- 执行init方法初始化
- init方法判断mode模式执行不同操作,hash通过location.hash和监听load,hashchange改变history.current,history通过location.pathname和监听load,popstate改变current
- VueRouter定义install方法,通过Vue.mixin()混入钩子函数beforeCreate()
- 钩子函数中通过$options中的router获取根路由实例
- 通过Vue.util.defineReactive()方法,将this._router.history当前路由地址数据响应式
- 通过Object.defineProperty()定义$router和$route属性
- 通过Vue.component注册router-link和router-view组件,组件render函数中的this指向Proxy代理对象,其中_self指向当前vue实例,由此获得当前路由地址(hstory.current),render函数中可以直接返回html代码

- Vue编写插件的时候通常要提供静态的install方法
- Vue-Router的install方法会给每一个组件注入beforeCreate和destroyed钩子函数,在beforeCreated做一些私有属性定义和路由初始化工作
- 路由初始化的时机是在组件的初始化阶段,执行到beforeCreate钩子函数的时候会执行router.init方法,然后又会执行histroy.transitionTo方法做路由过渡
- Vue.use(plugin)方法调用插件的install方法
- Vue.mixin()将选项合并到全局options上
- 动态路由匹配 : 某种模式匹配到的路由,都映射到同个组件
    使用动态路径参数 以冒号开头
- 路由参数的变化
    使用路由参数时,页面切换,原来的组件会被复用,生命周期函数不会再被调用
    可以使用watch检测'$route'(to,from){}对象
    或使用导航守卫beforeRouteUpdate(to,from,next){}
- 路由嵌套children
- 命名路由,在routes配置中设置name
- 命名视图 : 同时展示多个视图
    设置多个`<route-view></route-view>`,设置不同的name,没有默认default
    在components中设置组件
- 导航守卫
    router.beforeEach(to,from,next){}全局守卫
    router.beforeResolve(){}全局解析守卫
    router.afterEach(to,from){}
    beforeEnter:(to,from,next){}路由独享守卫
    组件内的守卫
    beforeRouterEnter
    beforeRouteUpdate
    beforeRouteLeave
- 完整的导航解析流程
1. 导航被触发。
2. 在失活的组件里调用离开守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
- 路由过渡
    路由可以通过包裹`<transition>`添加过渡效果
    可以基于路由动态设置过渡效果
```html
<!-- 使用动态的 transition name -->
<transition :name="transitionName">
  <router-view></router-view>
</transition>
```
```js
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
```
###### 数据获取
- 导航完成之后获取
    先完成导航,在组件的生命周期钩子函数中获取数据
- 导航完成之前获取
    导航完成前,在路由进入的守卫`beforeRouteEnter`中获取数据,数据获取成功后调用`next方法`进行导航
###### 路由懒加载
```js
const Foo = () => import('./Foo.vue')
```
###### Api
- `<route-link>`
    - to    路由链接
    - replace   设置后调用router.replace(),导航不会留下记录
    - append    在当前路径前添加基路径
    - tag   渲染成其他标签
    - active-class  链接激活时的css类名,默认router-link-active
    - exact 布尔值,判断当前路径下是否激活
- `<route-view>`
    - name  设置名称,匹配components下的组件
###### Router构建选项
- routes
    path    string
    component   Component
    name    命名路由 string
    components 命名试图组件{}
    children    嵌套路由 Arr
    redirect
    props
    alias
    beforeEnter
    meta
- mode 配置路由模式 history hash abstract
- base 引用的基路径
- linkActiveClass 全局配置默认激活class类名
- linkExactActiveClass 精准激活class类名
###### 路由对象属性
- $route.path 当前路由绝对路径
- $route.params 当前路由参数 Object
- $route.query 查询参数
- $route.hash hansh值
- $route.fullPath 完整路径
###### 组件注入
- this.$router router实例
- this.$route  当前激活的路由信息对象,这个属性只读.可以通过watch检测变化
###### Router实例方法
- router.push
- router.replace
- router.go
- router.back
- router.forward
###### 增加的组件配置选项
- beforeRouteEnter
- beforeRouteUpdate
- beforeRouteLeave

## vuex
- Vuex是专为Vue.js开发的状态管理模式
- State
- Getter
- Mutation
- Action
```js
//index.js
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters' 
import * as actions from './actions'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
```
```js
//state.js
const state = {
    value:'...'
}
export default state;
```
```js
//getters.js
export const value = state => state.value
```
```js
//mutations-type.js
export const SET_VALUE = 'SET_VALUE'
```
```js
//mutations.js
import * as types from './mutations-type'
const mutations = {
    [types.SET_VALUE](state,value){
        state.value = value
    }
}
export default mutations
```
```js
//actions.js
import * as types from './mutations-type'
export const action = function({commit,state},newVal){
    commit(type.SET_VALUE,newVal)
}
```

## vue-cli