var table;

function preload() {
	table = loadTable('https://raw.githubusercontent.com/hopelessoptimism/data-sonification/master/data/housing_bubble.csv', 'csv', 'header');
}

// SETUP only occurs once
function setup() {
	createCanvas(720, 400);
	print(table.getRowCount() + ' rows\n' + table.getColumnCount() + ' columns');
}

// DRAW occurs continuously, order is important
function draw() {
	playNote();
}

function playNote(note, ) {
	
}