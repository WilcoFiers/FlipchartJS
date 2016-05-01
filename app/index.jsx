/* global React, ReactDOM, flipchart */

let ChartObject = require('./ChartObject.jsx');

let chart = flipchart.create({
	foo: 123,
	bar: 345
});

ReactDOM.render(
	<ChartObject chart={chart} />,
    document.getElementById('main')
);
