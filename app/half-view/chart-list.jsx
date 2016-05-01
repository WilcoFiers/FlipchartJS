/* global React, flipchart */

const ChartCell = require('./chart-cell.jsx');
const utils = require('../utils');

let ChartList = React.createClass({

    displayName: 'ChartList',

    render() {
        this.source = this.props.source;
        this.values = flipchart.getValues(this.source);

        return <ul className="cell-list">{
        	this.source.map( (item, i) => {
        		return this.renderItem(item, this.values[i], i)
        	})
        }</ul>
    },

    renderItem(source, value, index) {
    	return <li key={index}>
    		<ChartCell source={source} value={value}
            update={utils.updateArray(this, source, index)} />
    	</li>
    }

});

module.exports = ChartList;