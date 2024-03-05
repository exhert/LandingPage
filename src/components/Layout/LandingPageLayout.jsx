/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Spacer, Box, VStack, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";

function LandingPageLayout({ children }) {
  return (
    <Box>
      <Container  top="0" maxW="full"    zIndex={100}    bg={useColorModeValue("gray.50", "gray.900")}
>
        <Navbar />
      </Container>
     <Box pt="4rem">
     {children}
     </Box>

      <Box pos="relative" bottom="0" maxW="full" >
        <Footer />
      </Box>
    </Box>
  );
}

export default LandingPageLayout;