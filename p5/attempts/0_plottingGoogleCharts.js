google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineChart);
var url = 'https://raw.githubusercontent.com/hopelessoptimism/data-sonification/master/data/housing_bubble.csv';

function drawLineChart() {

	$.get(url, function(csvString) {
		var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
		var data = new google.visualization.arrayToDataTable(arrayData);
		var view = new google.visualization.DataView(data);
		view.setColumns([0, 1]);

		var options = {
			title: "Getting Data Sonification",
			hAxis: { title: data.getColumnLabel },
		}
	});

	data.addColumn('number', 'unemployment');	// HEADER: 1ST COLUMN TITLE (<data type>, <data name>)
	data.addColumn('number', 'houses_sold');	// HEADER: 2ND COLUMN TITLE

	data.addRows([ [], [], [], [], [] ]); 	// Array of arrays

	var options = {
		hAxis: {
			title: 'Unemployment (%)'
		},
		vAxis: {
			title: 'Houses Sold'
		}
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

	chart.draw(data, options);

}