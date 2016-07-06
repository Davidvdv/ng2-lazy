import {Component} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {StackItem} from "../../models/StackItem";
import {StackItemCreator} from "./stackItemCreator";
import {StackService} from "../../services/stack.service";


@Component({
  selector: 'store',
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  template: `
    <small>stack.ts</small>
    <route-view name="sideBlock"></route-view>
    <stack-item-creator (onCreatedStackItem)="onStackItemCreated($event)"></stack-item-creator>
    <button type="button" (click)="onClearStack()">Clear</button>
    <ul><li *ngFor="let item of stack | async">{{item.name}} <button type="button" (click)="onDelete(item)">X</button></li></ul>
  `,
  directives: [StackItemCreator],
  providers: [StackService]
})
export class Stack {
  stack:Observable<Array<StackItem>>;

  constructor(private stackService:StackService) {
    this.stack = this.stackService.getStack();
  }

  onStackItemCreated(item) {
    this.stackService.addStackItem(item);
  }

  onClearStack() {
    this.stackService.clearStack();
  }

  onDelete(item) {
    this.stackService.deleteStackItem(item);
  }
}
