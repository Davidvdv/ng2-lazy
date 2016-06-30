import * as React from 'react';
import {ChildReactComponent} from './ChildReactComponent';

export interface ReactComponentProps { name: string };

export class ReactComponent extends React.Component<ReactComponentProps, {}> {
  componentDidMount() {
    console.log('ReactComponent -> componentDidMount');
  }
  render() {
    return (
      <div>
        <h3>I am a React component</h3>
        <i>props.name</i>: {this.props.name}
        <ChildReactComponent></ChildReactComponent>
      </div>
    );
  }
}
