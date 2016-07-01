import {Component} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Store} from "@ngrx/store";
import {ADD_STACK_ITEM, CLEAR_STACK} from "../../actions/actions";
import {StackItem} from "../../models/StackItem";
import {StackItemCreator} from "./stackItemCreator";

interface AppState {
  stack:Array<StackItem>;
}

@Component({
  selector: 'store',
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  template: `
    <small>stack.ts</small>
    <stack-item-creator (onCreatedStackItem)="stackItemCreated($event)"></stack-item-creator>
    <button type="button" (click)="clearStack()">Add</button>
    <ul><li *ngFor="let item of stack | async">{{item.name}}</li></ul>
  `,
  directives: [StackItemCreator]
})
export class Stack {
  stack:Observable<Array<StackItem>>;

  constructor(private store:Store<AppState>) {
    this.stack = store.select('stack') as Observable<Array<StackItem>>;
  }

  stackItemCreated(ev) {
    this.store.dispatch({ type: ADD_STACK_ITEM, payload: ev})
  }

  clearStack() {
    this.store.dispatch({
      type: CLEAR_STACK
    })
  }
}
