import React from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import "./page.css";
const Header = () => {
  const currentIP = window.location.hostname;
  const serverURL = `https://${currentIP}:5173/`;
  const handleclick = () => {
    window.location = serverURL + "sign";
  };
  const back = () => {
    window.location = serverURL;
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
            onClick={handleclick}
          >
            Sign In
          </Button>
        </Box>
      </div>
    </>
  );
};
export default Header;
