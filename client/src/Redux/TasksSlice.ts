import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Task {
  name: string;
  done: boolean;
}

export interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    {
      name: "Finish this app",
      done: false,
    },
  ],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{ name: string; done: boolean }>
    ) => {
      state.tasks.push({
        name: action.payload.name,
        done: action.payload.done,
      });
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
