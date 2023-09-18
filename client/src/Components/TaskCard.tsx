import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  key: number;
  name: string;
  done: boolean;
}

const TaskCard: React.FC<Props> = ({ name, done }) => {
  return (
    <div>
      <Text>{name}</Text>
    </div>
  );
};

export default TaskCard;
