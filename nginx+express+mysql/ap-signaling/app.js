// var app = require('express')();
// var server = app.listen(3000);
// var io = require('socket.io').listen(server);

// io.origins(['http://localhost:8080']);


// // io.origins((origin, callback) => {
// //     console.log('origin', origin)
// //     if (origin !== 'http://localhost:8080') {
// //       return callback('origin not allowed', false);
// //     }
// //     callback(null, true);
// // });



// io.origins(['http://localhost:8080']);

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, {
    origins:'localhost:* http://localhost:* http://www.localhost:*'
});

io.on('connection', function (socket) {
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});
