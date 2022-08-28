import { AddTodoBar } from "components/addTodoBar/AddTodoBar";
import { TodosList } from "components/todosList/TodosList";
import { FakeOtherComponent } from "components/fakeOtherComponent/FakeOtherComponent";

import { debugRender } from "utils/debug";

export const Dashboard = () => {
  debugRender("Dashboard");

  return (
    <div>
      <div style={{ marginLeft: 32 }}>
        <p>Dashboard</p>
      </div>

      <AddTodoBar />

      <div
        style={{
          marginTop: 16,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "60%",
            backgroundColor: "#FCFCFC",
          }}
        >
          <TodosList />
        </div>
      </div>

      <div style={{ marginLeft: 32 }}>
        <FakeOtherComponent />
      </div>
    </div>
  );
};
