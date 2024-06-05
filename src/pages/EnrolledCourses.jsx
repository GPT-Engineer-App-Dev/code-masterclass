import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedCourses);
  }, []);

  return (
    <Container maxW="container.xl" p={0}>
      <Box py={20} textAlign="center">
        <Heading as="h3" size="xl" mb={10}>Enrolled Courses</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Box p={6}>
                  <Heading as="h4" size="md" mb={2}>{course.title}</Heading>
                </Box>
              </Box>
            ))
          ) : (
            <Text>No enrolled courses found.</Text>
          )}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default EnrolledCourses;