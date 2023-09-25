import React from "react";
import { useAppDispatch } from "../Redux/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input, Flex, Box } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

interface Props {
  id: number;
  edit: boolean;
  name: string;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

type Inputs = {
  name: string;
};

const EditTask: React.FC<Props> = ({ id, edit, name, setEdit }) => {
  const { handleSubmit, register, reset } = useForm<Inputs>({
    defaultValues: { name },
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data): void => {
    dispatch({
      type: "tasks/editTask",
      payload: { newName: data.name, id },
    });
    reset({ name: "" });
    setEdit(!edit);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Input width={"100%"} {...register("name")} isRequired />
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
