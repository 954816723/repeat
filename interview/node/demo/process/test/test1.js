process.on('message',function(msg){
    process.send('test1:'+msg)
});
let i = 0;
let timer = setInterval(() => {
    process.stdout.write(new Date().toUTCString());
    if (++i >=10) {
        clearInterval(timer);
    }
}, 1000);