import { Text, Card, Button, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useAppDispatch } from "../Redux/hooks";
import React from "react";

interface Props {
  id: number;
  name: string;
  done: boolean;
}

const TaskCard: React.FC<Props> = ({ id, name, done }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch({ type: "tasks/deleteTask", payload: id });
  };

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
        <Button onClick={() => handleDelete(id)} marginX={2}>
          <DeleteIcon />
        </Button>
      </Box>
    </Card>
  );
};

export default TaskCard;
