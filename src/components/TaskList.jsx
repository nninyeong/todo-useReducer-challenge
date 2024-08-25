import Task from "./Task";

const TaskList = ({ tasks, DeleteHandler }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} DeleteHandler={DeleteHandler} />;
      })}
    </ul>
  );
};

export default TaskList;
