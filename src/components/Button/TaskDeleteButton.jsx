import Button from "./Button";

const TaskDeleteButton = ({ task, DeleteHandler }) => {
  return (
    <Button
      onClick={() => {
        DeleteHandler(task);
      }}
    >
      삭제
    </Button>
  );
};

export default TaskDeleteButton;
