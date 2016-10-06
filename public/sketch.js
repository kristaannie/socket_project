//how to send button pushes
//host on heroku





var socket;

function setup(){
  createCanvas(windowWidth, windowHeight);
  socket = io.connect('https://tranquil-ravine-39783.herokuapp.com/');
  
  var hit = false;

}



function draw(){
	background(200,80,30);
	stroke(255);
	fill(100,20,100);
	ellipse(windowWidth/2,100,150,150);
	fill(150,30,100);
	ellipse(windowWidth/2, 300, 150, 150);
	fill(120,70,80);
	ellipse(windowWidth/2, 500, 150, 150);


}

function mousePressed(){

	ellipseButton(windowWidth/2,100,150,150, "clicky", buttonHit);
	ellipseButton(windowWidth/2, 300, 150, 150, "boom", buttonHit);
	ellipseButton(windowWidth/2, 500, 150, 150, "boom2", buttonHit);

	

	
}

function ellipseButton(x,y,w,h, name, callback){
	var hit = false;

	hit = collidePointCircle(mouseX,mouseY,x,y,w,h); //see if the mouse is in the rect

	if(hit){ //if its inside fire the callback
		callback(hit, name);
	}
}

// function ellipseButton2(x,y,w,h, callback){
// 	var hit = false;

// 	hit = collidePointCircle(mouseX,mouseY,x,y,w,h); //see if the mouse is in the rect

// 	if(hit){ //if its inside fire the callback
// 		callback(hit);
// 	}
// }


function buttonHit(callbackData, name){
	//do things when the button gets pressed.......
	console.log(name)
	
	var data = {
		x: mouseX,
		y: mouseY

	}

	socket.emit(name, data);
}

// function buttonHit2(callbackData){
// 	//do things when the button gets pressed.......
// 	console.log("dang")
	
// 	var data = {
// 		x: mouseX,
// 		y: mouseY

// 	}

// 	socket.emit('boom', data);
// }


