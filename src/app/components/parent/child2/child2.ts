import {Component} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {RouteParams} from "@ngrx/router";
import 'rxjs/add/operator/pluck';
import {ParentService} from "../parent.service";

@Component({
  selector: 'child2',
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  template: '<small>child2.ts</small><p>Child 2 lazy loaded</p><p>Param: {{ idParam$ | async }}</p>',
  providers: [ParentService]
})
export class Child2 {
  idParam$: Observable<any>;

  constructor(routeParams$:RouteParams, parentService:ParentService) {
    this.idParam$ = routeParams$.pluck<string>('id');
  }
}
