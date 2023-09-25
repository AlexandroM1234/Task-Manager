import * as React from "react";
import { ChakraProvider, Box, Heading, theme, Flex } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Tasks from "./Components/Tasks";
import TaskForm from "./Components/TaskForm";

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Flex justifyContent={"center"}>
        <Heading>Task Manager</Heading>
      </Flex>
      <TaskForm />
      <Tasks />
    </Box>
  </ChakraProvider>
);
