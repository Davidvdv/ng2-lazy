import {Component, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
    selector: 'react-adapter',
    template: ''
})
export default class ReactAdapter {
    @Input() children = [];
    @Input() component;
    @Input() props;
    @Input() handler;
    _element;

    constructor(elementRef:ElementRef) {
        this._element = elementRef.nativeElement;
    }

    render(props) {
        console.log(props);
        ReactDOM.render(React.createElement(this.component, this.props || {}, this.children || []), this._element);
    }

    ngOnChanges(changes) {
        console.log('ngOnChanges',changes);
        if (changes.component) {
            this.component = changes.component.currentValue;
        }
        if (changes.props) {
            // emit
            this.props = changes.props.currentValue;
            if (this.component) {
                this.render(this.props);
            }
        }
    }

    ngOnDestroy() {
        console.log('ReactComponent ngOnDestroy');
        ReactDOM.unmountComponentAtNode(this._element);
    }

}
