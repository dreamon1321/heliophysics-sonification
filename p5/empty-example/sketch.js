var x = 0;

// The statements in the setup() function execute once when the program begins
function setup() {
  createCanvas(720, 400);	// createCanvas must be the first statement  
  stroke(255);     			// Set line drawing color to white
  frameRate(30);
}
// The statements in draw() are executed until the 
// program is stopped. Each statement is executed in 
// sequence and after the last line is read, the first 
// line is executed again.
function draw() { 
  background(200);   			// Set the background to black
  x = x + 1; 
  if (x > width) { 
    x = 0; 
  } 
  line(x, 0, x, height); 
} 