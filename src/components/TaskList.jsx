import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </ul>
  );
};

export default TaskList;
