import {Component} from '@angular/core';
import {Nested} from "./nested/nested";
import {ng2ReactAdapter} from "./reactComponent/ng2ReactAdapter";
import {ReactComponent} from './reactComponent/ReactComponent';
let jsxComponent = require('./reactComponent/JSXReactComponent');

@Component({
  selector: 'parent',
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  directives: [Nested, ng2ReactAdapter],
  template: `
    <small>parent.ts</small>
    <button type="button" [linkTo]="'/parent/child1'">Load child1 of parent</button>
    <button type="button" [linkTo]="'/parent/child2'">Load child2 of parent</button>
    <button type="button" [linkTo]="'/parent/child2/123'">Params</button>
    <button type="button" (click)="toggle = !toggle">Load a React Component</button>
    <nested></nested>
    <route-view></route-view>
    <ng2-react-adapter [props]="{name: 'TSX'}" [component]="reactComponent" *ngIf="toggle"></ng2-react-adapter>
    <ng2-react-adapter [props]="{name: 'JSX'}" [component]="jsxReactComponent" *ngIf="toggle"></ng2-react-adapter>
  `
})
export class Parent {
  reactComponent;
  jsxReactComponent;
  toggle:boolean;

  constructor() {
    this.toggle = false;
    this.reactComponent = ReactComponent;
    this.jsxReactComponent = jsxComponent;
  }
}
