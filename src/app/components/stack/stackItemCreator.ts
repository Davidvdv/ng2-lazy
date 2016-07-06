import {Component, Output, EventEmitter} from '@angular/core';
import {StackItem} from "../../models/StackItem";

@Component({
  selector: 'stack-item-creator',
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  template: `
  <small>stackItemCreator.ts</small>
  <form (ngSubmit)="onSubmit()">
    <label for="name">Name</label>
    <input type="text" [(ngModel)]="newStackItem.name" name="name" id="name" class="form-control" required placeholder="Name">
  </form>
  `
})
export class StackItemCreator {
  newStackItem:StackItem;
  @Output() onCreatedStackItem = new EventEmitter();

  constructor() {
    this.newStackItem = { name: ''};
  }

  onSubmit() {
    this.onCreatedStackItem.emit(this.newStackItem);
    this.newStackItem = { name: ''};
  }
}
