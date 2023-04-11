export interface TaskInfo {
  text: string;
  day: string;
  reminder: boolean;
}

export interface Task extends TaskInfo {
  id: number;
}