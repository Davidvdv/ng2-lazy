import {Component} from '@angular/core';

@Component({
  selector: 'child1',
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  template: '<small>child1.ts</small><p>Child 1 lazy loaded.</p>'
})
export class Child1 {}
