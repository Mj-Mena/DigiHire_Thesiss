import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const UploadResume = () => {
  const navigate = useNavigate();
  const handleOpenCamera = () => {
    navigate('/camera');  
  };
  const handleCloseCamera = () => {
    navigate('/');
  };

  return (
    <Box bg="gray.50" minH="69vh" py={8} boxShadow="lg">
      <Container maxW="container.md">
      <Grid templateColumns="1fr 3fr 3fr 1fr" gap={6}>
        {/* Upload Box */}
        <VStack
          bg="white"
          shadow="md"
          borderRadius="md"
          p={8}
          spacing={4}
          gridColumn="2 / span 2" 
        >
          <Text fontSize="xl" fontWeight="semibold" color="#0B1E33">
            Capture Resume
          </Text>
          <Flex
            direction="column"
            align="center"
            justify="center"
            border="2px dashed"
            borderColor="#0B1E33"
            p={8}
            bg="gray.50"
            borderRadius="md"
            w="100%"
          >
            <img
              src="/iconcloud.png"
              alt="Cloud Icon" 
              className="w-21 h-20"
            />

            <Text fontSize="sm" color="gray.500" mt={2}>
              Click & capture your resume {' '}
              <Text as="span" color="#0B1E33" cursor="pointer" onClick={handleOpenCamera}>
                Open
              </Text>
            </Text>
            <Text fontSize="xs" color="gray.500">
              Max photo size: 5MB
            </Text>
          </Flex>

          {/* Button to open camera */}
          <Button colorScheme="none"
            bg={"#0B1E33"}
            color="white"
            size="lg"
            w="100%"
            mt={6}
            boxShadow="lg" onClick={handleOpenCamera}>
            Open Camera
          </Button>
          <Button colorScheme="none" bg={"gray.50"} color="#0B1E33"  size="lg" boxShadow="lg" mt={4} w="100%" onClick={handleCloseCamera}>
            Back
          </Button>

        </VStack>
        </Grid>
      </Container>
    </Box>
  );
};

export default UploadResume;
