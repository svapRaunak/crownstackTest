export interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoInterface) => void;
}

export interface TodoListInterface {
  handleTodoComplete: (id: string) => void;
  todos: TodoInterface[];
}

export interface TodoItemInterface {
  handleTodoComplete: (id: string) => void;
  todo: TodoInterface;
}
