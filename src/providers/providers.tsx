import { TodosProvider } from "./todos/todos.provider";

export const Providers: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return <TodosProvider>{children}</TodosProvider>;
};
