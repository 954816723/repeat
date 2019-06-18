let socketio = require('socket.io');
let io;
let guestNumber = 1;
let nickNames = {};
let namesUsed = [];
let currentRoom = {};

// 分配用户昵称
function assignGuessName(socket,guestNumber,nickNames,namesUsed){
    let name = 'Guest' + guestNumber;
    nickNames[socket.id] = name;
    socket.emit('nameResult',{
        success:true,
        name:name
    });
    namesUsed.push(name);
    return guestNumber + 1;
}
// 加入聊天室
function joinRoom(socket,room){
    socket.join(room);
    currentRoom[socket.id] = room;
    socket.emit('joinResult',{room:room});
    socket.broadcast.to(room).emit('message',{
        text:nickNames[socket.id] + 'has joined' + room + '.'
    });
    // let usersInRoom = io.sockets.clients(room);
    let usersInRoom = io.sockets.adapter.rooms[room];
    if(usersInRoom.length > 1){
        let msg = 'Users currently in' + room + ':';
        for(let index in usersInRoom){
            let userSockedId = usersInRoom[index].id;
            if(userSockedId !== socket.id){
                if(index > 0){
                    msg += ',';
                }
                msg += nickNames[userSockedId];
            }
        }
        msg += '.';
        socket.emit('message',{text:msg});
    }
}
// 更名请求处理
function handleNameChangeAttempts(socket,nickNames,namesUsed){
    socket.on('nameAttempt',function(name){
        if(name.indexOf('Guest') == 0){
            socket.emit('nameResult',{
                success:false,
                message:'Names cannot begin with Guest'
            })
        }else{
            if(namesUsed.indexOf(name) == -1){
                let prevName = nickNames[socket.id];
                let prevNameIndex = namesUsed.indexOf(prevName);
                namesUsed.push(name);
                nickNames[socket.id] = name;
                delete namesUsed[prevNameIndex];
                socket.emit('nameResult',{
                    success:true,
                    name:name
                });
                socket.broadcast.to(currentRoom[socket.id]).emit('message',{
                    text:prevName + 'is now known as ' + name + '.'
                })
            }else{
                socket.emit('nameResult',{
                    success:false,
                    message:'That name is already in use'
                })
            }
        }
    })
}
// 发送聊天消息
function handleMessageBroadcasting(socket){
    socket.on('message',function(message){
        socket.broadcast.to(message.room).emit('message',{
            text:nickNames[socket.id] + ':' + message.text
        })
    })
}
// 创建房间
function handleRoomJoining(socket){
    socket.on('join',function(room){
        socket.leave(currentRoom[socket.id]);
        joinRoom(socket,room.newRoom);
    })
}
// 用户断开连接
function handleClientDisconnection(socket){
    socket.on('disconnect',function(){
        let nameIndex = namesUsed.indexOf(nickNames[socket.id]);
        delete namesUsed[nameIndex];
        delete nickNames[socket.id];
    })
}

exports.listen = function(server){
    io = socketio.listen(server);
    io.serveClient('log level',1);
    io.sockets.on('connection',function(socket){
        // 用户连接赋予访客名
        guestNumber = assignGuessName(socket,guestNumber,nickNames,namesUsed);
        // 用户连接上放入聊天室Lobby
        joinRoom(socket,'Lobby');
        // 处理消息,更名,聊天室创建和切换
        handleMessageBroadcasting(socket,nickNames);
        handleNameChangeAttempts(socket,nickNames,namesUsed);
        handleRoomJoining(socket);
        // 用户发送请求时,提供已被占用的聊天室的列表
        socket.on('rooms',function(){
            // socket.emit('rooms',io.sockets,manager.rooms);
            socket.emit('rooms',io.sockets.adapter.rooms);
        });
        // 断开连接 
        handleClientDisconnection(socket,nickNames,namesUsed);
    });
}