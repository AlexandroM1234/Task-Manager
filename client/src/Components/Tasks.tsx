import React from "react";
import { Text } from "@chakra-ui/react";

import TaskCard from "./TaskCard";
import { useAppSelector } from "../Redux/hooks";

const Tasks: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasksReducer.tasks);
  return (
    <div>
      <Text>Tasks</Text>
      {tasks.map((task) => (
        <TaskCard key={task.id} name={task.name} done={task.done} />
      ))}
    </div>
  );
};

export default Tasks;
