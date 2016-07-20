import React from 'react';

class BlueInputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    onChangeHandler(event) {
        this.setState({value: event.target.value});
    }

    render() {
        let styles = {
            borderRadius: '2px',
            border: 'mediumblue 1px solid',
            padding: '7px',
            minWidth: '200px'
        };
        return (
            <input type="text" style={styles} onChange={this.onChangeHandler.bind(this)} value={this.state.value} />
        );
    }
}

module.exports = BlueInputText;
