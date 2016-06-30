import {Component} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {RouteParams} from "@ngrx/router";
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'child2',
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  template: '<small>child2.ts</small><p>Child 2 lazy loaded</p><p>Param: {{ idParam$ | async }}</p>',
})
export class Child2 {
  idParam$: Observable<string>;

  constructor(routeParams$:RouteParams) {
    this.idParam$ = routeParams$.pluck<string>('id');
  }
}
