export interface ITodo<T> {
  userId: T;
  id: T;
  title: string;
  completed: boolean;
}
