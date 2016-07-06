import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  template: `
  <small>app.ts</small>
  <h1>Dashboard</h1>
  
  <button type="button" [linkTo]="'parent'">Route parent</button>
  <button type="button" [linkTo]="'stack'">Route stack</button>
  
  <main>
    <route-view></route-view>
    <route-view name="main"></route-view>
    <route-view name="sideBlock"></route-view>
  </main>
  `,
})
export class App {}
