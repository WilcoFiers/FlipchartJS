/* global describe, it */
'use strict';
const assert = require('chai').assert;
const chartProgram = require('./chart-program');

describe('chartProgram', function () {

	it('is a function', function () {
		assert.isFunction(chartProgram);
	});

	it('creates a function from a string', function () {
		let func = chartProgram('= 1 + 1');
		assert.isFunction(func);
	});

	it('inserts a return method at the first line, when there is none', function () {
		let func = chartProgram('= 1 + 1');
		assert.equal(func(), 2);
	});

	it('does not insert a return method is one is used', function () {
		let func = chartProgram('= 1 + 1; return 3;');
		assert.equal(func(), 3);
	});

});