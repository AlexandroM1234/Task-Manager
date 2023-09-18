import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  name: string;
  done: boolean;
}

const TaskCard: React.FC<Props> = ({ name, done }) => {
  return (
    <div>
      <Text>{name}</Text>
      <Text>{done}</Text>
    </div>
  );
};

export default TaskCard;
