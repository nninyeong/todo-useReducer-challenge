import { useTasks } from "./Context/TaskContextProvider";
import Task from "./Task";

const TaskList = () => {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </ul>
  );
};

export default TaskList;
