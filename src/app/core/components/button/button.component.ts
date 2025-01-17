import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [NgClass],
})
export class ButtonComponent {
  constructor() {}

  onClick() {
    console.log('Button clicked!');
  }
}
