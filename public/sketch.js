//figure out how to do two canvases?
//how to send button pushes
//host on heroku



var socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200,80,30);

  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing); 

}

function newDrawing(data) {
	stroke(255);
	fill(0);
	ellipse(data.x, data.y, 20, 20);


}

function mouseDragged() {
	console.log("you draggin");

	var data = {
		x: mouseX,
		y: mouseY
	}

	socket.emit('mouse', data);

	stroke(0);
	fill(255);
	ellipse(mouseX, mouseY, 20, 20);
}

function draw() {
	
	
  
}