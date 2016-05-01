
let ChartCell = React.createClass({
    displayName: 'ChartCell',

    getInitialState() {
        return {
            editMode: false
        }
    },

    render() {
        if (this.state.editMode === false) {
            return this.renderValue();
        } else {
            return this.renderEditMode();
        }
    },

    startEditMode() {
        this.setState({ 'editMode': true });
    },

    endEditMode(event) {
        if (event.target.value !== this.props.source) {
            this.props.update(event.target.value);
        }
        this.setState({ 'editMode': false });
        setTimeout(() => this.button !== null ? this._button.focus() : null, 10);
    },

    renderValue() {
        return (<button  className="cell"
            onClick={this.startEditMode}
            ref={(elm) => this._button = elm}>
            {this.props.value}
        </button>);
    },

    renderEditMode() {
        return (<textarea onBlur={this.endEditMode} className="cell"
            ref={(elm) => elm !== null ? elm.focus() : elm }
            onKeyDown={this.pressEscape}
            defaultValue={this.props.source} />);
    },

    pressEscape(event) {
        (event.key === 'Escape') ? this.endEditMode(event) : null;
    }

});


module.exports = ChartCell;