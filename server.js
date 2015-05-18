/**
 * 
 */

var http = require('http');
var path = require('path');
 
var handler;
var httpServer =http.createServer(handler).listen(8080, function(req,res){
  console.log('Socket IO server has been started');
});
// upgrade http server to socket.io server
var io = require('socket.io').listen(httpServer);
 
io.sockets.on('connection',function(socket){
   socket.emit('toclient',{msg:'@Welcome !'});
   socket.on('fromclient',function(data){
       socket.broadcast.emit('toclient',data); 
       socket.emit('toclient',data);
       console.log('Message from client :'+data.msg);
   })
});
