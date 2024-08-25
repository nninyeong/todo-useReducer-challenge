const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "add":
      return [...tasks, { id: action.id, text: action.text, done: false }];
    case "delete":
      return tasks.filter((task) => task.id !== action.task.id);
  }
};

export default taskReducer;
