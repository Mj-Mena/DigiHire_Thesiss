import React, { useCallback, useRef, useState } from "react";
import { Box, Button, Container, Text, VStack, Flex, Spinner } from "@chakra-ui/react";
import Webcam from "react-webcam";
import html2canvas from "html2canvas";

function Camera() {
  const [img, setImg] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 640,  // Increased video width
    height: 480, // Increased video height
    facingMode: "environment",  // Using the back camera
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);

  const handleSubmit = () => {
    if (img) {
      // Store the image in localStorage
      localStorage.setItem("capturedImage", img);
      setIsProcessing(true);

      // Simulate OCR processing (you can replace this with actual OCR logic)
      setTimeout(() => {
        setIsProcessing(false);  // Stop processing after 3 seconds (simulate OCR)
        alert("OCR Processing Complete!");
      }, 3000);
    }
  };

  // Function to export image as PNG
  const exportToPNG = () => {
    // Create a div container to hold the captured image
    const element = document.createElement("div");
    const imgElement = document.createElement("img");
    imgElement.src = img;
    element.appendChild(imgElement);

    // Use html2canvas to render the image to a canvas
    html2canvas(element).then((canvas) => {
      // Convert canvas to PNG and create a download link
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "captured_image.png";
      link.click();
    });
  };

  return (
    <Box bg="gray.50" minH="100vh" py={12}>
      <Container maxW="container.lg">
        <VStack
          bg="white"
          shadow="lg"
          borderRadius="md"
          borderWidth="1px"
          borderColor="gray.200"
          p={12}
          spacing={8}
        >
          <Text fontSize="3xl" fontWeight="bold" color="gray.700">
            Capture Your Photo
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
            mb={6}
            boxShadow="md"
          >
            {img === null ? (
              <>
                <Webcam
                  audio={false}
                  mirrored={true}
                  width="100%"
                  height="auto"
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />
                <Button
                  colorScheme="blue"
                  size="lg"
                  mt={4}
                  onClick={capture}
                  w="50%"
                  boxShadow="lg"
                >
                  Capture Resume
                </Button>
              </>
            ) : (
              <>
                <Box mb={6}>
                  <img src={img} alt="screenshot" width="100%" height="auto" />
                </Box>
                <Button
                  colorScheme="red"
                  size="lg"
                  mt={4}
                  onClick={() => setImg(null)}
                  w="50%"
                  boxShadow="lg"
                >
                  Retake
                </Button>
              </>
            )}
          </Flex>

          <Button
            colorScheme="none"
            bg={"green.600"}
            color="white"
            size="lg"
            w="100%"
            mt={6}
            boxShadow="lg"
            isLoading={isProcessing}
            loadingText="Processing"
            onClick={handleSubmit}
            disabled={!img}
          >
            Submit
          </Button>

          {img && (
            <Button
              colorScheme="teal"
              size="lg"
              mt={4}
              onClick={exportToPNG}
              w="100%"
              boxShadow="lg"
            >
              Export to PNG
            </Button>
          )}
        </VStack>
      </Container>
    </Box>
  );
}

export default Camera;
