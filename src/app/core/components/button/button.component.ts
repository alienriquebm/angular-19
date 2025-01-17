import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Colors } from '../../types/colors/colors.enum';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [NgClass,MatIconModule],
})
export class ButtonComponent {
  constructor() {
    this.icon = '';
    this.text = '';
    this.buttonColor = Colors.violet;
  }

  @Input() text: string;
  @Input() icon: string;
  @Input() buttonColor: Colors;
  @Output() buttonClick = new EventEmitter<void>();


  buttonColorMap = {
    violet: {
      bg: 'bg-violet-100',
      text: 'text-violet-800',
      border: 'border-violet-800',
      hoverBg: 'hover:bg-violet-800',
      bgButton: 'bg-violet-50',
      focusRingButton: 'focus:ring-violet-300',
    },
    sky: {
      bg: 'bg-sky-100',
      text: 'text-sky-800',
      border: 'border-sky-800',
      hoverBg: 'hover:bg-sky-800',
      bgButton: 'bg-sky-50',
      focusRingButton: 'focus:ring-sky-300',
    },
    yellow: {
      bg: 'bg-amber-100',
      text: 'text-amber-800',
      border: 'border-amber-800',
      hoverBg: 'hover:bg-amber-800',
      bgButton: 'bg-amber-50',
      focusRingButton: 'focus:ring-amber-300',
    },
    red: {
      bg: 'bg-red-100',
      text: 'text-red-800',
      border: 'border-red-800',
      hoverBg: 'hover:bg-red-800',
      bgButton: 'bg-red-50',
      focusRingButton: 'focus:ring-red-300',
    },
  };

  get currentButtonColor() {
    console.log(this.buttonColor);
    return this.buttonColorMap[this.buttonColor as keyof typeof this.buttonColorMap];
  }

  onClick() {
    this.buttonClick.emit();
  }
}
