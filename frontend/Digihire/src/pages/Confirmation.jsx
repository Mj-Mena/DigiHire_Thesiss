import React from 'react';
import { Box, Button, Stack, Text, Heading } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); 
  };

  return (
    <Box maxW="md" mx="auto" my="20" p="5" boxShadow="md" borderRadius="lg" bg="white">
      <Stack spacing={4} textAlign="center">
        <Heading size="lg">Success!</Heading>
        <Text>
          Kindly wait for guidance.
        </Text>

        <Stack direction="row" spacing={4} justify="center">
          <Button colorScheme="gray" onClick={handleBack}>
            Go Back
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

const SuccessPage = () => {
  return (
    <Box textAlign="center" p="10">
      <Heading>Action Successful!</Heading>
      <Text>Your action has been successfully completed.</Text>
    </Box>
  );
};
export default Confirmation;