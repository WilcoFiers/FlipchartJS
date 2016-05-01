'use strict';

const chartProgram = require('./chart-program')

let flipchart = {
	_chartProgram: require('./chart-program'),
	create: createFlipchart,

	getValues(source) {
		let values = {};

		Object.keys(source)
		.forEach((key) => {
			let val = source[key];
			if (typeof val === 'string' && val[0] === '=') {
				let func = flipchart._chartProgram(val);
				try {
					values[key] = func();
				} catch (e) {
					values[key] = e.message;
				}

			} else {
				values[key] = val;
			}
		});
		return values;
	}
}


function createFlipchart(source) {
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
		},

		updateValues() {
			values = flipchart.getValues(source);
		},

		rename(prop, newProp) {
			source[newProp] = source[prop];
			delete source[prop];
			chart.updateValues();
		},

		set(prop, value) {
			source[prop] = value;
			chart.updateValues();
		}
	};

	chart.updateValues();
	return chart;
}


module.exports = flipchart;

if (typeof window !== 'undefined') {
	window.flipchart = module.exports;
}


