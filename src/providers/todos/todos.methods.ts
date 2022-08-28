import { TodosValue, TodosState, SetTodosStateFn, Todo } from "./todos.types";

export const getTodosState = (
  todosValue: TodosValue,
  setTodosValue: SetTodosStateFn
): TodosState => {
  return {
    ...todosValue,
    addTodo: (title: string) => addTodo(todosValue, setTodosValue, { title }),
    completeTodo: (id: string) =>
      toggleTodoComplete(todosValue, setTodosValue, { id }),
    deleteTodo: (id: string) => deleteTodo(todosValue, setTodosValue, { id }),
  };
};

function addTodo(
  todosValue: TodosValue,
  setTodosValue: SetTodosStateFn,
  params: { title: string }
): void {
  if (params.title.length === 0) {
    return;
  }

  setTodosValue({
    ...todosValue,
    todos: [
      ...todosValue.todos,
      {
        id: Math.random().toString(),
        title: params.title,
        done: false,
      },
    ].sort((a, b) => (a.done ? 1 : 0) - (b.done ? 1 : 0)),
  });
}

function toggleTodoComplete(
  todosValue: TodosValue,
  setTodosValue: SetTodosStateFn,
  params: { id: string }
) {
  const filteredTodos = todosValue.todos.filter(
    (todo: Todo) => todo.id !== params.id
  );
  const todo = todosValue.todos.find((todo: Todo) => todo.id === params.id);

  if (!todo) {
    return null;
  }

  const updatedTodo = {
    ...todo,
    done: !todo.done,
  };

  setTodosValue({
    ...todosValue,
    todos: [...filteredTodos, updatedTodo].sort(
      (a, b) => (a.done ? 1 : 0) - (b.done ? 1 : 0)
    ),
  });
}

function deleteTodo(
  todosValue: TodosValue,
  setTodosValue: SetTodosStateFn,
  params: { id: string }
) {
  const updatedTodos = todosValue.todos.filter(
    (todo: Todo) => todo.id !== params.id
  );
  setTodosValue({
    ...todosValue,
    todos: updatedTodos.sort((a, b) => (a.done ? 1 : 0) - (b.done ? 1 : 0)),
  });
}
