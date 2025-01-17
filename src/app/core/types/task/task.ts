import { TaskCategory, TaskCategoryName } from './task-category';
import { TaskComment } from './task-comment';
import { TaskPriority } from './task-priority.enum';

export type Task = {
  id: number;
  title: string;
  description: string;
  priority: TaskPriority;
  taskComments: TaskComment[];
  taskAttachmentsQuantity: number;
  date: Date;
  isCompleted: boolean;
  taskCategory: TaskCategoryName;
};
