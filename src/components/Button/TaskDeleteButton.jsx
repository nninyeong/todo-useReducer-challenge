import { useTasksDispatch } from "../Context/TaskContextProvider";
import Button from "./Button";

const TaskDeleteButton = ({ task }) => {
  const dispatch = useTasksDispatch();

  const DeleteHandler = (task) => {
    dispatch({
      type: "delete",
      task: task,
    });
  };

  return (
    <Button
      onClick={() => {
        DeleteHandler(task);
      }}
    >
      삭제
    </Button>
  );
};

export default TaskDeleteButton;
