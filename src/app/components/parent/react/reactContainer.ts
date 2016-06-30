import {Component} from '@angular/core';
import {ng2ReactAdapter} from "./ng2ReactAdapter";
import {ReactComponent} from './ReactComponent';
let jsxComponent = require('./react/JSXReactComponent');

@Component({
  selector: 'react',
  directives: [ng2ReactAdapter],
  template: `
  <ng2-react-adapter [props]="{name: 'TSX'}" [component]="reactComponent" *ngIf="toggle"></ng2-react-adapter>
  <ng2-react-adapter [props]="{name: 'JSX'}" [component]="jsxReactComponent" *ngIf="toggle"></ng2-react-adapter>
  `
})
export class React {
  reactComponent;
  jsxReactComponent;
  toggle:boolean;

  constructor() {
    this.toggle = false;
    this.reactComponent = ReactComponent;
    this.jsxReactComponent = jsxComponent;
  }
}
