export interface Task {
  id: number;
  title: string;
  deadline: string; // introduce date ?
  priority: string; // introduce enum ?
  completed: boolean;
  urgent: boolean;
}
