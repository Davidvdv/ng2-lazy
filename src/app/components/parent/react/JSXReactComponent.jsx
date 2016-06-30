import React from 'react'

class JSXReactComponent extends React.Component {
  componentDidMount() {
    console.log('JSXReactComponent -> componentDidMount');
  }
  render() {
    return (
      <div>
        <h3>I am a JSX React component</h3>
        <i>props.name</i>: {this.props.name}
      </div>
    );
  }
}

module.exports = JSXReactComponent
