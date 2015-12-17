/**
 * Created by Mikalai on 11/25/2015.
 */
var log = require('./../libs/log')(module);
module.exports = function(server) {
    var io = require('socket.io').listen(server);
    io.set('origins', 'localhost:*'); //доступ только из домена localhost
    io.set('logger', log);

    io.sockets.on('connection', function(socket){

        socket.on('message', function(text, cb){
            socket.broadcast.emit('message', text);
            cb && cb();
        });
    });
};