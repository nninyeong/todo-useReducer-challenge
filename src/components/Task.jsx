import TaskDeleteButton from "./Button/TaskDeleteButton";

const Task = ({ task, DeleteHandler }) => {
  return (
    <div>
      <p>{task.text}</p>
      <TaskDeleteButton task={task} DeleteHandler={DeleteHandler} />
    </div>
  );
};

export default Task;
