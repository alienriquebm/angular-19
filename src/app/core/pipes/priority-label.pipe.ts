import { Pipe, PipeTransform } from '@angular/core';
import { TaskPriority } from '../types/task/task-priority.enum';
@Pipe({
  name: 'priorityLabel',
})
export class PriorityLabelPipe implements PipeTransform {
  transform(value: TaskPriority): string {
    const priorityMap = {
      [TaskPriority.Low]: 'Low',
      [TaskPriority.Medium]: 'Medium',
      [TaskPriority.High]: 'High',
    };

    return priorityMap[value];
  }
}
