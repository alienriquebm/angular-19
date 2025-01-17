import { Injectable } from '@angular/core';
import { Task } from '../types/task/task';
import { TaskPriority } from '../types/task/task-priority.enum';
import { TaskCategory, TaskCategoryName } from '../types/task/task-category';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskCategories: TaskCategory[] = [
    { name: TaskCategoryName.Design, color: 'violet' },
    { name: TaskCategoryName.Frontend, color: 'sky' },
    { name: TaskCategoryName.Backend, color: 'yellow' },
    { name: TaskCategoryName.Testing, color: 'red' },
  ];

  private tasks: Task[] = [
    {
      id: 1,
      title: 'Design the login page',
      description: 'Create a user-friendly login interface',
      priority: TaskPriority.High,
      taskComments: [
        { id: 1, taskId: 1, text: 'Add logo to the page', date: new Date() },
      ],
      taskAttachmentsQuantity: 2,
      date: new Date('2023-12-01'),
      isCompleted: false,
      taskCategory: TaskCategoryName.Design,
    },
    {
      id: 2,
      title: 'Develop API for user authentication',
      description: 'Implement authentication using JWT',
      priority: TaskPriority.Medium,
      taskComments: [],
      taskAttachmentsQuantity: 0,
      date: new Date('2023-12-05'),
      isCompleted: false,
      taskCategory: TaskCategoryName.Backend,
    },
  ];

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }
  getTasksGrouped(): {
    category: TaskCategoryName;
    tasks: Task[];
    categoryColor: string;
  }[] {
    const categoryValues = Object.values(
      TaskCategoryName
    ) as TaskCategoryName[];
    const groupedTasks = categoryValues.map((category) => {
      return {
        category,
        tasks: this.tasks.filter((task) => task.taskCategory === category),
        categoryColor:
          this.taskCategories.find(
            (taskCategory) => taskCategory.name === category
          )?.color || 'gray',
      };
    });
    return groupedTasks;
  }
}
