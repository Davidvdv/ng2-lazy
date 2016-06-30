import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  templateUrl: './app.html',
})
export class App {}
