import React from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); 
  };

  return (
    <div className="color-white align-items-center justify-content-center flex min-h-screen">
    <div className="w-[80vw] h-[90vh] min-h-[430px] p-0 border border-solid border-white flex items-center justify-center bg-[white]">
      <div className="flex-1 flex justify-start items-center p-4">
        <div className="image-container">
          <img
            src="/error.png"
            alt="Descriptive text for image"
            className="w-[500px] h-[500px] object-contain ml={9}" 
          />
        </div>
        <VStack 
          height="80vh"
          width={["90vw", "60vw", "40vw"]}
          spacing={6} 
          align="center" 
          justify="center"
          wrap="wrap"
        >
          <Text fontSize={["lg", "2xl"]} fontWeight="bold" color="#0B1E33" >
            WOOPS!
          </Text>
          <Text color="gray.600" className="text-center" fontSize={["md", "lg"]} whiteSpace={'normal'}> 
            An error has been occured. <br></br>
            Try again.
          </Text>
          <Button colorScheme="none" color="#0B1E33"  size="lg" mt={4} w="100%" onClick={handleBack} _hover={{ textDecoration: 'underline' }}
            textDecoration="underline">
            Go Back
          </Button>
          <Button
            colorScheme="none"
            color="#0B1E33"
            size="lg"
            mt={2}
            w="100%"
            onClick={() => window.location.reload()} // Refreshes the page
            _hover={{ textDecoration: 'underline' }}
            textDecoration="underline"
            >
            Refresh Page
        </Button>
        </VStack>
      </div>
    </div>
    </div>
    

  );
};


export default Error;
