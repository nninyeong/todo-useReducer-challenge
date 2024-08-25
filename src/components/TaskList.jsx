import { useTasks } from "./Context/TaskContextProvider";
import Task from "./Task";
import styled from "styled-components";

const TaskList = () => {
  const tasks = useTasks();

  return (
    <List>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </List>
  );
};

export default TaskList;

const List = styled.ul`
  overflow-y: auto;
`;
