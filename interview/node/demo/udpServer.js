let dgram = require('dgram');
let socket = dgram.createSocket('udp4');

socket.bind(41234, '10.123.19.137')
socket.on('message', (msg, rinfo) => {
    // 设置为true表示要广播
    socket.setBroadcast(true);
    socket.send(Buffer.from(msg), 0, msg.length, 41234, '10.123.19.255')
})