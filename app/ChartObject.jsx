/* global React */

const ChartCell = require('./chartCell.jsx');

let ChartObject = React.createClass({displayName: 'ChartObject',
	/**
	 *
	 */
  	render() {
    	return (<table className="chart"><tbody>
	    	{Object.keys( this.props.values).map(
	    		prop => this.renderProperty(prop, this.props.values[prop])
    		)}
		</tbody></table>);
  	},

	/**
	 *
	 */
  	renderProperty(prop, value) {
  		return (<tr key={prop}>
  			<th><ChartCell update={this.updateProp(prop)} value={prop} /></th>
  			<td><ChartCell update={this.updateVal(prop)} value={value} /></td>
  		</tr>);
  	},

  	/**
  	 * Update the property
  	 * @param  {[type]} prop [description]
  	 * @return {[type]}      [description]
  	 */
  	updateProp(prop) {
  		return (newProp) => {
  			console.log('change propName from ', prop, 'to', newProp);
  			this.props.values[newProp] = this.props.values[prop];
  			delete this.props.values[prop];

  			this.forceUpdate();
  		}
  	},

  	/**
  	 * [updateVal description]
  	 * @param  {[type]} prop [description]
  	 * @return {[type]}      [description]
  	 */
  	updateVal(prop) {
  		return (newVal) => {
  			console.log('change val of ', prop, 'to', newVal);
  			this.props.values[prop] = newVal;
  			this.forceUpdate();
  		}
  	}
});

module.exports = ChartObject;