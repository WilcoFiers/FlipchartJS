/* global React, flipchart */

let AddButton = React.createClass({
    displayName: 'ChartList',
    render() {
        return <button onClick={this.props.onAdd}>Add</button>;
    }
});

module.exports = AddButton;
