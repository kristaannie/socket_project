circleColor = 0;

var socket;

function setup() {
  background(200,80,30);
  createCanvas(windowWidth, windowHeight);
  socket = io.connect('http://localhost:3000');
  socket.on('clicky', changeColor); 
  socket.on('boom', addCircles);
  socket.on('boom2', hello);

}

function draw() {

	
	
  
}

function changeColor(){
	console.log("click came through");
	textSize(40);
	fill(0);
	text("yo yo bitaches", windowWidth/2, windowHeight/2);
}

function addCircles(){
	console.log("click 2 came through");
	background(0);
	textSize(40);
	fill(255);
	text("hey hey hey", windowWidth/2, windowHeight/2);
}

function hello(){
	console.log("click 3 came through");
	background(100);
	textSize(40);
	text("hello jose", windowWidth/2, windowHeight/2);
}

// function newDrawing(data) {
// 	stroke(255);
// 	fill(0);
// 	ellipse(data.x, data.y, 20, 20);


// }

// function mouseDragged() {
// 	console.log("you draggin");

// 	var data = {
// 		x: mouseX,
// 		y: mouseY
// 	}
// var socket;



// 	socket.emit('mouse', data);

// 	stroke(0);
// 	fill(255);
// 	ellipse(mouseX, mouseY, 20, 20);
// }

