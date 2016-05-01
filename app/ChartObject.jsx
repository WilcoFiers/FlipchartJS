/* global React */

const ChartCell = require('./chartCell.jsx');

let ChartObject = React.createClass({
	displayName: 'ChartObject',
	/**
	 *
	 */
  	render() {
  		this.values = this.props.chart.getValues();
  		this.source = this.props.chart.getSource();

    	return (<table className="chart">{
          this.renderThead()
        }<tbody>
	    	{Object.keys( this.values).map(
	    		prop => this.renderProperty(prop, this.source[prop], this.values[prop])
    		)}
		</tbody></table>);
  	},

	/**
	 *
	 */
  	renderProperty(prop, source, value) {
  		return (<tr key={prop}>
  			<th><ChartCell update={this.updateProp(prop)} value={prop} /></th>
  			<td><ChartCell update={this.updateVal(prop)}
  				source={source} value={value} /></td>
  		</tr>);
  	},

    renderThead() {
      return <thead><tr>
        <th>Names</th> <th>Values</th>
      </tr></thead>;
    },

  	/**
  	 * Rename a property
  	 */
  	updateProp(prop) {
  		return (newProp) => {
  			this.props.chart.rename(prop, newProp);
  			this.forceUpdate();
  		}
  	},

  	/**
  	 * Update a value
  	 */
  	updateVal(prop) {
  		return (newVal) => {
        console.log('updateVal', prop, newVal);
  			this.props.chart.set(prop, newVal);
  			this.forceUpdate();
  		}
  	}
});

module.exports = ChartObject;