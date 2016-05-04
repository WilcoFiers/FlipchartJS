'use strict';

module.exports = function sanitize(val) {
	if (typeof val === 'string') {
		val = val.trim();
		if (/^[0-9]+\.?[0-9]*$/.test(val)) {
			val = parseFloat(val);
		}
	}
	return val;
}