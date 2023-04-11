import { createSlice } from "@reduxjs/toolkit";
import { TaskState } from "../../interfaces/TaskState.interface";
import { Task } from "../../interfaces/Task.interface";
import { addTask, deleteTask, getTasks, updateTask } from "./asyncReducers";

const initialState: TaskState = {
  tasks: [],
  isLoading: false,
};

const { reducer } = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getTasks.fulfilled,
        (state, { payload: tasks }: { payload: Task[] }) => {
          state.tasks = tasks;
          state.isLoading = false;
        }
      )
      .addCase(getTasks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        addTask.fulfilled,
        (state, { payload: newTask }: { payload: Task }) => {
          state.tasks.push(newTask);
          state.isLoading = false;
        }
      )
      .addCase(addTask.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        updateTask.fulfilled,
        (state, { payload: updTask }: { payload: Task }) => {
          state.tasks = state.tasks.map((task) =>
            task.id === updTask.id ? updTask : task
          );
          state.isLoading = false;
        }
      )
      .addCase(updateTask.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, { payload: taskId }: any) => {
        state.tasks = state.tasks.filter((task) => task.id !== taskId);
        console.log(typeof taskId);

        state.isLoading = false;
      })
      .addCase(deleteTask.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default reducer;
