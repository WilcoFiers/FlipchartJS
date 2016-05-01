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

	utils: {
		sanitize: require('./utils/sanitize')
	}
}


module.exports = flipchart;

if (typeof window !== 'undefined') {
	window.flipchart = flipchart;
}


