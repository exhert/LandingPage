import { Flex, Spinner } from "@chakra-ui/react";

export default function LoadingPage() {
  return (
    <Flex w="full" minH="100vh" justifyContent="center" alignItems="center">
      <Spinner size="xl" color="brand.900" />
    </Flex>
  );
}