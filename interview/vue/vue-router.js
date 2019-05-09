class HistoryRoute{
    constructor(){
        this.current = null;
    }
}
class VueRouter{
    constructor(options){
        this.mode = options.mode || 'hash';
        this.routes = options.routes || [];
        // 传递的路由表是一个数组,将数格式化为对象格式
        this.routesMap = this.createMap(this.routes);
        // 路由中需要存放当前的路径 需要状态
        this.history = new HistoryRoute;
        this.init();//开始初始化操作
    }
    init(){
        if(this.mode === 'hash'){
            // 先判断用户打开时有没有hash,没有就跳转到#/
            location.hash ? '' : location.hash = '/';
            // 页面加载,如果有hash,将hash值保存到current中
            window.addEventListener('load',()=>{
                this.history.current = location.hash.slice(1);
            })
            // 变化时,改变current
            window.addEventListener('hashchange',()=>{
                this.history.current = location.hash.slice(1);
            })
        }else{
            // history模式 pathname
            location.pathname?'':location.pathname='/'
            window.addEventListener('load', () => {
                this.history.current = location.pathname;
            })
            // 监听前进后退
            window.addEventListener('popstate', () => {
                this.history.current = location.pathname;
            })
        }
    }
    createMap(routes){
        return routes.reduce((prev,next)=>{
            prev[next.path] = next.component;
            return prev
        },{})
    }
    go(){}
    back(){}
    push(){}
}
// 使用Vue.use就会调用install方法
VueRouter.install = function(Vue,opts){
    // 每个组件都有this.$router和this.$route
    // 在所有的组件中获取同一个路由的实例
    Vue.mixin({
        beforeCreate(){
            // 通过$options是否有router,判断是否是根实例
            if (this.$options && this.$options.router) {
                this._root = this;// 把当前实例挂载在_root上
                this._router = this.$options.router;// 将router实例挂载在_router上
                // 如果current属性变化,也会刷新视图
                Vue.util.defineReactive(this,'xxx',this._router.history);
            }else{
                // 子组件通过$parent获取同一个
                this._root = this.$parent._root
            }
            Object.defineProperty(this,'$router',{
                get(){
                    return this._root._router;
                }
            })
            Object.defineProperty(this,'$route',{
                get(){
                    return {
                        current:this._root._router.history.curent
                    }
                }
            })
        }
    })
    Vue.component('router-link',{
        props:{
            to:String
        },
        render(h){
            let mode = this._self._root._router.mode;
            // jsx语法
            return <a href={mode === 'hash'?`#${this.to}`:this.to}>{this.$slots.default}</a>
        }
    })
    Vue.component('router-view',{
        render(h){
            // console.log(this._self);
            // this指向一个Proxy对象,其中的_self指向当前组件实例
            let current = this._self._root._router.history.current;
            let routeMap = this._self._root._router.routesMap;
            return h(routeMap[current])
        }
    })
}
export default VueRouter