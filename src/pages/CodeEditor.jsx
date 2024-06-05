import { Box, Button, Container, Flex, Heading, Textarea, Text } from "@chakra-ui/react";
import { useState } from "react";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      // Using eval to execute the code (for demonstration purposes only)
      // In a real-world scenario, consider using a safer method to execute code
      const result = eval(code);
      setOutput(result);
    } catch (error) {
      setOutput(error.message);
    }
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Box py={20} textAlign="center">
        <Heading as="h3" size="xl" mb={10}>Code Editor</Heading>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
          size="lg"
          height="300px"
          mb={4}
        />
        <Button colorScheme="teal" onClick={runCode} mb={4}>Run</Button>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h4" size="md" mb={2}>Output:</Heading>
          <Text>{output}</Text>
        </Box>
      </Box>
    </Container>
  );
};

export default CodeEditor;