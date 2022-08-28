import { Dispatch, SetStateAction } from "react";

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export interface TodosValue {
  todos: Todo[];
}

export interface TodosMethods {
  addTodo: (title: string) => void;
  completeTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export type SetTodosStateFn = Dispatch<SetStateAction<TodosValue>>;
export type TodosState = TodosValue & TodosMethods;
