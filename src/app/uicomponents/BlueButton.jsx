import React from 'react';

class BlueButton extends React.Component {

  onClickHandler() {
    this.props.onClick();
  }

  render() {
    let styles = {
      background: 'mediumblue',
      color: 'white',
      border: 'none',
      padding: '7px',
      minWidth: '100px',
    };
    return (
      <button style={styles} type="button" onClick={this.onClickHandler.bind(this)}>{this.props.title}</button>
    );
  }
}

module.exports = BlueButton;
