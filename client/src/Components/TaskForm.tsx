import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useAppDispatch } from "../Redux/hooks";
import React, { useState } from "react";
import { Task } from "../Redux/TasksSlice";

type Inputs = {
  name: string;
};

const TaskForm: React.FC = () => {
  const [pendingTask, setPendingTask] = useState("");
  const { handleSubmit, register } = useForm<Inputs>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data): void => {
    const newTask: Task = {
      id: Date.now(),
      name: data.name,
      done: false,
    };
    dispatch({ type: "tasks/addTask", payload: newTask });
    setPendingTask("");
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setPendingTask(e.currentTarget.value);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("name")}
        onChange={handleChange}
        value={pendingTask}
        placeholder="Enter a new task"
      />
      <Button type="submit">Create New Task</Button>
    </form>
  );
};

export default TaskForm;
