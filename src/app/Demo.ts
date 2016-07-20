import {Component} from '@angular/core'
import ReactAdapter from './ReactAdapter'
const blueButton = require('./uicomponents/BlueButton');
const blueInputText = require('./uicomponents/blueInputText');

@Component({
    selector: 'demo',
    directives: [ReactAdapter],
    template: `
       <h2>Button</h2>
       <react-adapter [props]="{title: 'A BLUE button', onClick: clickHandler}" [component]="blueButton"></react-adapter>
       
       <h2>Input</h2>
       <react-adapter [props]="{}" [component]="blueInputText"></react-adapter>
    `
})
export class Demo {
    blueButton;
    blueInputText;

    constructor() {
        this.blueButton = blueButton;
        this.blueInputText = blueInputText;
    }

    clickHandler() {
        console.log('clickhandler');
    }
}