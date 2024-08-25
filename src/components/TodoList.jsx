import styled from "styled-components";
import Input from "./Input";
import { useReducer, useState } from "react";
import taskReducer from "./Reducer/taskReducer";
import TaskSubmitButton from "./Button/TaskSubmitButton";
import TaskList from "./TaskList";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [tasks, dispatch] = useReducer(taskReducer, []);
  console.log(tasks);

  const SubmitHandler = (text) => {
    dispatch({
      type: "add",
      id: new Date().getTime(),
      text: text,
    });
  };

  return (
    <TodoListContainer>
      <Input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <TaskSubmitButton onClick={() => SubmitHandler(value)} />
      <TaskList tasks={tasks} />
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
