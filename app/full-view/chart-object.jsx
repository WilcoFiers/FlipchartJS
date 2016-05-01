/* global React, flipchart */

const ChartCell = require('../half-view/chart-cell.jsx');
const ChartList = require('../half-view/chart-list.jsx');
const utils = require('../utils');

let ChartObject = React.createClass({

    displayName: 'ChartObject',

    /**
     *
     */
    render() {
        this.source = this.props.source;
        this.values = flipchart.getValues(this.source);

        return (<table className="chart">{
            this.renderThead()
        }<tbody>
            {Object.keys( this.values).map((prop) => {
                return <tr key={prop}>
                    <th><ChartCell update={utils.updateProp(this, prop)} value={prop} /></th>
                    <td>{
                        this.renderValue(prop, this.source[prop], this.values[prop])
                    }</td>
                </tr>
            })}
        </tbody></table>);
    },

    /**
     *
     */
    renderValue(prop, source, value) {
        let RenderClass = ChartCell;

        if (Array.isArray(source)) {
            RenderClass = ChartList;
        }

        return <RenderClass update={utils.updateVal(this, prop)}
                        source={source} value={value} />
    },

    renderThead() {
      return <thead><tr>
        <th>Names</th> <th>Values</th>
      </tr></thead>;
    }
});

module.exports = ChartObject;