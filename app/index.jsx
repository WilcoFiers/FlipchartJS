/* global React, ReactDOM, flipchart */

let ChartObject = require('./full-view/chart-object.jsx');

let source = {
	foo: 123,
	bar: [3, 2, 1]
};

ReactDOM.render(
	<ChartObject source={source} />,
    document.getElementById('main')
);
