function debounce(func,wait,opts={}){
    let leading = true, //第一次点击时触发
        trailing = true, //最后一次也触发
        lastCallTime, //最后调用的时间
        timeout,
        lastThis, //返回函数的this
        lastArgs, //返回函数的参数
        maxWait, //throttle中最大等待时间
        lastInvokeTime; //最终调用函数的时间
    if ('maxWait' in opts) {
        maxWait = opts.maxWait;
    }
    // shouldInvoke 是否应该调用
    let shouldInvoke = function(now){
        let sinceLastTime = now - lastCallTime;
        let sinceLastInvoke = now - lastInvokeTime;
        // 第一次
        return lastCallTime === undefined || sinceLastTime > wait || sinceLastInvoke >= wait;
    }
    // leadingEdge 是否第一次执行
    let invokeFunc = function(now){
        let arg = lastArgs,
            that = lastThis;
        lastArgs = lastThis = undefined;
        // 记录最后调用时间
        lastInvokeTime = now;
        func.apply(that,arg);
    }
    // startTimer 开启一个定时器
    let startTimer = function(timerExpired,wait){
        timeout = setTimeout(timerExpired,wait);
    }
    let remainingWait = function (now) {
        return wait - (now - lastCallTime);
    }
    let trailingEdge = function(now){
        timeout = undefined;
        // 判断是否存在lastArgs,只点击一次lastArgs被重置为undefined
        if (trailing && lastArgs) {
            invokeFunc(now)
        }
    }
    let timerExpired = function(){
        let now = Date.now();
        if(shouldInvoke(now)){
            // 触发结束的方法
            return trailingEdge(now);
        }
        startTimer(timerExpired,remainingWait(now));
    }
    let leadingEdge = function(now){
        lastInvokeTime = now;
        // 开启一个定时器,看下一次定时器到了,是否要执行func
        startTimer(timerExpired,wait);
        if(leading){
            return invokeFunc(now);
        }
    }
    let debounced = function(...args){
        lastThis = this;
        lastArgs = args;
        let now = Date.now();
        // 判断当前的debounce是否需要执行
        let isInvoking = shouldInvoke(now);
        lastCallTime = now;
        if(isInvoking){
            if (timeout === undefined) {
                return leadingEdge(now);
            }
        }
    }   
    return debounced;
}   