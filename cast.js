function Broadcast(handler) {
	this.handler = handler || function (msg) {console.log('Broadcast handler not exists');};
	
	var socket = io.connect('http://www.dangsam.com:8080');
	var that = this;
	socket.on('toclient',function(data){
		that.handler(data.msg);		
	});
	
	this.send = function (msg) {
		socket.emit('fromclient',{msg: msg});
	}
}
