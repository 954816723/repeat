function debounce(func, wait, options) {
    let lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime

    let lastInvokeTime = 0
    let leading = true
    let maxing = false
    let trailing = true

    // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
    const useRAF = (!wait && wait !== 0 && typeof root.requestAnimationFrame === 'function')

    if (typeof func != 'function') {
        throw new TypeError('Expected a function')
    }
    wait = +wait || 0
    function invokeFunc(time) {
        const args = lastArgs
        const thisArg = lastThis
        console.log('zhixing');
        
        lastArgs = lastThis = undefined
        console.log(args);
        
        lastInvokeTime = time
        result = func.apply(thisArg, args)
        return result
    }

    function startTimer(pendingFunc, wait) {
        if (useRAF) {
            return root.requestAnimationFrame(pendingFunc)
        }
        return setTimeout(pendingFunc, wait)
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time
        // Start the timer for the trailing edge.
        timerId = startTimer(timerExpired, wait)
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result
    }
    function remainingWait(time) {
        const timeSinceLastCall = time - lastCallTime
        const timeSinceLastInvoke = time - lastInvokeTime
        const timeWaiting = wait - timeSinceLastCall

        return maxing ?
            Math.min(timeWaiting, maxWait - timeSinceLastInvoke) :
            timeWaiting
    }
    function shouldInvoke(time) {
        const timeSinceLastCall = time - lastCallTime
        const timeSinceLastInvoke = time - lastInvokeTime

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
            (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait))
    }
    function timerExpired() {
        console.log(1);
        
        const time = Date.now()
        if (shouldInvoke(time)) {
            console.log(2);
            
            return trailingEdge(time)
        }
        // Restart the timer.
        console.log(5);
        
        timerId = startTimer(timerExpired, remainingWait(time))
    }
    function trailingEdge(time) {
        timerId = undefined
        console.log(3);
        
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        console.log(lastArgs);
        
        if (trailing && lastArgs) {
            console.log(4);
            console.log(lastArgs);
            
            return invokeFunc(time)
        }
        lastArgs = lastThis = undefined
        return result
    }
    function debounced(...args) {
        const time = Date.now()
        const isInvoking = shouldInvoke(time)

        lastArgs = args
        lastThis = this
        lastCallTime = time
        if (isInvoking) {
            if (timerId === undefined) {
                console.log(0);
                
                return leadingEdge(lastCallTime)
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                console.log(000);
                
                timerId = startTimer(timerExpired, wait)
                return invokeFunc(lastCallTime)
            }
        }
        if (timerId === undefined) {
            console.log(00);
            
            timerId = startTimer(timerExpired, wait)
        }
        return result
    }
    return debounced
}