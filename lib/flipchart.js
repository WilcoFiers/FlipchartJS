'use strict';

const structure = require('./structure');

let flipchart = {

	getValues(source) {
		let values = {};

		Object.keys(source)
		.forEach((key) => {
			let val = source[key];
			if (typeof val === 'string' && val[0] === '=') {
				let func = structure.program(val);
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
	},

	resolveValue(val) {
		if (typeof val !== 'string') {
			return val;
		}
		if (val[0] === '{' || val[0] === '[') {
			try {
				val = JSON.parse(val);
			} catch (e) {}
		}
		return flipchart.utils.sanitize(val);
	},

	utils: {
		sanitize: require('./utils/sanitize')
	}
}


module.exports = flipchart;

if (typeof window !== 'undefined') {
	window.flipchart = flipchart;
}


