import styled from "styled-components";
import Input from "./Input";
import { useState } from "react";
import TaskSubmitButton from "./Button/TaskSubmitButton";
import TaskList from "./TaskList";
import { useTasksDispatch } from "./Context/TaskContextProvider.jsx";

const TodoList = () => {
  const [value, setValue] = useState("");
  const dispatch = useTasksDispatch();

  const SubmitHandler = (text) => {
    dispatch({
      type: "add",
      id: new Date().getTime(),
      text: text,
    });
  };

  return (
    <TodoListContainer>
      <div>
        <Input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <TaskSubmitButton onClick={() => SubmitHandler(value)} />
      </div>
      <TaskList />
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  width: 400px;
  height: 600px;
  padding: 20px;

  border: 1px solid black;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
