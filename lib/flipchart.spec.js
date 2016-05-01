/* global describe, it */
'use strict';
const assert = require('chai').assert;
const flipchart = require('./flipchart');
const structure = require('./structure');

describe('updateValues', function () {

	let originalProgram;
	beforeEach(function () {
		originalProgram = structure.program;
	});

	afterEach(function () {
		structure.program = originalProgram;
	});

	it('passes values starting with `=` to structure.program', function () {
		let calls = 0;
		structure.program = function (val) {
			calls += 1;
			if (calls === 1) assert.equal(val, '=1+1');
			if (calls === 2) assert.equal(val, '=1-1');
		};

		let source = {
			foo: '=1+1',
			bar: '=1-1',
			baz: 'not ='
		};

		flipchart.getValues(source);
		assert.equal(calls, 2);
	});

	it('updates the values object', function () {
		let source = {
			foo: '=1+1',
			bar: '=1-1',
			baz: 'not ='
		};
		let values = flipchart.getValues(source);

		assert.equal(values.foo, 2);
		assert.equal(values.bar, 0);
		assert.equal(values.baz, 'not =');
	});
});