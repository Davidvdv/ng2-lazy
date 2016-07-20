import {Component} from '@angular/core'

@Component({
    selector: 'ui-toolkit',
    template: `
    <h1>UI Toolkit</h1>
    
    <button type="button" [linkTo]="'demo'">Demo</button>
    
    <main>
        <route-view></route-view>
    </main>
    `
})
export class UIToolkit {}