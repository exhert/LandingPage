/* eslint-disable react/prop-types */
'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react'
// eslint-disable-next-line no-unused-vars
import { ReactElement } from 'react'




export default function Benefits() {
  return (
    <Container maxW={'6xl'} py={10}>
      <SimpleGrid  columns={{ base: 1, md: 2 }} spacing={10} flexDirection={{base: "column-reverse", md: "row"}}  >

      <Flex >
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          
          <Heading>Why Choose Exhert</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          Exhert has an interesting focus on cryptocurrencies and gift cards trading, providing users with a unique way to trade their assets. Gift cards allow users to participate in trades without ever having to deposit their fiat currency. 
          Exhert main focus is to provide a secure environment for users to trade directly with each other, withthe help our Escrow service.
          </Text>
          <Text color={'gray.500'} fontSize={'lg'}>
            Users can choose who to trade with, the rates they trade at and participate in trades without a bank account, with little or no fee among other benefits. The presence of a managing party (Escrow) assurés the overall security of users assets during trades.This 
            makes EXHERT safe and reliable for your trades  since the tradeable assets are held by EXHERT during trades
          </Text>
          <Text color={'gray.500'} fontSize={'lg'}>
            For Fast, Secure and smooth trades Choose EXHERT!
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
           
          </Stack>
        </Stack>
        
      </SimpleGrid>
    </Container>
  )
}