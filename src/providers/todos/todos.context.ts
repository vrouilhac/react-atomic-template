import { createContext } from "react";

import { TodosValue, TodosMethods, TodosState } from "./todos.types";

export const initialValue: TodosValue = {
  todos: [],
};

export const initialMethods: TodosMethods = {
  addTodo: () => {},
  completeTodo: () => {},
  deleteTodo: () => {},
};

export const initialState: TodosState = {
  ...initialValue,
  ...initialMethods,
};

export const TodosContext = createContext<TodosState>(initialState);
