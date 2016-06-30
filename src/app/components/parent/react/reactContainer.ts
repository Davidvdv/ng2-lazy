import {Component} from '@angular/core';
import {ng2ReactAdapter} from "./ng2ReactAdapter";
import {ReactComponent} from './ReactComponent';
let jsxComponent = require('./JSXReactComponent');

@Component({
  selector: 'react',
  directives: [ng2ReactAdapter],
  template: `
  <ng2-react-adapter [props]="{name: 'TSX'}" [component]="reactComponent"></ng2-react-adapter>
  <ng2-react-adapter [props]="{name: 'JSX'}" [component]="jsxReactComponent"></ng2-react-adapter>
  `
})
export class ReactContainer {
  reactComponent;
  jsxReactComponent;

  constructor() {
    this.reactComponent = ReactComponent;
    this.jsxReactComponent = jsxComponent;
  }
}
