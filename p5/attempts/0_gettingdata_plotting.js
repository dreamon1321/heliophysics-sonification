var url = 'https://raw.githubusercontent.com/hopelessoptimism/data-sonification/master/data/housing_bubble.csv';

var margin = { top: 20, right: 20, bottom: 30, left: 40 };
var width = 960 - margin.left - margin.right;
var height - 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
				.range([0, width]);
var y = d3.scale.linear()
				.range([height, 0]);

var color - d3.scale.category20b();

var xAxis = d3.svg.axis()
					.scale(x)
					.orient('bottom');
var yAxis = d3.svg.axis()
					.scale(y)
					.orient('left'):

var svg = d3.select('body').append('svg')
						.attr('width', width + margin.left + margin.right)
						.attr('height', height + margin.top + margin.bottom)
				.append('g')
						.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.csv(url, function(error, data) {
	if (error) throw error;

	data.forEach(function(d) {
		d.house_price_index = +d.house_price_index;
		d.date = +d.date;
	});

	x.domain(d3.extent(data, function(d) {
		return d.date;
	})).nice();
	y.domain(d3.extent(data, function(d) {
		return d.house_price_index;
	})).nice();

	svg.append('g')
			.attr('class', 'x axis')
			.attr('transform', 'translate(0' + height + ')')
			.call(xAxis)
		.append('text')
			.attr('class', 'label')
			.attr('x', width)
			.attr('y', -6)
			.style('text-anchor', 'end')
			.text('Date (year-month-day)');

	svg.selectAll('.dot')
			.data(data)
		.enter().append('circle')
			.attr('class', 'dot')
			.attr('r', 4)
			.attr('cx', function(d) { return x(d.date); })
			.attr('cy', function(d) { return y(d.house_price_index); })
			.style('fill', function(d) { return color(d.houses_sold) });

	var legend = svg.selectAll('.legend')
						.data(color.domain())
					.enter().append('g')
						.attr('class', 'legend')
						.attr('transform', function(d, i) { return 'translate(0,' + i + 20 + ')'; });
	legend.append('rect')
			.attr('x', width-15)
			.attr('width', 15)
			.attr('height', 15)
			.style('fill', color);
	legend.append('text')
			.attr('x', width-20)
			.attr('y', 10)
			.attr('dy', '.35em')
			.style('text-anchor', 'end')
			.text(function(d) { return d; });

});