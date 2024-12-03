import React, { useCallback, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Text,
  VStack,
  Flex,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import Webcam from "react-webcam";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

function Camera() {
  const [img, setImg] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [ocrResult, setOcrResult] = useState(""); // State to store OCR result
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "environment",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }

    return new Blob([uintArray], { type: mimeString });
  };

  const sendImageToBackend = async () => {
    if (img) {
      try {
        const formData = new FormData();
        const imageBlob = dataURItoBlob(img);
        formData.append("file", imageBlob, "resume.jpg");

        setIsProcessing(true); // Show the spinner

        const response = await fetch("https://127.0.0.1:8000/getocr/", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log("OCR Result:", data.result);
          setOcrResult(data.result); // Store the OCR result
        } else {
          console.error("Failed to process the image:", response.statusText);
          alert("Failed to process the image. Please try again.");
        }
      } catch (err) {
        console.error("Error sending image:", err);
        alert("An error occurred. Please try again.");
      } finally {
        setIsProcessing(false); // Reset the processing state
      }
    }
  };

  const handleCloseCamera = () => {
    navigate("/upload");
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
    })
      .then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "resume.png";
        link.click();
        sendImageToBackend(); // Call backend for OCR processing
        document.body.removeChild(element);
      })
      .catch((error) => {
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
            bg={"gray.50"}
            color="#0B1E33"
          >
            Back
          </Button>

          {/* Display OCR result */}
          {ocrResult && (
            <Box mt={8} w="100%">
              <Text fontSize="2xl" fontWeight="bold" color="#0B1E33">
                OCR Result:
              </Text>
              <Textarea
                value={ocrResult}
                isReadOnly
                bg="gray.100"
                height="200px"
                mt={4}
              />
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  );
}

export default Camera;
