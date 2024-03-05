/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {
    Box,
    Flex,
    HStack,
    Container,
    Stack,
    Input,
    Text,
    IconButton,
    useColorModeValue
  } from "@chakra-ui/react";
  import { newsLetterBg } from "../../assets";
import { BiMailSend } from 'react-icons/bi'

const ListHeader = ({ children }) => { // Destructure the children prop
  return (
    <Text fontWeight={'700'} fontSize={'2Xl'} mb={2} color={useColorModeValue('yellow', 'gray.800')}>
      {children}
    </Text>
  );
};
  
  const Newsletter = () => {
    return (
      <Container
        position="relative"
        h={{ base: "20rem", md: "20rem" }}
        maxW={"6xl"}
        borderRadius="xl"
        my={{base: "none", md: "3rem" }}
        overflow="hidden">
        <Box
          position="absolute"
          top="0"
          right="0"
          w="100%"
          h="100%"
          bgGradient={{
            base: "linear(to bottom, #161C24AD 0% , #161C24C7 50%)",
            md: "linear(to left, #161C2486 0% , brand.700 50%)",
          }}
          zIndex={2}
        />
  
        <Box
          position="absolute"
          top="0"
          right="0"
          w="100%"
          h="100%"
          backgroundImage={newsLetterBg}
          bgRepeat="no-repeat"
          bgSize={{ base: "cover", md: "contain" }}
          bgPosition={{ "2sm": "center", md: "right" }}
          zIndex="1"
        />
          <Flex justifyContent={{ "2sm": "center", md: "start" }}>
           <HStack
          zIndex={12}
          float="left"
          justifyContent="center"
          left={{ md: "2rem", lg: "5rem" }}
          position="absolute"
          h={{ base: "20rem", md: "20rem" }}>
          <Stack align={'flex-start'}>
            <ListHeader >Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue( 'whiteAlpha.100','blackAlpha.100')}
                border={0}
                _focus={{
                  bg: 'blackAlpha.100',
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </HStack>
      </Flex>
      </Container>
    );
  };
  export default Newsletter;
  