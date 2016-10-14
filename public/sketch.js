

var socket;

var isHit = false;

var counter;


//particle stuff 
var of;
var s="PARTICLEPARTICELPARTICLEPARTICLE"

function ftext(fountain, particle) {
  stroke(fountain.colors[Math.floor(particle.life*fountain.colors.length)]);
  noFill();
  textSize(particle.partSize);
  text(s[particle.id%26], particle.location.x, particle.location.y);
}



    // 	this.buttonSelect = function(name) {
    // 		if (isHit == true) {
    // 			// var a = map(counter, 0, 30, 0, 255)
				// console.log("triggered");
				// rectMode(CORNER);
				// fill(0);
			 //    rect(0, 0, windowWidth, windowHeight);
				// of.Draw();
			 //    of.Create();
			 //  	of.Step();
			 //    noStroke();
				// fill(255);
				// textSize(16);
			 //    setTimeout(stop, 80000);
			 //    function stop () {
			 //  		isHit = false;
		  //   	}

    	// 	}
    	// }
    	
// }

function setup(){
  createCanvas(screen.width, screen.height);

  // for working on the web! 
  socket = io.connect('https://tranquil-ravine-39783.herokuapp.com/');

  //for working on localhost! 
  // socket = io.connect('localhost:3000');
	
  textFont('Roboto Mono'); 

  var hit = false;

  counter = 0;


  //particle stuff 
  var t =
    {
        shape: "ellipse",
        colors: [[255,150],[200,150],[150,150]],
        lifetime: 600,
        angle: [640, 100],
        size: [1, 5],
        dxy: [0.1, 0.1],
        x: 0.6,
        y: 0.1
    };

    Fountain_display("text", ftext); //set draw function based on shape name
    of = new Fountain(null, t);

    
}


function draw(){

	var collumn1 = windowWidth * (1/4) + 80;
	var collumn2 = windowWidth * (2/4) + 60;
	var collumn3 = windowWidth * (3/4) + 40;
	var row1 = windowHeight * (1/4);
	var row2 = windowHeight * (2/4);
	var row3 = windowHeight * (3/4);
	
	background(57, 94, 130);



	// function displayText(word, x, y){
	// 	noStroke();
	// 	fill(255,200);
	// 	textSize(20);
	// 	textAlign(CENTER);
	// 	text(word, x, y);
	// }

	seconds = millis() / 1000;
    change = map(sin(seconds), -1, 1, 0, 10)

    function wordButton(x, y, size, r, g, b, name) {
    	this.x = x,
    	this.y = y,
    	this.r = r,
    	this.g = g,
    	this.size = size;
    	this.name = function (){
    		text(name, x, y + 7);
    		noStroke();
			fill(255,200);
			textSize(22);
			textAlign(CENTER);
    	}
    	this.display = function () {
    	 stroke(255);
    	 fill(r,g,b, 70);
    	 ellipse( x, y, size + change, size + change)
    	 }

	}


	


	var c1r1 = new wordButton (collumn1, row1, 150, 10, 20, 40, "navigate");
	c1r1.display();
	// c1r1.name();
	

	var c2r1 = new wordButton (collumn2, row1, 150, 10, 10, 40, "fragment");
	c2r1.display();
	// c2r1.name();

	var c3r1 = new wordButton (collumn3, row1, 150, 10, 30, 40, "blueforms");
	c3r1.display();
	// c3r1.name();


	var c1r2 = new wordButton (collumn1, row2, 150, 10, 10, 40, "particle");
	c1r2.display();

	var c2r2 = new wordButton (collumn2, row2, 150, 10, 30, 40, "modify");
	c2r2.display();

	var c3r2 = new wordButton (collumn3, row2, 150, 20, 10, 40, "trace");
	c3r2.display();

	var c1r3 = new wordButton (collumn1, row3, 150, 10, 10, 40, "submit");
	c1r3.display();

	var c2r3 = new wordButton (collumn2, row3, 150, 10, 40, 40, "windows");
	c2r3.display();

	var c3r3 = new wordButton (collumn3, row3, 150, 10, 10, 30, "collect");
	c3r3.display();

	noStroke();
	fill(255,200);

	textSize(22);

	c1r1.name();
	c2r1.name();
	c3r1.name();
	c1r2.name();
	c2r2.name();
	c3r2.name();
	c1r3.name();
	c2r3.name();
	c3r3.name();


	if (isHit == true) {
		counter++;
		console.log(counter);
		if (counter == 150) { 
			console.log("squares?")
			counter = 150;
		}
			//screen black
			var a = map(counter, 0, 150, 0, 240)
			rectMode(CORNER);
			fill(0, a);
		    rect(0, 0, screen.width, screen.height);
		    //fountain
			of.Draw();
		    of.Create();
		  	of.Step();
		    noStroke();
			fill(255);
			//word
			textAlign(CENTER);
			textSize(40 + change);
			fill(200, a -100);
			text("((TRANSMITTING))", windowWidth/2 + 75, windowHeight/2 + 20);

		    }
	    
	
	


}



function mousePressed(){

	


	var collumn1 = windowWidth * (1/4) + 80;
	var collumn2 = windowWidth * (2/4) + 60;
	var collumn3 = windowWidth * (3/4) + 40;
	var row1 = windowHeight * (1/4);
	var row2 = windowHeight * (2/4);
	var row3 = windowHeight * (3/4);

	ellipseButton(collumn1, row1, 150, 150, "navigate", buttonHit);
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
	// var hit = false;

	console.log(mouseX, mouseY);

	hit = collidePointCircle(mouseX,mouseY,x,y,w,h); //see if the mouse is in the rect

	if(hit){ //if its inside fire the callback
		callback(hit, name);
		console.log("got here")
		isHit = true;
		setTimeout(stop, 90000);
		function stop () {
		  	isHit = false;
		  	counter = 0;
		}
		// nameHit  = name;
	}
}



function buttonHit(callbackData, name){
	//do things when the button gets pressed.......
	console.log(name);

	
	var data = {
		x: mouseX,
		y: mouseY

	}

	socket.emit(name, data);
}



