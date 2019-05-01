class SyncHook {
    constructor(args){
        this.tasks = []
    }
    tap(name,task){
        this.tasks.push(task);
    }
    call(...args){
        this.tasks.forEach((task)=>task(...args))
    }
}
// let hook = new SyncHook(['name']);
// hook.tap('react',function(name){
//     console.log('react',name);
// })
// hook.tap('node',function(name){
//     console.log('node',name);
// })
// hook.call('hehe');

class SyncBailHook {
    constructor(args){
        this.tasks = [];
    }
    tap(name,task){
        this.tasks.push(task);
    }
    call(...args){
        let ret; //当前这个函数的返回值
        let index = 0;
        do {
            ret = this.tasks[index++](...args);
        } while (ret === undefined && index < this.tasks.length);
    }
}
// let hook = new SyncBailHook(['name']);
// hook.tap('react', function (name) {
//     console.log('react', name);
//     return '停止学习'
// })
// hook.tap('node', function (name) {
//     console.log('node', name);
// })
// hook.call('hehe');

class SyncWaterfallHook {
    constructor(args) {
        this.tasks = [];
    }
    tap(name, task) {
        this.tasks.push(task);
    }
    call(...args) {
        let [first,...others] = this.tasks;
        let ret = first(...args);
        others.reduce((a,b)=>{
            return b(a);
        },ret)
    }
}
// let hook = new SyncWaterfallHook(['name']);
// hook.tap('react', function (name) {
//     console.log('react', name);
//     return 'reack ok'
// })
// hook.tap('node', function (data) {
//     console.log('node', data);
//     return 'node ok';
// })
// hook.tap('webpack', function (data) {
//     console.log('webpack', data);
// })
// hook.call('hehe');

class SyncLoopHook {
    // 同步遇到某个不返回undefiend的监听函数会多次执行
    constructor(args) {
        this.tasks = [];
    }
    tap(name, task) {
        this.tasks.push(task);
    }
    call(...args) {
        this.tasks.forEach(task=>{
            let ret;
            do {
                ret = task(...args)
            } while (ret!=undefined);
        })
    }
}
// let hook = new SyncLoopHook(['name']);
// let total = 0;
// hook.tap('react', function (name) {
//     console.log('react', name);
//     return ++total == 3 ? undefined : 'enen' ;
// })
// hook.tap('node', function (data) {
//     console.log('node', data);
// })
// hook.tap('webpack', function (data) {
//     console.log('webpack', data);
// })
// hook.call('hehe');

class AsyncParralleHook {
    constructor(args) {
        this.tasks = [];
    }
    tapAsync(name, task) {
        this.tasks.push(task);
    }
    callAsync(...args) {
        let finalCallback = args.pop();
        let index = 0;
        let done = () => {
            index++;
            if (index == this.tasks.length) {
                finalCallback();
            }
        }
        this.tasks.forEach(task=>{
            task(...args,done);
        })
    }
}
let hook = new AsyncParralleHook(['name']);
hook.tapAsync('react', function (name,cb) {
    setTimeout(() => {
        console.log('react', name);
        cb();
    }, 1000);
})
hook.tapAsync('node', function (name,cb) {
    setTimeout(() => {
        console.log('node', name);
        cb();
    }, 1000);
})
hook.callAsync('hehe',function(){
    console.log('end');
});