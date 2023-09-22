import { Text, Card, Button, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useAppDispatch } from "../Redux/hooks";
import React, { useEffect, useState } from "react";
import EditTask from "./EditTask";

interface Props {
  id: number;
  name: string;
  done: boolean;
}

const TaskCard: React.FC<Props> = ({ id, name, done }) => {
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState(false);

  const handleDelete = (id: number) => {
    dispatch({ type: "tasks/deleteTask", payload: id });
  };
  useEffect(() => {}, [edit]);

  return (
    <Card
      width={"50%"}
      padding={4}
      marginY={2}
      variant={"outline"}
      justifyContent={"space-evenly"}
      align={"center"}
      direction={"row"}
    >
      {edit ? (
        <EditTask id={id} edit={edit} setEdit={setEdit} />
      ) : (
        <Text width={"50%"}>{name}</Text>
      )}
      {!edit ? (
        <Box>
          <Button onClick={() => setEdit(!edit)} marginX={2}>
            <EditIcon />
          </Button>
          <Button onClick={() => handleDelete(id)} marginX={2}>
            <DeleteIcon />
          </Button>
        </Box>
      ) : null}
    </Card>
  );
};

export default TaskCard;
