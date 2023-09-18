import * as React from "react";
import { ChakraProvider, Box, Heading, theme, Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Tasks from "./Components/Tasks";

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Flex justifyContent={"center"}>
        <Heading>Task Manager</Heading>
      </Flex>
      <Tasks />
    </Box>
  </ChakraProvider>
);
