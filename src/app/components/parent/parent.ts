import {Component} from '@angular/core';
import {Nested} from "./nested/nested";

@Component({
  selector: 'parent',
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  directives: [Nested],
  template: `
    <small>parent.ts</small>
    <button type="button" [linkTo]="'/parent/child1'">Load child1 of parent</button>
    <button type="button" [linkTo]="'/parent/child2'">Load child2 of parent</button>
    <button type="button" [linkTo]="'/parent/child2/123'">Params</button>
    <button type="button" [linkTo]="'/parent/react'">Load React Components</button>
    <nested></nested>
    <route-view></route-view>
  `
})
export class Parent {}
