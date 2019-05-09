let Vue;
class ModuleCollection{
    constructor(options){
        this.register([],options)
    }
    register(path,rawModule){
        // path是个空数组,rawModule是个对象
        let newModule = {
            _raw:rawModule,  // 整个options对象
            _children:{},   //表示它包含的模块
            state:rawModule.state   // 自己模块的状态
        }
        if (path.length == 0) {
            this.root = newModule;
        }else{
            // 通过reduce获取父节点
            let parent = path.slice(0,-1).reduce((root,current)=>{
                return root._children[current];
            },this.root);
            parent._children[path[path.length-1]] = newModule;
        }
        if (rawModule.modules) { //有子模块
            forEach(rawModule.modules,(chidName,module)=>{
                this.register(path.concat(chidName),module)
            })
        }
    }
}
function installModule(store,rootState,path,rootModule){
    // 将各个state定义到对应的模块下
    if (path.length > 0) {
        let parent = path.slice(0,-1).reduce((root,current)=>{
            return root[current];
        },rootState)
        Vue.set(parent,path[path.length-1],rootModule.state)
    }

    if (rootModule._raw.getters) {
        forEach(rootModule._raw.getters,(getterName,getterFn)=>{
            Object.defineProperty(store.getters,getterName,{
                get:()=>{
                    return getterFn(rootModule.state)
                }
            })
        })
    }
    // 默认actions mutaton都会定义到store上
    if (rootModule._raw.actions) {
        forEach(rootModule._raw.actions,(actionsName,actionsFn)=>{
            let entry = store.actions[actionsName] || (store.actions[actionsName]=[])
            entry.push(()=>{
                actionsFn.call(store,store)
            })
        })
    }
    if (rootModule._raw.mutations) {
        forEach(rootModule._raw.mutations, (mutationName, mutationFn) => {
            let entry = store.mutations[mutationName] || (store.mutations[mutationName] = [])
            entry.push(()=>{
                mutationFn.call(store, rootModule.state)
            })
        })
    }
    forEach(rootModule._children,(childName,module)=>{
        installModule(store,rootState,path.concat(childName),module)
    })
}
class Store{
    constructor(options){
        this.getters = {};
        this.mutations = {};
        this.actions = {};
        let state = options.state;
        // 通过new Vue()实现数据的双向绑定
        this._vm = new Vue({
            data:{
                state
            }
        })

        // 把模块之间的关系进行整理 
        this.modules = new ModuleCollection(options)
        // 无论是子模块还是孙子,所有的mutation 都是根上的

        // this是store的实例 []path this.module.root当前的根模块
        installModule(this,state,[],this.modules.root)

        // if (options.getters) {
        //     let getters = options.getters;
        //     forEach(getters,(getterName,getterFn)=>{
        //         Object.defineProperty(this.getters,getterName,{
        //             get:()=>{
        //                 return getterFn(state)
        //             }
        //         })
        //     })
        // }
        // if(options.mutations){
        //     let mutations = options.mutations;
        //     forEach(mutations,(mutationName,mutationFn)=>{
        //         this.mutations[mutationName] = ()=>{
        //             // 绑定this
        //             mutationFn.call(this,state);
        //         }
        //     })
        // }
        // if(options.actions){
        //     let actions = options.actions;
        //     forEach(actions, (actionsName, actionsFn) => {
        //         this.actions[actionsName] = () => {
        //             // 绑定this
        //             actionsFn.call(this, this);
        //         }
        //     })
        // }
        let {
            commit,
            dispatch
        } = this;
        this.commit = (type)=>{
            commit.call(this,type)
        }
        this.dispatch = (type)=>{
            dispatch.call(this,type)
        }
    }
    get state(){
        return this._vm.state;
    }
    commit(type){
        this.mutations[type].forEach(fn=>fn());
    }
    dispatch(type){
        this.actions[type].forEach(fn=>fn());
    }
}
function forEach(obj,cb){
    Object.keys(obj).forEach(item=>cb(item,obj[item]))
}
let install = (_Vue) => {
    Vue = _Vue;
    Vue.mixin({
        beforeCreate(){
            if (this.$options && this.$options.store) {
                this.$store = this.$options.store
            }else{
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}

export default {
    Store,
    install
}