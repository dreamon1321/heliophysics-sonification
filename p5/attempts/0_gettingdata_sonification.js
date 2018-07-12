// Table Data variable
var url;
var data;
var rowNum;
var colNum;

// For automatically playing the song
var rowIndex = 0;
var trigger = 0;
var autoplay = true;

// Set a total length of 1 minute = 60 s = 60000 millis
var total_time = 50000;
var tick;
var osc;

// Mins / Maxs
var price_min;
var price_max;
var delinq_min;
var delinq_max;
var sold_min;
var sold_max;

function preload() {
	url = 'https://raw.githubusercontent.com/hopelessoptimism/data-sonification/master/data/housing_bubble.csv';
	data = loadTable(url, 'csv', 'header');
}

// SETUP only occurs once
function setup() {
	rowNum = data.getRowCount();
	colNum = data.getColumnCount();

	console.log(rowNum + ' rows\n' + colNum + ' columns');

	// Min and max house_price_index		***MATH.MIN/MAX WILL RETURN NAN
	price_min = min(data.getColumn('house_price_index'));
	price_max = max(data.getColumn('house_price_index'));
	
	// Min and max delinquency
	delinq_min = min(data.getColumn('delinquency'));
	delinq_max = max(data.getColumn('delinquency'));

	// Min and max houses_sold
	sold_min = min(data.getColumn('houses_sold'));
	sold_max = max(data.getColumn('houses_sold'));

	// TODO: compute the note duration (total_time / rowNum)
	tick = total_time / data.getRowCount();

	// debugging statements
	console.log('Total Duration: ' + tick);

	// A Sine Oscillator, for House Price Index
	osc1 = new p5.TriOsc();

	// Second oscillator, for Delinquency
	osc2 = new p5.SinOsc();

	// Start the oscillators silent
	osc1.start();
	osc2.start();
	osc1.amp(0);
	osc2.amp(0);
}

// DRAW occurs continuously, order is important
function draw() {
	// If autoplaying and it's time for the next note
	if (autoplay && (millis() > trigger)) {

	// 	Play a note with the 'house_price_index' column value
		playNote(data.get(rowIndex, 'house_price_index'), 500, osc1, price_min, price_max);

	// 	Play a second voicing according to the `delinquency` rate
		playNote(data.get(rowIndex, 'delinquency'), 500, osc2, delinq_min, delinq_max);

	// 	Modulate the master volume according to the `houses_sold` column
	var volume = map(data.get(rowIndex, 'houses_sold'), sold_min, sold_max, 0.25, 1.0);
	masterVolume(volume);
	//console.log(volume);

	// 	Advance trigger by 'duration'
	trigger = millis() + tick;

	// 	TODO: drop the bass when the market crashes

	//  Advance the index by one to the next note / data point
	rowIndex++;

	} else if (rowIndex >= data.getRowCount()) {
	// 	At the end of the data file, stop autoplaying
	autoplay = false;
	osc1.stop();
	osc2.stop();
	}

}

function playNote(position, duration, osc, lower, upper) {
	// Map the data point to a corresponding MIDI note
	// http://newt.phys.unsw.edu.au/jw/notes.html
	// map(value, start1, stop1, midiMin, midiMax, withinBounds);
	// MIDI 43 = ~100 Hz		MIDI 96 = ~2,000 Hz
	midi = round(map(position, lower, upper, 43, 96, true))

	// TODO: set the oscilator frequency to play the midi note
	osc.freq(midiToFreq(midi));

	// Fade in the amplitude 
	osc.fade(0.5, 0.2);

	// Fade out after duration
	if (duration) {
		setTimeout(function() {
			osc.fade(0, 0.2);
		}, duration - 50);
	}

}