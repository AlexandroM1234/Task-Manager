import { Text, Card, Button, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React from "react";

interface Props {
  key: number;
  name: string;
  done: boolean;
}

const TaskCard: React.FC<Props> = ({ name, done }) => {
  return (
    <Card
      width={"50%"}
      padding={4}
      marginY={2}
      variant={"outline"}
      justifyContent={"space-between"}
      align={"center"}
      direction={"row"}
    >
      <Text>{name}</Text>
      <Box>
        <Button marginX={2}>
          <EditIcon />
        </Button>
        <Button marginX={2}>
          <DeleteIcon />
        </Button>
      </Box>
    </Card>
  );
};

export default TaskCard;
