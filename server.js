var express = require('express');
var app = express();

//for working on localhost!!! 
var server = app.listen(3000);

//for working on interwebs!!! 
// var server = require('http').createServer(app);

var io = require('socket.io').listen(server);


//for working on the web!! 
// server.listen(process.env.PORT || 3000);




app.use(express.static('public'));

console.log("my socket server is running");

var socket = require('socket.io');

//unsure about this
// var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	console.log('new connection: ' + socket.id);

	socket.on('navigate', mouseMessage1);
	socket.on('fragment', mouseMessage2);
	socket.on('blueforms', mouseMessage3);
	socket.on('particle', mouseMessage4);
	socket.on('modify', mouseMessage5);
	socket.on('trace', mouseMessage6);
	socket.on('submit', mouseMessage7);
	socket.on('windows', mouseMessage8);
	socket.on('collect', mouseMessage9);

	function mouseMessage1(data) {
		socket.broadcast.emit('navigate', data);
		console.log("test1");
	}

	function mouseMessage2(data) {
		socket.broadcast.emit('fragment', data);
		console.log("test2");
	}

	function mouseMessage3(data) {
		socket.broadcast.emit('blueforms', data);
		console.log("test3");
	}

	function mouseMessage4(data) {
		socket.broadcast.emit('particle', data);
		console.log("test4");
	}

	function mouseMessage5(data) {
		socket.broadcast.emit('modify', data);
		console.log("test5");
	}

	function mouseMessage6(data) {
		socket.broadcast.emit('trace', data);
		console.log("test6");
	}

	function mouseMessage7(data) {
		socket.broadcast.emit('submit', data);
		console.log("test7");
	}

	function mouseMessage8(data) {
		socket.broadcast.emit('windows', data);
		console.log("test8");
	}

	function mouseMessage9(data) {
		socket.broadcast.emit('collect', data);
		console.log("test9");
	}

}