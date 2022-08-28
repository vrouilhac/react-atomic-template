import { useState, ChangeEvent, KeyboardEvent } from "react";

import { useTodos } from "hooks/useTodos";
import { TextInput } from "ui/molecules/textInput/TextInput";
import { Button } from "ui/atoms/button/Button";

import { debugRender } from "utils/debug";

export const AddTodoBar = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodos();

  debugRender("AddTodoBar");

  const changeInputTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleEnterKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addNewTodo();
    }
  };

  const addNewTodo = () => {
    addTodo(title);
    setTitle("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <TextInput
        value={title}
        onChange={changeInputTitle}
        placeholder="Complete the financial annual report"
        onKeyPress={handleEnterKeyPress}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 16,
        }}
      >
        <Button label="Add" onClick={addNewTodo} />
      </div>
    </div>
  );
};
