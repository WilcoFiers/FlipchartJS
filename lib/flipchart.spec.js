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

	describe('updateValues', function () {

		let chartProgrOriginal;
		beforeEach(function () {
			chartProgrOriginal = flipchart._chartProgram;
		});
		afterEach(function () {
			flipchart._chartProgram = chartProgrOriginal;
		})

		it('is called with during create', function () {
			flipchart._chartProgram = function (val) {
				calls += 1;
			};

			let calls = 0;
			let chart = flipchart.create({
				foo: '=1+1',
				bar: '=1-1'
			});

			assert.equal(calls, 2);
		});

		it('passes values starting with `=` to chartProgram', function () {
			let calls = 0;
			flipchart._chartProgram = function (val) {
				calls += 1;
				if (calls !== 3) {
					assert.equal(val, '=1+1');
				} else {
					assert.equal(val, '=1-1')
				}
			};

			let chart = flipchart.create({
				foo: '=1+1',
				baz: 'not ='
			});
			assert.equal(calls, 1);

			chart.getSource().bar = '=1-1',
			chart.updateValues();

			assert.equal(calls, 3);
		});

		it('updates the values object', function () {
			let chart = flipchart.create({
				foo: '=1+1',
				bar: '=1-1',
				baz: 'not ='
			});
			let source = chart.getSource();
			let values = chart.getValues();

			assert.equal(source.foo, '=1+1');
			assert.equal(values.foo, 2);

			source.foo = '=1+3';
			chart.updateValues();
			assert.equal(values.foo, 4);
		});
	});

});