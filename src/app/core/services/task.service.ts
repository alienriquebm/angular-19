import { Injectable } from '@angular/core';
import { Task } from '../types/task/task';
import { TaskPriority } from '../types/task/task-priority.enum';
import { TaskCategory, TaskCategoryName } from '../types/task/task-category';
import { Colors } from '../types/colors/colors.enum';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskCategories: TaskCategory[] = [
    { name: TaskCategoryName.Design, color: Colors.violet },
    { name: TaskCategoryName.Frontend, color: Colors.sky },
    { name: TaskCategoryName.Backend, color: Colors.yellow },
    { name: TaskCategoryName.Testing, color: Colors.red },
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
    {
      id: 3,
      title: 'Implement User Profile Page',
      description: 'Create a user profile page where users can view and update their personal information, such as name, email, and password.',
      priority: TaskPriority.Medium,
      taskComments: [],
      taskAttachmentsQuantity: 0,
      date: new Date('2023-12-05'),
      isCompleted: false,
      taskCategory: TaskCategoryName.Frontend,
    },
    {
      id: 4,
      title: 'Test API for user authentication',
      description: 'Implement the testing with vitest for authentication using JWT',
      priority: TaskPriority.Medium,
      taskComments: [],
      taskAttachmentsQuantity: 0,
      date: new Date('2023-12-05'),
      isCompleted: false,
      taskCategory: TaskCategoryName.Testing,
    },
    {
      id: 5,
      title: 'Design Responsive Dashboard Layout',
      description: 'Create a responsive dashboard layout for administrators, with sections for user management, analytics, and settings.',
      priority: TaskPriority.Low,
      taskComments: [],
      taskAttachmentsQuantity: 4,
      date: new Date('2023-12-05'),
      isCompleted: true,
      taskCategory: TaskCategoryName.Frontend,
    },
  ];

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }
  getTasksGrouped(): {
    category: TaskCategoryName;
    tasks: Task[];
    categoryColor: Colors;
  }[] {
    const categoryValues = Object.values(
      TaskCategoryName
    ) as TaskCategoryName[];
    const groupedTasks = categoryValues.map((category) => {
      return {
        category,
        tasks: this.tasks.filter((task) => task.taskCategory === category),
        categoryColor: Colors[
         ( this.taskCategories.find(
            (taskCategory) => taskCategory.name === category
          )?.color || 'gray') as keyof typeof Colors
        ],
      };
    });
    return groupedTasks;
  }
}
