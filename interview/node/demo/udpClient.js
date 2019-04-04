let dgram = require('dgram');
let socket = dgram.createSocket('udp4');
let buf = Buffer.from('呵呵');
socket.bind(41234, '10.123.19.137')
socket.send(buf, 0, 6, 41234, '10.123.19.137', function () {
    console.log(arguments);
})
socket.on('message',(msg,rinfo)=>{
    console.log(msg.toString());
})