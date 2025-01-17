import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../../types/task/task';
import { RelativeDatePipe } from '../../pipes/relative-date.pipe';
import { TaskPriorityComponent } from '../task-priority/task-priority.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  imports: [
    MatIconModule,
    RelativeDatePipe,
    NgOptimizedImage,
    TaskPriorityComponent,
  ],
})
export class TaskCardComponent {
  constructor() {
    this.task = {} as Task;
  }

  @Input() task: Task;
}
