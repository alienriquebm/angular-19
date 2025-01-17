export type TaskCategory = {
  name: TaskCategoryName;
  color: string;
};

export enum TaskCategoryName {
  Design = 'Design',
  Frontend = 'Frontend',
  Backend = 'Backend',
  Testing = 'Testing',
}
