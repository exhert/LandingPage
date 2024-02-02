/* eslint-disable react/prop-types */
import { Box, 
   Icon, 
   Text, 
   Stack, 
   Flex,
   Heading,
   useColorModeValue,
   Container,
   } from '@chakra-ui/react';
   import { useTranslation } from "react-i18next";
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';


const Card = ({ title, text, icon }) => {
  return (
    <Box
    maxW={{ base: "full", md: "340px" }}
    w={"full"}
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    _hover={{ transition: ".25s all ease", boxShadow: "md" }}
    p={5}
  >
    <Stack align={"start"} spacing={2} className="group">
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={useColorModeValue("gray.100", "gray.700")}
        _groupHover={{ bg: "yellow", transition: ".25s all ease" }}
      >
        {icon}
      </Flex>
      <Box mt={2}>
          <Heading
            size="md"
            _groupHover={{ color: "yellow", transition: ".25s all ease" }}
          >
            {title}
          </Heading>
          <Text mt={3} fontSize={"md"}>
            {text}
          </Text>
        </Box>
    </Stack>
    </Box>
  );
};

export default function Features() {
  const { t } = useTranslation();
  return (
    <Box py={{ base: 2, md: 20 }} p={4} bg="white">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Text pt={{ base: 2, md: 5 }} color={"brand.600"} fontSize="xs">
          INSIGHT
        </Text>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          {t("feature_title")}
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
         {t('feature_description')}
        </Text>
      </Stack>
      <Container maxW={"7xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
        <Card
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Lifetime Support'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Card
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Card
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </Flex>
      </Container>
    </Box>
  );
}