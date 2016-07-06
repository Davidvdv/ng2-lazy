import {Component} from '@angular/core';

@Component({
  selector: 'side-block',
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  template: '<small>SideBlock.ts</small>'
})
export class SideBlock { }
