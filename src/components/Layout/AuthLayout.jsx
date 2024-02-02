/* eslint-disable react/prop-types */
import {
    Box,
    Image,
    HStack  } from "@chakra-ui/react";
  import {
    registrationIllustration,
  } from "../../assets";

  
  const AuthLayout = ({children}) => {
 
    return (
      <HStack position="relative" w="full" h="100vh" overflow="hidden">
        <Box w={{md: "40%"}} h="100vh" display={{base: "none", md:"flex"}}>
          <Image
            h="full"
            w="full"
            objectFit="contain"
            src={registrationIllustration}
          />
        </Box>
       {children}
      </HStack>
    );
  };
  
  export default AuthLayout;
  