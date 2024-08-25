const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "add":
      return [...tasks, { id: action.id, text: action.text, done: false }];
  }
};

export default taskReducer;
