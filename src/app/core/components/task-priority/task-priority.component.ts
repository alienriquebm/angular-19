import { Component, Input } from '@angular/core';
import { TaskPriority } from '../../types/task/task-priority.enum';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-priority',
  templateUrl: './task-priority.component.html',
  imports: [NgClass],
})
export class TaskPriorityComponent {
  constructor() {
    this.priority = TaskPriority.Low;
  }

  colorMap = {
    low: {
      bg: 'bg-green-100',
      text: 'text-green-400',
    },
    medium: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-400',
    },
    high: {
      bg: 'bg-red-100',
      text: 'text-red-400',
    },
  };

  @Input() priority: TaskPriority;

  get currentColor() {
    return (
      this.colorMap[this.priority as keyof typeof this.colorMap] ||
      this.colorMap['low']
    );
  }
}
