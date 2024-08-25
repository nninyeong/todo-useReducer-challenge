import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "add":
      return [...tasks, { id: action.id, text: action.text, done: false }];
    case "delete":
      return tasks.filter((task) => task.id !== action.task.id);
    case "doneToggle":
      return tasks.map((task) => {
        if (task.id === action.task.id) return { ...task, done: !task.done };
        else return task;
      });
    case "edit":
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return { ...task, text: action.editedText };
        } else {
          return task;
        }
      });
  }
};

const useTasks = () => {
  return useContext(TasksContext);
};

const useTasksDispatch = () => {
  return useContext(TasksDispatchContext);
};

export { useTasks, useTasksDispatch };
export default TaskContextProvider;
