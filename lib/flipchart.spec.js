/* global describe, it */
'use strict';

const assert = require('chai').assert;
const flipchart = require('./flipchart');

describe('flipChart', function () {
	it('has a create method', function () {
		assert.isFunction(flipchart.create);
		let chart = flipchart.create();
		assert.isObject(chart);
	});

	it('returns the source object with .getSource', function () {
		let source = {}
		let chart = flipchart.create(source);
		assert.equal(chart.getSource(), source);
	});

	it('returns static values with .getValues', function () {
		let source = {
			foo: 'foobar',
			bar: 1234,
			baz: true
		};
		let chart = flipchart.create(source);
		let values = chart.getValues()
		assert.notEqual(values, source);

		assert.equal(values.foo, source.foo);
		assert.equal(values.bar, source.bar);
		assert.equal(values.baz, source.baz);
	});

});