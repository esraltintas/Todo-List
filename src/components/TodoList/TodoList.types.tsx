export interface TodoListProps {
  dataTestId?: string;
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
