import {Component} from '@angular/core';

@Component({
  selector: 'nested',
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  template: '<small>nested.ts</small><p>Here is a nested component.</p>'
})
export class Nested {}
