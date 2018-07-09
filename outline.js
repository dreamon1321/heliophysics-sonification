function plotGraph() {
	/*
		-Creates visual graph/plot using data from CDAWeb
			-Use other js plotting libraries
			-How do you know what type of graph to plot?
			-Demo of CDAWeb plot code?

		-d3
		-node
	*/
}

function dataToAudio() {
	/*
		-Takes same array data, converts to sound
			-Data format of input? Data format of output?
			-Use audio js libraries

		-MIDI
	*/
}

function plotFeatures() {
	/*
		-Instrument feature
		-Rhythm feature
		-Pitch feature?
		-Speed feature?
			-Use tips from js libraries and audio sites
		-Features correspond to an audio change
			-Audio change in specific place, or changes for whole set?
			-Audio can only be changed when audio is not playing?
		-Play/Pause function for middle of audio? Or will audio restart after playing through and allow user to Play again?
			-Answer to this feature has implications on other features listed
		-Add audio time axis to bottom of graph w/o interfering with original plot axes

		-p5
		-node
	*/
}

function interaction() {
	/*
		-Corresponds with audio control features / plotFeatures()
		-Constantly listens for clicks / sliding of controls
		-Alters audio accordingly

		-node
	*/
}

function runningLine() {
	/*
		-Displays a vertical line that corresponds with audio time axis in 	plotFeatures(), moves continuously until reaching end of audio file
		-Also depends on Play/Pause functionality in plotFeatures()

		-p5 (see sketch.js)
	*/
}