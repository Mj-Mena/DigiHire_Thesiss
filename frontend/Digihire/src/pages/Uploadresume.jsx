import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
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
    setIsCameraOpen(false);
  };

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="container.md">
        {/* Upload Box */}
        <VStack
          bg="white"
          shadow="md"
          borderRadius="md"
          borderWidth="1px"
          borderColor="gray.200"
          p={8}
          spacing={4}
        >
          <Text fontSize="xl" fontWeight="semibold">
            Capture Resume
          </Text>
          <Flex
            direction="column"
            align="center"
            justify="center"
            border="2px dashed"
            borderColor="gray.300"
            p={8}
            borderRadius="md"
            w="100%"
          >
            <Text fontSize="sm" color="gray.500" mt={2}>
              Click & capture your resume {' '}
              <Text as="span" color="blue.400" cursor="pointer" onClick={handleOpenCamera}>
                Open
              </Text>
            </Text>
            <Text fontSize="xs" color="gray.500">
              Max photo size: 5MB
            </Text>
          </Flex>

          {/* Button to open camera */}
          <Button colorScheme="none" color="black"  size="md" mt={4} onClick={handleOpenCamera}>
            Open Camera
          </Button>

        </VStack>
      </Container>
    </Box>
  );
};

export default UploadResume;
