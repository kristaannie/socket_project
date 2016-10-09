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


function wordButton(x, y, size, r, g, b) {
    	this.x = x,
    	this.y = y,
    	this.r = r,
    	this.g = g,
    	this.size = size;
    	this.display = function () {
    	 stroke(255);
    	 fill(r,g,b);
    	 ellipse( x, y, size, size)
    	}
    	this.buttonSelect = function (mouseIsPressed) {
    	   r = r + 1;
    	   size = size + 1 % windowWidth;
    	}
    }

function setup(){
  createCanvas(windowWidth, windowHeight);
  // socket = io.connect('https://tranquil-ravine-39783.herokuapp.com/');
  socket = io.connect('localhost:3000');
	
  textFont('Roboto Mono'); 

  var hit = false;


  //particle stuff 
  var t =
    {
        // name: "test",
        shape: "ellipse",
        colors: [[255,150],[200,150],[150,150]],
        lifetime: 600,
        angle: [640, 100],
        size: [1, 5],
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
	
	
	// function displayButton( x, y, size, r, g, b){
	// 	stroke(255);
	// 	strokeWeight(2);
	// 	fill(r,g,b);
	// 	ellipse(x, y, size, size);
	// }



	function displayText(word, x, y){
		noStroke();
		fill(255,200);
		textSize(20);
		textAlign(CENTER);
		text(word, x, y);
	}



	var c1r1 = new wordButton (collumn1, row1, 100, 110, 20, 30);
	c1r1.display();

	var c2r1 = new wordButton (collumn2, row1, 200, 110, 20, 30);
	c2r1.display();

	var c3r1 = new wordButton (collumn3, row1, 110, 110, 20, 30);
	c3r1.display();

	var c1r2 = new wordButton (collumn1, row2, 110, 20, 30);
	c1r2.display();

	var c2r2 = new wordButton (collumn2, row2, 110, 20, 30);
	c2r2.display();

	var c3r2 = new wordButton (collumn3, row2, 110, 20, 30);
	c3r2.display();

	var c1r3 = new wordButton (collumn1, row3, 110, 20, 30);
	c1r3.display();

	var c2r3 = new wordButton (collumn2, row3, 110, 20, 30);
	c2r3.display();

	var c3r3 = new wordButton (collumn3, row3, 110, 20, 30);
	c3r3.display();




	// displayButton(collumn1, row1, 120, 110, 20, 30);
	// displayText("NAVIGATE", collumn1, row1 + 7);

	// displayButton(collumn2, row1, 180, 120, 10, 20);
	// displayText("FRAGMENT", collumn2, row1 + 7);

	// displayButton(collumn3, row1, 150, 110, 20, 30);
	// displayText("BLUEFORMS", collumn3, row1 + 7);

	// displayButton(collumn1, row2, 150, 100, 0, 40);
	// displayText("PARTICLE", collumn1, row2 + 7);

	// displayButton(collumn2, row2, 110, 110, 30, 30);
	// displayText("MODIFY", collumn2, row2 + 7);

	// displayButton(collumn3, row2, 160, 120, 20, 30);
	// displayText("TRACE", collumn3, row2 + 7);

	// displayButton(collumn1, row3, 160, 140, 20, 30);
	// displayText("SUBMIT", collumn1, row3 + 7);

	// displayButton(collumn2, row3, 160, 110, 20, 40);
	// displayText("WINDOWS", collumn2, row3 + 7);

	// displayButton(collumn3, row3, 120, 110, 40, 30);
	// displayText("COLLECT", collumn3, row3 + 7);

	// if (mouseIsPressed) {
	// 	displayButton.fill(0);
	// } else {
	// 	displayButton = displayButton;
	// }



}


// function buttonSelect(){
// 	displayButton.fill(0);
// }


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



function buttonHit(callbackData, name){
	//do things when the button gets pressed.......
	console.log(name);

	background(0);
	
	var data = {
		x: mouseX,
		y: mouseY

	}

	socket.emit(name, data);
}



