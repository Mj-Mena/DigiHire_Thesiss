import React from "react";
import { Box, Grid, Heading, Text, Link, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box bg="#0B1E33" color="white" py="10" px="5" overflow="hidden">
        <Grid templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }} gap="6">
          <Box
            gridColumn={{ md: "span 1" }}
            display={{ base: "none", md: "block" }}
          />

          <Box
            gridColumn={{ md: "span 1" }}
            display={{ base: "none", md: "block" }}
          />

          <VStack align="start" gridColumn={{ base: "span 3", md: "span 3" }}>
            <Heading size="md">Reliance Producers Cooperative</Heading>
            <Text>Call now: (+6346) 430 0412 to 15</Text>
            <Text>#7 Golden Mile Ave, Carmona, Cavite 4116 Philippines</Text>
          </VStack>

          <VStack align="start" gridColumn={{ base: "span 3", md: "span 2" }}>
            <Heading size="md">Quick Links</Heading>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Pricing</Link>
          </VStack>

          <VStack align="start" gridColumn={{ base: "span 3", md: "span 2" }}>
            <Heading size="md">Support</Heading>
            <Link href="#">FAQs</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </VStack>

          <VStack align="start" gridColumn={{ base: "span 3", md: "span 2" }}>
            <Heading size="md">Follow Us</Heading>
            <Link href="#">Facebook</Link>
          </VStack>
        </Grid>
        <Text textAlign="center" mt="8" fontSize="sm" color="gray.300">
          Â© 2024 Reliance Producers Cooperative. All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default Footer;
