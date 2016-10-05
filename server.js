var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("my socket server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	console.log('new connection: ' + socket.id);

	socket.on('clicky', mouseMessage1);
	socket.on('boom', mouseMessage2);
	socket.on('boom2', mouseMessage3);

	function mouseMessage1(data) {
		socket.broadcast.emit('clicky', data);
		console.log("test1");
	}

	function mouseMessage2(data) {
		socket.broadcast.emit('boom', data);
		console.log("test2");
	}

	function mouseMessage3(data) {
		socket.broadcast.emit('boom2', data);
		console.log("boom2");
	}

}