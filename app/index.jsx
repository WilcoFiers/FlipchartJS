/* global React, ReactDOM, flipchart */

let ChartObject = require('./ChartObject.jsx');

let chart = flipchart.create({
	foo: 123,
	bar: 345
});

ReactDOM.render(
	<ChartObject values={chart.getValues()} />,
    document.getElementById('main')
);
