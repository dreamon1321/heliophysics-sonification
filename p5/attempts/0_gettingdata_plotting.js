var url = 'https://raw.githubusercontent.com/hopelessoptimism/data-sonification/master/data/housing_bubble.csv';

d3.csv(url, function(data) {
	// Variables
	var body = d3.select('body');
	var margin = { top: 50, right: 50, bottom: 50, left: 50 };
	var height = 500 - margin.top - margin.bottom;
	var width = 500 - margin.left - margin.right;
	var formatPercent = d3.format('.1%');

	// Scaling
	var colorScale = d3.scaleSequential(d3.interpolatePiYG)();
	var xScale = d3.scaleLinear()
					.domain([
						d3.min([0, d3.min(data, function(d) {
							return d.unemployment; })]),
						d3.max([0, d3.max(data, function(d) {
							return d.unemployment; })])
						])
					.range([0, width]);
	var yScale = d3.scaleLinear()
					.domain([
						d3.min([0, d3.min(data, function(d) {
							return d.houses_sold; })]),
						d3.max([0, d3.max(data, function(d) {
							return d.houses_sold; })])
						])
					.range([height, 0]);

	// SVG (Scalable Vector Graphics)
	var svg = body.append('svg')
						.attr('height', height + margin.top + margin.bottom)
						.attr('width', width + margin.left + margin.right)
					.append('g')
						.attr('transform','translate(' + margin.left + ',' + margin.top + ')');

	// Axes Creation
	var xAxis = d3.axisBottom(xScale)
					.tickFormat(formatPercent)
					.ticks(5);
	var yAxis = d3.axisLeft(yScale)
					.ticks(5);

	// Scatter Plot Dots
	var circles = svg.selectAll('circle')
						.data(data)
						.enter()
					.append('circle')
						.attr('cx', function(d) { 
							return xScale(d.unemployment) 
						})
						.attr('cy', function(d) {
							return yScale(d.houses_sold)
						})
						.attr('r', 3)
						.attr('stroke', 'black')
						.attr('stroke-width', 1)
						.attr('fill', function(d,i) { return colorScale(i) })
						.on('mouseover', function () {
							d3.select(this)
								.transition()
								.duration(500)
								.attr('r', 6)
								.attr('stroke-width', 3);
						})
						.on('mouseout', function() {
							d3.select(this)
								.transition()
								.duration(500)
								.attr('r', 3)
								.attr('stroke-width', 1);
						})
					.append('title')
						.text(function(d) {
							return `${d.date}\nUnemployment Rate: ${d.unemployment}\nHouses Sold: ${d.houses_sold}`;
						});

	// Axes Customization
	// X-axis
	svg.append('g')
			.attr('class', 'axis')
			.attr('transform', 'translate(0,' + height + ')')
			.call(xAxis)
		.append('text')	// X-axis label
			.attr('class', 'label')
			.attr('y', -10)
			.attr('x', width)
			.attr('dy', '.70em')
			.style('text-anchor', 'end')
			.text('Unemployment Rate (%)');
	// Y-axis
	svg.append('g')
			.attr('class', 'axis')
			.call(yAxis)
		.append('text') // Y-axis label
			.attr('class', 'label')
			.attr('transform', 'rotate(-90)')
			.attr('x', 0)
			.attr('y', 5)
			.attr('dy', '.70em')
			.style('text-anchor', 'end')
			.text('Houses Sold');	

})


// var margin = { top: 20, right: 20, bottom: 30, left: 40 };
// var width = 960 - margin.left - margin.right;
// var height = 500 - margin.top - margin.bottom;

// var x = d3.scaleLinear()
// 				.range([0, width]);
// var y = d3.scaleLinear()
// 				.range([height, 0]);

// var color = d3.scaleSequential(d3.interpolatePiYG)();

// var xAxis = d3.axisBottom(x).tickFormat(function(d){ return d.x;});
// var yAxis = d3.axisLeft(y)

// var svg = d3.select('body').append('svg')
// 						.attr('width', width + margin.left + margin.right)
// 						.attr('height', height + margin.top + margin.bottom)
// 				.append('g')
// 						.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

// d3.csv(url, function(error, data) {
// 	if (error) throw error;

// 	data.forEach(function(d) {
// 		d.house_price_index = +d.house_price_index;
// 		d.unemployment = +d.unemployment;
// 	});

// 	x.domain(d3.extent(data, function(d) {
// 		return d.unemployment;
// 	})).nice();
// 	y.domain(d3.extent(data, function(d) {
// 		return d.house_price_index;
// 	})).nice();

// 	svg.append('g')
// 			.attr('class', 'x axis')
// 			.attr('transform', 'translate(0' + height + ')')
// 			.call(xAxis)
// 		.append('text')
// 			.attr('class', 'label')
// 			.attr('x', width)
// 			.attr('y', -6)
// 			.style('text-anchor', 'end')
// 			.text('Unemployment (%)');

// 	svg.selectAll('.dot')
// 			.data(data)
// 		.enter().append('circle')
// 			.attr('class', 'dot')
// 			.attr('r', 4)
// 			.attr('cx', function(d) { return x(d.unemployment); })
// 			.attr('cy', function(d) { return y(d.house_price_index); })
// 			.style('fill', function(d) { return color(d.houses_sold) });

// 	var legend = svg.selectAll('.legend')
// 						.data(color.domain())
// 					.enter().append('g')
// 						.attr('class', 'legend')
// 						.attr('transform', function(d, i) { return 'translate(0,' + i + 20 + ')'; });
// 	legend.append('rect')
// 			.attr('x', width-15)
// 			.attr('width', 15)
// 			.attr('height', 15)
// 			.style('fill', color);
// 	legend.append('text')
// 			.attr('x', width-20)
// 			.attr('y', 10)
// 			.attr('dy', '.35em')
// 			.style('text-anchor', 'end')
// 			.text(function(d) { return d; });

// });