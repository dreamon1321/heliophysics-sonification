//var x = 128;
var slider;

function setup() {
	createCanvas(400, 400);
	slider = createSlider(0, 255, 128);		//min, max, starting point
}

function draw() {
	//slider.value(x);
	//x += random(-5, 5);
	background(slider.value());
}