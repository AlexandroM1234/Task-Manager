import * as React from "react";
import { Box, Heading, Flex, Tooltip, useColorMode } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Tasks from "./Components/Tasks";
import TaskForm from "./Components/TaskForm";

export const App: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Box textAlign="center">
      <Flex marginY={4} justifyContent={"center"} alignItems={"center"}>
        <Heading marginLeft={"auto"}>Task Manager</Heading>
        <Box marginLeft={"auto"} marginRight={"4"}>
          <Tooltip label={`Toggle ${colorMode === "light" ? "Dark" : "Light"}`}>
            <span>
              <ColorModeSwitcher />
            </span>
          </Tooltip>
        </Box>
      </Flex>
      <TaskForm />
      <Tasks />
    </Box>
  );
};
