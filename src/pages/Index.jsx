import { Box, Container, VStack, Text, Heading, Button, Flex, SimpleGrid, Image, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const toast = useToast();

  const handleEnroll = (course) => {
    const updatedEnrolledCourses = [...enrolledCourses, course];
    setEnrolledCourses(updatedEnrolledCourses);
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedEnrolledCourses));
    toast({
      title: "Enrollment Successful",
      description: `You have enrolled in ${course.title}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            CodeLearn
          </Heading>
        </Flex>
        <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
          <svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
        <Box display={{ base: "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
          <Flex align="center" justify="flex-end" direction={["column", "row", "row", "row"]} pt={[4, 4, 0, 0]}>
            <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
            <Link to="/courses" style={{ margin: "0 1rem" }}>Courses</Link>
            <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
            <Link to="/contact" style={{ margin: "0 1rem" }}>Contact</Link>
            <Link to="/enrolled-courses" style={{ margin: "0 1rem" }}>Enrolled Courses</Link>
          </Flex>
        </Box>
      </Flex>

      {/* Hero Section */}
      <Box bg="teal.500" color="white" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Learn to Code</Heading>
        <Text fontSize="xl" mb={6}>Join millions of learners from around the world</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </Box>

      {/* Featured Courses */}
      <Box py={20} textAlign="center">
        <Heading as="h3" size="xl" mb={10}>Featured Courses</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Course 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Course Title 1</Heading>
              <Text mb={4}>Brief description of the course.</Text>
              <Button colorScheme="teal">Learn More</Button>
              <Button colorScheme="teal" onClick={() => handleEnroll({ title: "Course Title 1" })}>Enroll</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Course 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Course Title 2</Heading>
              <Text mb={4}>Brief description of the course.</Text>
              <Button colorScheme="teal">Learn More</Button>
              <Button colorScheme="teal" onClick={() => handleEnroll({ title: "Course Title 2" })}>Enroll</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Course 3" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Course Title 3</Heading>
              <Text mb={4}>Brief description of the course.</Text>
              <Button colorScheme="teal">Learn More</Button>
              <Button colorScheme="teal" onClick={() => handleEnroll({ title: "Course Title 3" })}>Enroll</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Testimonials */}
      <Box bg="gray.100" py={20} textAlign="center">
        <Heading as="h3" size="xl" mb={10}>What Our Students Say</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Text fontSize="lg" mb={4}>"This platform has changed my life!"</Text>
            <Text fontWeight="bold">- Student A</Text>
          </Box>
          <Box>
            <Text fontSize="lg" mb={4}>"The best place to learn coding."</Text>
            <Text fontWeight="bold">- Student B</Text>
          </Box>
          <Box>
            <Text fontSize="lg" mb={4}>"Highly recommend to everyone."</Text>
            <Text fontWeight="bold">- Student C</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box bg="teal.500" color="white" py={10} textAlign="center">
        <Text>&copy; 2023 CodeLearn. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;

function toggleMenu() {
  // Function to handle menu toggle on mobile view
}