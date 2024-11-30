import React, { useCallback, useRef, useState } from "react";
import { Box, Button, Container, Text, VStack, Flex, Spinner } from "@chakra-ui/react";
import Webcam from "react-webcam";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

function Camera() {
  const [img, setImg] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const webcamRef = useRef(null);
  const navigate = useNavigate();

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
        alert("OCR Processing Complete!")
      }, 3000);
    }
  };
  const handleCloseCamera = () => {
    navigate('/upload');
  };
  const confirmation = () => {
    navigate('/success')
  };

  const exportToPNG = () => {
    if (!img) return;
  
    const element = document.createElement("div");
    element.style.display = "inline-block"; 
    const imgElement = document.createElement("img");
    imgElement.src = img;
    
    element.appendChild(imgElement);
    document.body.appendChild(element);
  
    html2canvas(element, {
      useCORS: true, 
      allowTaint: true, 
      logging: true, 
    }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "resume.png";
      link.click();
      confirmation();
  
      document.body.removeChild(element);
    }).catch(error => {
      console.error("Error capturing image:", error);
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
          <Text fontSize="3xl" fontWeight="bold" color="#0B1E33">
            Focus your resume
          </Text>

          <Flex
            direction="column"
            align="center"
            justify="center"
            border="2px dashed"
            borderColor="#0B1E33"
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
                  mirrored={false}
                  width="100%"
                  height="auto"
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />
                <Button
                  colorScheme="none"
                  size="lg"
                  mt={4}
                  onClick={capture}
                  w="50%"
                  boxShadow="lg"
                  bg={"gray.50"} 
                  color="#0B1E33"
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
                  colorScheme="none"
                  size="lg"
                  mt={4}
                  onClick={() => setImg(null)}
                  w="50%"
                  boxShadow="lg"
                  bg={"gray.50"} 
                  color="#0B1E33"
                >
                  Retake
                </Button>
              </>
            )}
          </Flex>

          <Button
            colorScheme="none"
            bg="#0B1E33"
            color="white"
            size="lg"
            w="100%"
            mt={6}
            boxShadow="lg"
            isLoading={isProcessing}
            loadingText="Processing"
            onClick={exportToPNG}
            disabled={!img}
          >
            Submit
          </Button>

            <Button
              size="lg"
              mt={4}
              onClick={handleCloseCamera}
              w="100%"
              boxShadow="lg"
              bg={"gray.50"} color="#0B1E33"
            >
              Back
            </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default Camera;
