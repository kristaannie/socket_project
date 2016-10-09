circleColor = 0;

var socket;

function setup() {
  background(200,80,30);
  createCanvas(windowWidth, windowHeight);
  // socket = io.connect('https://tranquil-ravine-39783.herokuapp.com/');
  
  socket = io.connect('localhost:3000')
  socket.on('navigate', changeColor); 
  socket.on('fragment', addCircles);
  socket.on('blueforms', hello);
  socket.on('particle', hello2);
  socket.on('modify', hello3);
  socket.on('trace', addCircles);
  socket.on('submit', hello);
  socket.on('windows', addCircles);
  socket.on('collect', hello2);

}

function draw() {

	
	
  
}

function changeColor(){
	console.log("click came through");
	background(250);
	textSize(40);
	fill(0);
	text("hello tommy", windowWidth/2, windowHeight/2);
}

function addCircles(){
	console.log("click 2 came through");
	background(0);
	textSize(40);
	fill(255);
	text("ur butt", windowWidth/2, windowHeight/2);
}

function hello(){
	console.log("click 3 came through");
	background(100);
	textSize(40);
	fill(200, 0, 0);
	text("hello tommy", windowWidth/2, windowHeight/2);
}

function hello2(){
	console.log("click 3 came through");
	background(100);
	textSize(40);
	fill(200, 0, 0);
	text("i want snacks", windowWidth/2, windowHeight/2);
}

function hello3(){
	console.log("click 2 came through");
	background(0);
	textSize(40);
	fill(255);
	text("and thangs", windowWidth/2, windowHeight/2);
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

