var http = require('http').Server();
var io = require('socket.io')(http);

io.on('connection', function (socket) {
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
