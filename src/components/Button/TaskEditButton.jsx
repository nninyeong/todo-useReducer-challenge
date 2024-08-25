import { useTasksDispatch } from "../Context/TaskContextProvider";
import Button from "./Button";

const TaskEditButton = ({ task, isEditing, setIsEditing, editedValue }) => {
  const dispatch = useTasksDispatch();
  const EditHandler = () => {
    if (isEditing) {
      dispatch({
        type: "edit",
        task: task,
        editedText: editedValue,
      });

      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return <Button onClick={EditHandler}>{isEditing ? "저장" : "수정"}</Button>;
};

export default TaskEditButton;
