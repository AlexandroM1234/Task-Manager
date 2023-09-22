import React from "react";
import { useAppDispatch } from "../Redux/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input, Flex, Box } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

interface Props {
  id: number;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

type Inputs = {
  name: string;
};

const EditTask: React.FC<Props> = ({ id, edit, setEdit }) => {
  const { handleSubmit, register, reset } = useForm<Inputs>();
  //   const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data): void => {
    console.log(data.name);
    // dispatch({ type: "tasks/addTask", payload: newTask });
    reset({ name: "" });
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Input
            width={"100%"}
            {...register("name")}
            placeholder="Enter a new task"
            isRequired
          />
        </Box>

        <Box>
          <Button type="submit" marginX={2}>
            <CheckIcon />
          </Button>
          <Button onClick={() => setEdit(!edit)} marginX={2}>
            <CloseIcon />
          </Button>
        </Box>
      </Flex>
    </form>
  );
};

export default EditTask;
