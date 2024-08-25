import TaskDeleteButton from "./Button/TaskDeleteButton";
import { useTasksDispatch } from "./Context/TaskContextProvider";
import styled from "styled-components";

const Task = ({ task }) => {
  const dispatch = useTasksDispatch();

  const DeleteHandler = (task) => {
    dispatch({
      type: "delete",
      task: task,
    });
  };

  const DoneHandler = (task) => {
    dispatch({
      type: "doneToggle",
      task: task,
    });
  };

  return (
    <div>
      <TaskParagraph
        $done={task.done}
        onClick={() => {
          DoneHandler(task);
        }}
      >
        {task.text}
      </TaskParagraph>
      <TaskDeleteButton task={task} DeleteHandler={DeleteHandler} />
    </div>
  );
};

export default Task;

const TaskParagraph = styled.p`
  text-decoration: ${(props) => (props.$done ? "line-through" : "none")};
`;
