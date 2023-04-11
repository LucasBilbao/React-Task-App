import { Task } from './Task.interface';

export interface TaskState {
  tasks: Task[],
  isLoading: boolean,
}