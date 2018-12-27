class Promise{
    constructor(executor){
        let that = this;
        that.status = 'pending';
        that.value = undefined;
        that.reason = undefined;
        that.onFulfilledCallbacks = [];
        that.onRejectedCallbacks = [];
        function resolve(value){
            if (that.status === 'pending') {
                that.status = 'resolve';
                that.value = value;
                that.onFulfilledCallbacks.forEach(fn=>fn())
            }
        }
        function reject(resaon){
            if (that.status === 'pending') {
                that.status = 'reject';
                that.reason = reason;
                that.onRejectedCallbacks.forEach(fn=>fn())
            }
        }
        try {
            executor(resolve,reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onFulfilled,onRejected){
        let that = this,
            promise2;
        promise2 = new Promise((resolve,reject)=>{
        if (that.status === 'resolve') {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(that.value);
                        resolvePromise(promise2,x,resolve,reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
        }
        if (that.status === 'reject') {
                setTimeout(() => {
                    try {
                        let x = onRejected(that.reason);
                        resolvePromise(promise2,x,resolve,reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
        }
        if (that.status === 'pending') {
            that.onFulfilledCallbacks.push(function () {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(that.value);
                            resolvePromise(promise2,x,resolve,reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0);
            })
            that.onRejectedCallbacks.push(function(){
                    setTimeout(() => {
                        try {
                            let x = onRejected(that.reason);
                            resolvePromise(promise2,x,resolve,reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0);
            })
        }
        })
        return promise2;
    }
    catch(fn){
        this.then(null,fn)
    }
}
function resolvePromise(promise2,x,resolve,reject){
    if (promise2 === x) {
        return reject(new TypeError('error'));
    }
    let called;
    if (x != null && (typeof x === 'function' || typeof x === 'object')) {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, err => {
                    if (called) return;
                    called = true;
                    reject(err);
                })
            } else {
                // if (called) return;
                // called = true;
                resolve(x);
            }
        } catch (e) {
            if(called) return;
            called = true;
            reject(e)
        }
    }else{
        resolve(x)
    }
}
Promise.resolve = (value)=>{
    return new Promise((resolve,reject)=>{
        resolve(value)
    })
}
Promise.reject = (reason)=>{
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}
Promise.all = (promises)=>{
    let result = [],
        i = 0;
    function processVal(val,i,resolve){
        result[i] = val;
        i++;
        if (i===promises.length) {
            return resolve(result)
        }
    }
    return new Promise((resolve,reject)=>{
        promises.forEach((fn,i)=>{
            fn.then(val=>{
                processVal(val,i,resolve)
            },reject)
        })
    })
}
Promise.race = ()=>{}