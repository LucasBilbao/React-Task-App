import { FaTimes } from "react-icons/fa";
import { useAppDispatch } from "../store";
import { deleteTask, updateTask } from "../features/taskSlice/asyncReducers";
import { Task } from "../interfaces/Task.interface";

interface TaskComponentProps {
  task: Task;
}

function TaskComponent({ task }: TaskComponentProps) {
  const dispatch = useAppDispatch();

  function handleDoubleClick() {
    dispatch(updateTask({ ...task, reminder: !task.reminder }));
  }

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={handleDoubleClick}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red" }}
          onClick={() => dispatch(deleteTask(task.id))}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default TaskComponent;
