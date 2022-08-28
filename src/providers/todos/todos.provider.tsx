import { useState } from "react";

import { TodosContext, initialValue } from "./todos.context";
import { getTodosState } from "./todos.methods";
import { TodosValue } from "./todos.types";

export const TodosProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  const [todosValue, setTodosValue] = useState<TodosValue>(initialValue);

  return (
    <TodosContext.Provider value={getTodosState(todosValue, setTodosValue)}>
      {children}
    </TodosContext.Provider>
  );
};
