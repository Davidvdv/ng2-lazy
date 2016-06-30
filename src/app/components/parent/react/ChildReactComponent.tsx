import * as React from 'react';

export class ChildReactComponent extends React.Component<{}, {}> {

  componentDidMount() {
    console.log('ChildReactComponent -> componentDidMount');
  }

  clickHandler() {
    console.log('ChildReactComponent -> ClickHandler')
  }

  render() {
    return (
      <div>
        <h4>Child React Component</h4><button type="button" onClick={() => this.clickHandler()}>Some React button</button>
      </div>
    );
  }
}
