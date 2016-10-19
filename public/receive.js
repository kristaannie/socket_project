
var socket;


var counterReceive;
circleColor = 0;



function setup() {

  background(200,80,30);
  createCanvas(windowWidth, windowHeight);
  textFont('Roboto Mono'); 

  //work on the web!!!!!!!!!!!!
 // socket = io.connect('https://tranquil-ravine-39783.herokuapp.com/');
  
 //work on your localhost!!!!!!!!!!!  
 socket = io.connect('localhost:3000')


  socket.on('navigate', navigate); 
  socket.on('fragment', fragment);
  socket.on('blueforms', blueforms);
  socket.on('particle', particle);
  socket.on('modify', modify);
  socket.on('trace', trace);
  socket.on('submit', submit);
  socket.on('windows', windows);
  socket.on('collect', collect);


  var seconds; 
  var change;



}

function draw() {

  seconds = millis() / 1000;
  change = map(sin(seconds), -1, 1, 0, 100);
  	

}


function navigate(){
	console.log("click came through");
	background(57, 94, 130);
	textSize(200);
	textAlign(CENTER);
	fill(255);
	text("NAVIGATE", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);				
	
}

function fragment(){
	console.log("click 2 came through");
	background(57, 94, 130);
	textSize(200);
	fill(255);
	textAlign(CENTER)
	text("FRAGMENT", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function blueforms(){
	console.log("click 3 came through");
	background(57, 94, 130);
	textSize(200);
	fill(255);
	textAlign(CENTER)
	text("BLUEFORMS", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function particle(){
	console.log("click 3 came through");
	background(57, 94, 130);
	textSize(200);
	fill(255);
	textAlign(CENTER)
	text("PARTICLE", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function modify(){
	console.log("click 2 came through");
	background(57, 94, 130);
	textSize(200);
	fill(255);
	textAlign(CENTER)
	text("MODIFY", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function trace(){
	console.log("click 2 came through");
	background(57, 94, 130);
	textSize(200);
	fill(255);
	textAlign(CENTER)
	text("TRACE", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function submit(){
	console.log("click 2 came through");
	background(57, 94, 130);
	textSize(200);
	fill(255);
	textAlign(CENTER)
	text("SUBMIT", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function windows(){
	console.log("click 2 came through");
	background(57, 94, 130);
	textSize(220);
	fill(255);
	textAlign(CENTER)
	text("WINDOWS", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function collect(){
	console.log("click 2 came through");
	background(57, 94, 130);
	textSize(220);
	fill(255);
	textAlign(CENTER)
	text("COLLECT", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}


function eraseWord(){
	fill(43, 73, 102);
	rect(0, 0, windowWidth, windowHeight);
	console.log("word erased");
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

