import React from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import "./page.css";
import { useNavigate } from "react-router-dom";
const Hrheader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear tokens from localStorage
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
    // Redirect to the login page
    navigate("/");
  };
  const back = () => {
    window.location = "https://192.168.254.112:5173/dashboard/mj@gmail.com/";
  };
  return (
    <>
      <div className="wfull-h100">
        <Box
          className="second-div"
          display="grid"
          alignItems="center"
          p={4}
          boxShadow="sm"
          bg="light"
        >
          <Heading
            className="logo maintext f-600  cursor-pointer"
            onClick={back}
          >
            RPC
          </Heading>
          <MenuRoot>
            <MenuTrigger asChild>
              <Button className="lang" variant="outline" size="sm">
                Language
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="tagalog">Tagalog</MenuItem>
              <MenuItem value="english">English</MenuItem>
            </MenuContent>
          </MenuRoot>
          <Button
            className=" bg-blue-light"
            color="white"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </div>
    </>
  );
};
export default Hrheader;
