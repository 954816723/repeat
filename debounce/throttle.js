function throttle(func,wait){
    return debounce(func,wait,{
        maxWait:wait
    })
}