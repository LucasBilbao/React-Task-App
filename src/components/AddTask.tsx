import React, { useState } from "react";
import { useAppDispatch } from "../store";
import { Task } from "../interfaces/Task.interface";
import { addTask } from "../features/taskSlice/asyncReducers";

function AddTask() {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const dispatch = useAppDispatch();

  function handleSubmit() {
    const id = new Date().getTime();
    const task: Task = {
      id,
      text,
      day: day.split("T").join(" "),
      reminder,
    };
    dispatch(addTask(task));
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Task Text"
          value={text}
          onChange={(e: any) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="datetime-local"
          placeholder="Task Date"
          value={day}
          onChange={(e: any) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e: any) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
}

export default AddTask;
