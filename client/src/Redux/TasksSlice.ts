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
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    editTask: (
      state,
      action: PayloadAction<{ newName: string; id: number }>
    ) => {
      const updateTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      updateTask!.name = action.payload.newName;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const updatedTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      state.tasks = updatedTasks;
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
