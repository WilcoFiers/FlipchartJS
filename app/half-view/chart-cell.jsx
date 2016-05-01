
let ChartCell = React.createClass({
    displayName: 'ChartCell',

    getInitialState() {
        return {
            editMode: false
        }
    },

    render() {
        this.source = this.props.source || this.props.value;

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
        let newSource = event.target.value.trim();
        if (newSource !== this.source) {
            this.props.update(newSource);
        }
        this.setState({ 'editMode': false });
        setTimeout(() => this._button !== null ? this._button.focus() : null, 10);
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
            defaultValue={this.source} />);
    },

    abortEdit(event) {
        if (event.key === 'Escape') {
            this.setState({ 'editMode': false });
        }
    }

});


module.exports = ChartCell;