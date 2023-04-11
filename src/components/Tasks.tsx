import { TaskState } from "../interfaces/TaskState.interface";
import { useAppSelector } from "../store";
import TaskComponent from "./Task";

function Tasks() {
  const { tasks }: TaskState = useAppSelector((state) => state.task);

  return (
    <>
      {tasks.map((task: any) => (
        <TaskComponent key={task.id} task={task} />
      ))}
    </>
  );
}

export default Tasks;
