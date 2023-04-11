import axios from 'axios';
import { Task } from '../../interfaces/Task.interface';
import { createAsyncThunk } from "@reduxjs/toolkit";


const url = "http://localhost:5000/tasks";

export const getTasks = createAsyncThunk(
  "task/getTasks",
  async (_, thunkApi) => {
    try {
      const res = await axios(url);

      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const addTask = createAsyncThunk(
  "task/addTask",
  async (task: Task, thunkApi) => {
    try {
      const res = await axios.post(url, task);

      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (task: Task, thunkApi) => {
    try {
      const res = await axios.put(`${url}/${task.id}`, task);

      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (taskId: number, thunkApi) => {
    try {
      await axios.delete(`${url}/${taskId}`);

      return taskId;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);