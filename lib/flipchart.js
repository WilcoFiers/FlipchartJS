'use strict';

function createFlipChart(source) {
	source = source || {};
	if (typeof source !== 'object') {
		throw new TypeError();
	}

	let values = Object.assign({}, source);

	let chart = {
		getSource() {
			return source;
		},
		getValues() {
			return values;
		}
	};
	return chart;
}


module.exports.create = createFlipChart;

if (typeof window !== 'undefined') {
	window.flipchart = module.exports;
}