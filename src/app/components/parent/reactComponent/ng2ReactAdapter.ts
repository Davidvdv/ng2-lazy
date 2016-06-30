import {Component, ElementRef, Input} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'ng2-react-adapter',
  styles: [`:host { display: block; border: dashed 1px #333; padding: 10px; margin: 10px; }`],
  template: ''
})
export class ng2ReactAdapter {
  @Input() children = [];
  @Input() component;
  @Input() props;
  _element;

  static parameters = [ElementRef];

  constructor(elementRef:ElementRef) {
    this._element = elementRef.nativeElement;
  }

  render(props) {
    console.log('ReactComponent render');
    ReactDOM.render(React.createElement(this.component, this.props || {}, this.children || []), this._element);
  }

  ngOnChanges(changes) {
    if (changes.component) {
      this.component = changes.component.currentValue;
    }
    if (changes.props) {
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
