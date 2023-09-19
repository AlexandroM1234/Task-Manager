import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  name: string;
  done: boolean;
}

export interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    {
      id: 1,
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
      action: PayloadAction<{ id: number; name: string; done: boolean }>
    ) => {
      state.tasks.push({
        id: action.payload.id,
        name: action.payload.name,
        done: action.payload.done,
      });
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
