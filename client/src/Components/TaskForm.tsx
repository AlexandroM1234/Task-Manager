import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useAppDispatch } from "../Redux/hooks";
import React from "react";
import { Task } from "../Redux/TasksSlice";
import { Flex } from "@chakra-ui/layout";

type Inputs = {
  name: string;
};

const TaskForm: React.FC = () => {
  const { handleSubmit, register, reset } = useForm<Inputs>({
    defaultValues: {
      name: "",
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data): void => {
    const newTask: Task = {
      id: Date.now(),
      name: data.name,
    };
    dispatch({ type: "tasks/addTask", payload: newTask });
    reset({ name: "" });
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex justifyContent={"center"} marginY={2}>
        <Input
          width={"50%"}
          {...register("name")}
          placeholder="What do you need to get done today?"
          isRequired
        />
        <Button marginLeft={4} type="submit">
          Add Task
        </Button>
      </Flex>
    </form>
  );
};

export default TaskForm;
