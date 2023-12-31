import React from "react";
import { Flex } from "@chakra-ui/react";

import TaskCard from "./TaskCard";
import { useAppSelector } from "../Redux/hooks";

const Tasks: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasksReducer.tasks);
  return (
    <Flex direction={"column"} align={"center"}>
      {tasks.map((task) => (
        <TaskCard key={task.id} id={task.id} name={task.name} />
      ))}
    </Flex>
  );
};

export default Tasks;
