import TaskDeleteButton from "./Button/TaskDeleteButton";
import { useTasksDispatch } from "./Context/TaskContextProvider";

const Task = ({ task }) => {
  const dispatch = useTasksDispatch();

  const DeleteHandler = (task) => {
    dispatch({
      type: "delete",
      task: task,
    });
  };

  return (
    <div>
      <p>{task.text}</p>
      <TaskDeleteButton task={task} DeleteHandler={DeleteHandler} />
    </div>
  );
};

export default Task;
