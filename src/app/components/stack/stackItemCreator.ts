import {Component, Output, EventEmitter} from '@angular/core';
import {StackItem} from "../../models/StackItem";

@Component({
  selector: 'stack-item-creator',
  template: `
  <small>stackItemCreator.ts</small>
  <form (ngSubmit)="onSubmit()">
    <label for="name">Name</label>
    <input type="text" [(ngModel)]="newStackItem.name" name="name" id="name" class="form-control" required placeholder="name">
  </form>
  `
})
export class StackItemCreator {
  submitted:boolean;
  newStackItem:StackItem;
  @Output() onCreatedStackItem = new EventEmitter();

  constructor() {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    this.onCreatedStackItem.emit(this.newStackItem);
  }
}
