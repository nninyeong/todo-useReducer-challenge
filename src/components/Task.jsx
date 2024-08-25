import TaskDeleteButton from "./Button/TaskDeleteButton";
import TaskEditButton from "./Button/TaskEditButton";
import { useTasksDispatch } from "./Context/TaskContextProvider";
import styled from "styled-components";
import { useState } from "react";
import Input from "./Input";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const dispatch = useTasksDispatch();

  const DoneHandler = (task) => {
    dispatch({
      type: "doneToggle",
      task: task,
    });
  };

  return (
    <TaskContainer>
      {isEditing ? (
        <Input
          type="text"
          value={editedValue}
          onChange={(e) => {
            setEditedValue(e.target.value);
          }}
        />
      ) : (
        <TaskParagraph
          $done={task.done}
          onClick={() => {
            DoneHandler(task);
          }}
        >
          {task.text}
        </TaskParagraph>
      )}
      <TaskEditButton
        task={task}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editedValue={editedValue}
      />
      <TaskDeleteButton task={task} />
    </TaskContainer>
  );
};

export default Task;

const TaskParagraph = styled.p`
  display: inline-block;
  margin-right: 5px;
  text-decoration: ${(props) => (props.$done ? "line-through" : "none")};
`;

const TaskContainer = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
