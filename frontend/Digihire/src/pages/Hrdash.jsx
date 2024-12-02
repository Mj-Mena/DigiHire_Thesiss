import React, { useState, useEffect } from "react";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Hrheader from "./Hrheader";
import { IoIosArrowDown } from "react-icons/io";
import Posting from "./Posting"; // Ensure this is correctly imported
import { useNavigate } from "react-router-dom";
import {
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import Getjobpost from "./Getjobpost";
import Candidates from "./Candidates";

const Hrdash = () => {
  const [show, setShow] = useState(false); // For modal control
  const [currentTab, setCurrentTab] = useState("Home");
  const [value, setValue] = useState("asc"); // Sort value

  const tabOrder = ["Home", "Jobs", "Candidates", "Settings"];
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "HR Dashboard"; // Set document title
  }, []);
  const { email } = useParams();
  return (
    <>
      <Hrheader />
      {/* Pass isOpen and onClose props to Posting */}
      <Posting isOpen={show} onClose={() => setShow(false)} />

      <Box p={4} display="grid" height="100vh" width="100%" bg="gray.50">
        <Grid gridTemplateColumns="repeat(12, 1fr)" gap={4}>
          {/* Sidebar Navigation */}
          <GridItem
            colSpan={{ base: 2, md: 2 }}
            colStart={{ base: 1, md: 3 }}
            display="flex"
            flexDirection="column"
            gap={10}
          >
            <Box>
              <Box
                mt={6}
                fontSize="2xl"
                fontWeight="bold"
                color="#0B1E33"
                textAlign="left"
              >
                HR Dashboard
              </Box>
              {tabOrder.map((tab) => (
                <Button
                  key={tab}
                  onClick={() => {
                    setCurrentTab(tab);
                    navigate(`/dashboard/${email}/${tab}`);
                  }}
                  bg="gray.50"
                  color={currentTab === tab ? "#0B1E33" : "#0B1E33.500"}
                  _hover={{ bg: "transparent", color: "#0B1E33" }}
                  _focus={{ outline: "none" }}
                  borderRight={currentTab === tab ? "4px solid gray" : "none"}
                  justifyContent="flex-start"
                  w="100%"
                  h="60px"
                  style={{ fontStyle: "Poppins", fontSize: "18px" }}
                >
                  {tab}
                </Button>
              ))}
            </Box>
          </GridItem>

          {/* Main Content Area */}
          <GridItem
            colSpan={{ base: 4, md: 6 }}
            colStart={{ base: 1, md: 5 }}
            display="flex"
            flexDirection="column"
          >
            <Box
              maxWidth="100%"
              width="100%"
              bg="gray.50"
              boxShadow="md"
              borderRadius="lg"
              flex="1"
              minHeight="300px"
            >
              {/* Home Tab */}
              {currentTab === "Home" && (
                <Box as="fieldset" p={5}>
                  <legend className="font-medium text-lg mb-4">Home</legend>
                  <label>Hello, HR. Welcome to your dashboard.</label>
                </Box>
              )}

              {/* Jobs Tab */}
              {currentTab === "Jobs" && (
                <Box as="fieldset">
                  <Grid
                    gap={4}
                    gridTemplateColumns="repeat(6,1fr)"
                    className="font-medium text-lg mb-4"
                  >
                    <Button
                      onClick={() => setShow(true)} // Open Modal
                      className="col-start-6 bg-Black-Pearl text-white p-2 text-sm"
                    >
                      Post a Job
                    </Button>
                  </Grid>
                  {/* Sorting Section */}
                  <Grid
                    gap={4}
                    gridTemplateColumns="repeat(6,1fr)"
                    className="font-medium text-lg mb-4"
                  >
                    <span className="text-xl font-semibold text-Black-Pearl">
                      My Jobs
                    </span>
                    <span className="col-start-5 text-sm content-center text-gray-500">
                      Job status
                    </span>
                    <MenuRoot>
                      <MenuTrigger
                        className="col-start-6 text-gray-500"
                        asChild
                      >
                        <Button
                          variant="outline"
                          className="border-2"
                          size="sm"
                        >
                          <span className="text-xs">Sort</span>
                          <IoIosArrowDown />
                        </Button>
                      </MenuTrigger>
                      <MenuContent minW="10rem">
                        <MenuRadioItemGroup
                          value={value}
                          onValueChange={(e) => setValue(e.value)}
                        >
                          <MenuRadioItem value="asc">Ascending</MenuRadioItem>
                          <MenuRadioItem value="desc">Descending</MenuRadioItem>
                        </MenuRadioItemGroup>
                      </MenuContent>
                    </MenuRoot>
                  </Grid>

                  <Getjobpost />
                </Box>
              )}

              {/* Other Tabs */}
              {currentTab === "Candidates" && (
                <Box as="fieldset" p={5}>
                  <legend className="font-medium text-lg mb-4">
                    Candidate Details
                  </legend>
                  <Candidates />
                </Box>
              )}
              {currentTab === "Settings" && (
                <Box as="fieldset" p={5}>
                  <legend className="font-medium text-lg mb-4">Settings</legend>
                </Box>
              )}
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Hrdash;
