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
      state.tasks.push(action.payload);
    },
    editTask: (
      state,
      action: PayloadAction<{ task: Task; newName: string }>
    ) => {
      const index = state.tasks.indexOf(action.payload.task);
      state.tasks[index].name = action.payload.newName;
    },
    deleteTask: (state, action: PayloadAction<{ id: number }>) => {
      const updatedTasks = state.tasks.filter(
        (task) => task.id === action.payload.id
      );
      state.tasks = updatedTasks;
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
