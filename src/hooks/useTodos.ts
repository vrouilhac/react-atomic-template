import { useContext } from "react";
import { TodosContext } from "providers/todos/todos.context";
import { TodosState } from "providers/todos/todos.types";

export const useTodos = (): TodosState => {
  return useContext(TodosContext);
};
