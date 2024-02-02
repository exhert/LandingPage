import {
    Box,
    Flex,
    HStack,
    Heading,
    Text,
    Image,
    Container,
  } from "@chakra-ui/react";
  import { appleLogo, newsLetterBg, playstoreLogo } from "../../assets";
  import Button from "../Base/Button";
  
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
          <Box direction="row">
            <Box color="white" mb="1rem">
              <Heading
                fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
                pb={{ md: ".5rem" }}
                fontWeight={"bold"}
                textAlign={{ base: "center" }}>
                Locate your favorite bank
              </Heading>
              <Text
                color={"gray.400"}
                textAlign={{ base: "center", md: "left" }}
                fontSize={{ base: "sm", sm: "lg" }}>
                Locate institutions offering your service
              </Text>
            </Box>
            <Flex justifyContent={{ base: "center" }} columnGap= "1rem">
              <Button variant="darkBrand" py="1.8rem">
                <HStack>
                  <Image src={appleLogo} />
                  <Box>
                    <Text fontSize="xs" color="gray.200">
                      Download On The
                    </Text>
                    <Heading as="h6" fontSize={{ md: "1.2rem" }}>
                      Apple Store
                    </Heading>
                  </Box>
                </HStack>
              </Button>
              <Button variant="darkBrand" py="1.8rem">
                <HStack>
                  <Image src={playstoreLogo} />
                  <Box>
                    <Text fontSize="xs" color="gray.200">
                      Download From
                    </Text>
                    <Heading as="h6" fontSize={{ md: "1.2rem" }}>
                      Google Play
                    </Heading>
                  </Box>
                </HStack>
              </Button>
            </Flex>
          </Box>
        </HStack>
      </Flex>
      </Container>
    );
  };
  export default Newsletter;
  