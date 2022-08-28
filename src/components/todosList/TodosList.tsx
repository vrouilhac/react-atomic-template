import { useTodos } from "hooks/useTodos";

import { List } from "ui/atoms/list/List";
import { Card } from "ui/atoms/card/Card";
import { Text } from "ui/atoms/text/Text";
import { Button } from "ui/atoms/button/Button";

import { debugRender } from "utils/debug";
import { Todo } from "providers/todos/todos.types";

export const TodosList = () => {
  const { todos, deleteTodo, completeTodo } = useTodos();

  debugRender("TodosList");

  const renderTodoItem = ({ item }: { item: Todo }) => {
    return (
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            opacity: item.done ? 0.5 : 1,
          }}
        >
          <Text
            style={{
              textDecoration: item.done ? "line-through" : "inherit",
            }}
          >
            {item.title}
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => completeTodo(item.id)}
              label={item.done ? "Undo" : "Done"}
            />
            <div style={{ margin: 4 }} />
            <Button
              onClick={() => deleteTodo(item.id)}
              label="Delete"
              variant="error"
            />
          </div>
        </div>
      </Card>
    );
  };

  return (
    <List
      data={todos}
      renderItem={renderTodoItem}
      keyExtractor={(item: Todo) => item.id}
      separator={<div style={{ margin: 8 }} />}
    />
  );
};
