import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import React, { useState } from "react";

type Inputs = {
  name: string;
};

const TaskForm: React.FC = () => {
  const [pendingTask, setPendingTask] = useState("");
  const { handleSubmit, register } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data): void => {
    console.log(data.name);
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
