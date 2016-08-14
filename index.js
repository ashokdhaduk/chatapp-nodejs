var http = require('http');
var express = require('express');
var app = express();
// app.use(app.router);
 
var server = http.createServer(app);

var io = require('socket.io').listen(server);

server.listen('3000', function() {
	console.log('Server is Running');
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});	

// var c = [];

io.on('connection', function(socket){
	console.log("user connected");
	
	socket.on('message', function(data){
		
		// count = c.length + 1;
		// c.push(data);
		io.emit('show message', data);
		// io.emit('count', count);
	});
	socket.on('disconnect', function(){
		console.log('user disconnected!!');
		var c = [];
	})
});

