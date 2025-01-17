import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../../types/task/task';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  imports: [MatIconModule, NgClass, TaskCardComponent],
})
export class ColumnComponent {
  constructor() {
    this.title = '';
    this.taskQuantity = 0;
    this.tasks = [];
    this.taskCategoryColor = '';
  }

  @Input() title: string;
  @Input() taskQuantity: number;
  @Input() tasks: Task[];
  @Input() taskCategoryColor: string;

  colorMap = {
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

  get currentColor() {
    return (
      this.colorMap[this.taskCategoryColor as keyof typeof this.colorMap] ||
      this.colorMap['violet']
    );
  }
}
