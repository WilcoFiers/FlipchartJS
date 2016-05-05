/* global React, flipchart */

const ChartCell = require('./chart-cell.jsx');
const AddButton = require('../components/add-button.jsx');
const utils = require('../utils');

let ChartList = React.createClass({

    displayName: 'ChartList',

    render() {
        this.source = this.props.source;
        this.values = flipchart.getValues(this.source);

        return <ul className="cell-list">
            {this.source.map( (item, i) => {
                return this.renderItem(item, this.values[i], i)
            })}
            <li><AddButton onAdd={this.addItem} /></li>
        </ul>
    },

    renderItem(source, value, index) {
        return <li key={index}>
            <ChartCell source={source} value={value}
            update={utils.updateArray(this, source, index)} />
        </li>
    },

    addItem() {
        this.source.push('');
        this.values = flipchart.getValues(this.source);
        this.forceUpdate();
    }

});

module.exports = ChartList;