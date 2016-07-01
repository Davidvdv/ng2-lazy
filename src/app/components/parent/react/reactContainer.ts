import {Component} from '@angular/core';
import {ng2ReactAdapter} from "./ng2ReactAdapter";
import {ReactComponent} from './ReactComponent';
let jsxComponent = require('./JSXReactComponent');

@Component({
  selector: 'react',
  directives: [ng2ReactAdapter],
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  template: `
  <small>reactContainer.ts</small>
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
