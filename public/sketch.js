//how to send button pushes
//host on heroku

var collumn1;
var collumn2;
var collumn3;
var row1;
var row2;
var row3;



var socket;

//particle stuff 
var of;
var s="PARTICLEPARTICELPARTICLEPARTICLE"

function ftext(fountain, particle) {
  stroke(fountain.colors[Math.floor(particle.life*fountain.colors.length)]);
  noFill();
  textSize(particle.partSize);
  text(s[particle.id%26], particle.location.x, particle.location.y);
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  socket = io.connect('https://tranquil-ravine-39783.herokuapp.com/');
  // socket = io.connect('localhost:3000');
	
  textFont('Roboto Mono'); 

  var hit = false;


  //particle stuff 
  var t =
    {
        // name: "test",
        shape: "text",
        colors: [[255,150],[200,150],[150,150]],
        lifetime: 600,
        angle: [640, 100],
        size: [2, 10],
        dxy: [0.1, 0.1],
        x: 0.5,
        y: 0.1
    };

    Fountain_display("text", ftext); //set draw function based on shape name
    of = new Fountain(null, t);

}



function draw(){
	background(200,80,30);


	//particle stuff
	  of.Draw();
	  of.Create();
	  of.Step();
	  noStroke();
	  fill(255);
	  textSize(16);
	  // text(of.length, width/2, 20);
	  stroke(0);

	var collumn1 = windowWidth * (1/4);
	var collumn2 = windowWidth * (2/4);
	var collumn3 = windowWidth * (3/4);
	var row1 = windowHeight * (1/4);
	var row2 = windowHeight * (2/4);
	var row3 = windowHeight * (3/4);
	
	
	function displayButton( x, y, size, r, g, b){
		stroke(255);
		strokeWeight(2);
		fill(r,g,b);
		ellipse(x, y, size, size);
	}

	function displayText(word, x, y){
		noStroke();
		fill(255,200);
		textSize(20);
		textAlign(CENTER);
		text(word, x, y);
	}




	displayButton(collumn1, row1, 120, 110, 20, 30);
	displayText("NAVIGATE", collumn1, row1 + 7);

	displayButton(collumn2, row1, 180, 120, 10, 20);
	displayText("FRAGMENT", collumn2, row1 + 7);

	displayButton(collumn3, row1, 150, 110, 20, 30);
	displayText("BLUEFORMS", collumn3, row1 + 7);

	displayButton(collumn1, row2, 150, 100, 0, 40);
	displayText("PARTICLE", collumn1, row2 + 7);

	displayButton(collumn2, row2, 110, 110, 30, 30);
	displayText("MODIFY", collumn2, row2 + 7);

	displayButton(collumn3, row2, 160, 120, 20, 30);
	displayText("TRACE", collumn3, row2 + 7);

	displayButton(collumn1, row3, 160, 140, 20, 30);
	displayText("SUBMIT", collumn1, row3 + 7);

	displayButton(collumn2, row3, 160, 110, 20, 40);
	displayText("WINDOWS", collumn2, row3 + 7);

	displayButton(collumn3, row3, 120, 110, 40, 30);
	displayText("COLLECT", collumn3, row3 + 7);


		
		


	// fill(150,30,100, 150);
	// ellipse(collumn2, row1, 150, 150);
	// fill(110,70,100, 150);
	// ellipse(collumn3, row1, 140, 140);
	// fill(100,20,100, 150);
	// ellipse(collumn1, row2, 150, 150);
	// fill(150,30,100, 150);
	// ellipse(collumn2, row2, 135, 135);
	// fill(170,70,100, 150);
	// ellipse(collumn3, row2, 120, 120);
	// fill(120,20,100, 150);
	// ellipse(collumn1, row3, 125, 125);
	// fill(103, 30, 145);
	// ellipse(collumn2, row3, 150, 150);
	// fill(181, 52, 1);
	// ellipse(collumn3, row3, 150, 150);

	
	// fill(240,50);
	// noStroke();
	// textSize(20);
	// textAlign(CENTER);
	// text("NAVIGATE", collumn1+3, row1+3);

	// noStroke();
	// textSize(20);
	// textAlign(CENTER);
	// text("FRAGMENT", collumn2, row1+7);

	// noStroke();
	// textSize(20);
	// textAlign(CENTER);
	// text("BLUEFORMS", collumn3, row1+7);

	// noStroke();
	// textSize(20);
	// textAlign(CENTER);
	// text("PARTICLE", collumn1, row2+7);

	// noStroke();
	// textSize(20);
	// textAlign(CENTER);
	// text("MODIFY", collumn2, row2+7);

	// noStroke();
	// textSize(20);
	// textAlign(CENTER);
	// text("TRACE", collumn3, row2+7);

	// noStroke();
	// textSize(20);
	// textAlign(CENTER);
	// text("SUBMIT", collumn1, row3+7);

	// noStroke();
	// textSize(20);
	// textAlign(CENTER);
	// text("WINDOWS", collumn2, row3+7);

	// noStroke();
	// textSize(20);
	// textAlign(CENTER);
	// text("COLLECT", collumn3, row3+7);


}

function mousePressed(){

	var collumn1 = windowWidth * (1/4);
	var collumn2 = windowWidth * (2/4);
	var collumn3 = windowWidth * (3/4);
	var row1 = windowHeight * (1/4);
	var row2 = windowHeight * (2/4);
	var row3 = windowHeight * (3/4);

	ellipseButton(windowWidth * (1/4), windowHeight * (1/4), 150, 150, "navigate", buttonHit);
	ellipseButton(collumn2, row1, 150, 150, "fragment", buttonHit);
	ellipseButton(collumn3, row1, 150, 150, "blueforms", buttonHit);
	ellipseButton(collumn1, row2, 150, 150, "particle", buttonHit);
	ellipseButton(collumn2, row2, 150, 150, "modify", buttonHit);
	ellipseButton(collumn3, row2, 150, 150, "trace", buttonHit);
	ellipseButton(collumn1, row3, 150, 150, "submit", buttonHit);
	ellipseButton(collumn2, row3, 150, 150, "windows", buttonHit);
	ellipseButton(collumn3, row3, 150, 150, "collect", buttonHit);

}

function ellipseButton(x,y,w,h, name, callback){
	var hit = false;
	console.log(mouseX, mouseY);

	hit = collidePointCircle(mouseX,mouseY,x,y,w,h); //see if the mouse is in the rect

	if(hit){ //if its inside fire the callback
		callback(hit, name);
		console.log("got here")
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


