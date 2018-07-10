// Table Data variable
var data;

// For automatically playing the song
// var index = 0;
// var trigger = 0;
// var autoplay = true;

// Set a total length of 1 minute = 60 s = 60000 millis
// var total_time = 50000;
// var tick;
// var osc;

// Mins / Maxs
// var price_min;
// var price_max;
// var delinq_min;
// var delinq_max;
// var sold_min;
// var sold_max;

function preload() {
	var url = 'https://github.com/hopelessoptimism/data-sonification/blob/master/Housing/data/housing_bubble.csv';
	data = loadTable(url, 'csv', 'header');
}

// SETUP only occurs once
function setup() {
	var rowNum = data.getRowCount();
	var colNum = data.getColumnCount();

	console.log(rowNum + ' rows\n' + colNum + ' columns');

	// TODO: compute the note duration (total_time / rowNum)
	// TODO: find the min and max house_price_index
	// TODO: find the min and max delinquency
	// TODO: find the min and max hosues_sold

	// debugging statements
	// console.log('Total Duration: ' + tick);
	// console.log('Price Min: ' + price_min);
	// console.log('Price Max: ' + price_max);
	// console.log('Delinquent Min: ' + delinq_min);
	// console.log('Delinquent Max: ' + delinq_max);
	// console.log('Sold Min: ' + sold_min);
	// console.log('Sold Max: ' + sold_max);

	// A Sine Oscillator
	// osc1 = new p5.SinOsc();

	// TODO: create a second oscillator
	// osc2 = new p5.SinOsc();

	// Start the oscillators silent
	// osc1.start();
	// osc2.start();
	// osc1.amp(0);
	// osc2.amp(0);
}

// DRAW occurs continuously, order is important
function draw() {
	// If autoplaying and it's time for the next note
	// if (autoplay && (millis() > trigger)) {
	// 	TODO: play a note with the `house_price_index` column value
	// 	TODO: play a second voicing according to the `delinquency` rate
	// 	TODO: modulate the master volume according to the `houses_sold` column

	// 	advance trigger by 'duration'
	// 	trigger = millis() + tick;

	// 	TODO: drop the bass when the market crashes
	// 	TODO: advance the index by one to the next note / data point
	// } else if (index >= data.getRowCount()) {
	// 	we're at the end of the data file, stop autoplaying
	// 	autoplay = false;
	// 	oscillators.stop();
	// }
}

function playNote(position, duration, osc, lower, upper) {
	// TODO: map the data point to a corresponding MIDI note
	// http://newt.phys.unsw.edu.au/jw/notes.html
	midi = 65;

	// TODO: set the oscilator frequency to play the midi note

	// Fade in the amplitude 
	// osc.fade(0.5, 0.2);

	// Fade out after duration
	// if (duration) {
	// 	setTimeout(function() {
	// 		osc.fade(0, 0.2);
	// 	}, duration - 50);
	// }

}