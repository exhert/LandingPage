import {
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Container,
  } from '@chakra-ui/react';
  import { useTranslation } from "react-i18next";
  import Button from '../Base/Button';
  import { NavLink } from "react-router-dom";
  
  export default function Hero() {
    const { t } = useTranslation();

    return (
      <Container maxW={'6xl'}>
      <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                {t('Freelance')}
              </Text>
              <br />{' '}
              <Text color={'yellow'} as={'span'}>
                Design Projects
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.800'}>
              The project board is an exclusive resource for contract work. It`s
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <NavLink to={"/auth/register"}>
            <Button
              variant="brand"
              borderRadius="8px"
              py="4"
              px="4"
              rounded={'full'}
              lineHeight="1"
              size="md">
              Get Early Access
            </Button>
          </NavLink>
            </Stack>
          </Stack>
          <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Image
            alt={'Login Image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
      </Stack>
      </Container>
    );
  }