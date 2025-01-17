import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ColumnComponent } from '../core/components/column/column.component';
import { Task } from '../core/types/task/task';
import { TaskService } from '../core/services/task.service';
import {
  TaskCategory,
  TaskCategoryName,
} from '../core/types/task/task-category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule, ColumnComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(taskService: TaskService) {
    this.tasks = taskService.getTasks();
    this.groupedTasks = taskService.getTasksGrouped();
    console.log(this.groupedTasks);
  }
  tasks: Task[] = [];
  groupedTasks: {
    category: TaskCategoryName;
    tasks: Task[];
    categoryColor: string;
  }[] = [];
}
