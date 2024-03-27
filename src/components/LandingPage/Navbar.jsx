/* eslint-disable react/prop-types */
import {
    Box,
    Flex,
    Text,
    // IconButton,
    Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
    // useDisclosure,
    Container,
  } from '@chakra-ui/react';
  import { NavLink } from 'react-router-dom';
  // import {
  //   HamburgerIcon,
  //   CloseIcon,
  // } from '@chakra-ui/icons';
  
  export default function Navbar() {
    // const { isOpen, onToggle } = useDisclosure();

    // const history = useHistory();

    return (
     <Box w="100%"
     borderBottom={1}
     borderStyle={'solid'}
     borderColor={useColorModeValue('gray.200', 'gray.900')}
     >
      <Container maxW="6xl">
        <Flex
        //   bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}>
          {/* <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex> */}
          <Flex
          flex={{ base: 1 }}
          alignItems="center"
          justifyContent={{ base: "center", md: "space-between" }}
        >
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              Logo
            </Text>
  
            {/* <Flex display={{ base: 'none', md: 'flex' }} >
              <DesktopNav />
            </Flex> */}
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            columnGap={{ md: ".5rem" }}>
            {/* <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}
              spacing = {"1rem"}>
              Sign In
            </Button> */}
            <NavLink to="/register">
            <Button
              display={{ base: 'flex', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'brand.700'}
               onClick={() => history.push('/register')}
              
              _hover={{
                bg: 'brand.500',
              }}>
              Get Early Access
            </Button>
            </NavLink>
          </Stack>
          </Flex>
        </Flex>
{/*   
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse> */}
      </Container>
      </Box>   
    );
  }
  
  // const DesktopNav = () => {
  //   const linkColor = useColorModeValue('gray.600', 'gray.200');
  //   const linkHoverColor = useColorModeValue('brand.200', 'white');
  //   const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  //   // const location = useLocation();


  //   return (
  //     <Stack direction={'row'} columnGap="2.5rem">
  //       {NAV_ITEMS.map((navItem) => (
  //         <Box key={navItem.label}>
  //           <Popover trigger={'hover'} placement={'bottom-start'}>
  //             <PopoverTrigger>
  //               <Link
  //                 p={2}
  //                 href={navItem.href ?? '#'}
  //                 fontSize={'sm'}
  //                 fontWeight="bold"
  //                 color={linkColor}

  //                 _hover={{
  //                   textDecoration: 'none',
  //                   color: linkHoverColor,
  //                 }}>
  //                <Stack direction="row" align="center">
  //                  <Text>{navItem.label}</Text> 
  //                   {/* Display icon only if item has children */}
  //                   {navItem.children && (
  //                     <Icon as={ChevronDownIcon} boxSize={4} />
  //                   )}
  //                 </Stack>
  //               </Link>
  //             </PopoverTrigger>
  
  //             {navItem.children && (
  //               <PopoverContent
  //                 border={0}
  //                 boxShadow={'xl'}
  //                 bg={popoverContentBgColor}
  //                 p={4}
  //                 rounded={'xl'}
  //                 minW={'sm'}>
  //                 <Stack>
  //                   {navItem.children.map((child) => (
  //                     <DesktopSubNav key={child.label} {...child} />
  //                   ))}
  //                 </Stack>
  //               </PopoverContent>
  //             )}
  //           </Popover>
  //         </Box>
  //       ))}
  //     </Stack>
  //   );
  // };
  
  // const DesktopSubNav = ({ label, href, subLabel }) => {
  //   return (
  //     <Link
  //       href={href}
  //       role={'group'}
  //       display={'block'}
  //       p={2}
  //       rounded={'md'}
  //       _hover={{ bg: useColorModeValue('yellow.50', 'gray.900') }}>
  //       <Stack direction={'row'} align={'center'}>
  //         <Box>
  //           <Text
  //             transition={'all .3s ease'}
  //             _groupHover={{ color: 'yellow.400' }}
  //             fontWeight={500}>
  //             {label}
  //           </Text>
  //           <Text fontSize={'sm'}>{subLabel}</Text>
  //         </Box>
  //         <Flex
  //           transition={'all .3s ease'}
  //           transform={'translateX(-10px)'}
  //           opacity={0}
  //           _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
  //           justify={'flex-end'}
  //           align={'center'}
  //           flex={1}>
  //         </Flex>
  //       </Stack>
  //     </Link>
  //   );
  // };
  
  // const MobileNav = () => {
    
  //   return (
  //     <Stack
  //       bg={useColorModeValue('white', 'gray.800')}
  //       p={4}
  //       display={{ md: 'none' }}
       
  //       >
  //        {NAV_ITEMS.map((navItem, index) => (
  //       <>
  //         <MobileNavItem key={navItem.label} {...navItem} />
  //         {index < NAV_ITEMS.length - 1 && <Divider borderColor="gray.300"/>} {/* Divider used here */}
  //       </>
  //     ))}
  //     </Stack>
  //   );
  // };
  
  

  // const MobileNavItem = ({ label, children, href }) => {
  //   const { isOpen, onToggle } = useDisclosure();
  //   const hoverBgColor = useColorModeValue('yellow.50', 'gray.700');
  //   const linkHoverColor = useColorModeValue('brand.200', 'white');
  
  //   return (
  //     <Stack spacing={4} onClick={children && onToggle}>
  //       <Flex
  //         py={2}
  //         as={Link}
  //         href={href ?? '#'}
  //         justify={'space-between'}
  //         align={'center'}
  //         _hover={{
  //           textDecoration: 'none',
  //           color: linkHoverColor,
  //         }}
  //       >
  //         <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}
  //         _hover={{
  //           textDecoration: 'none',
  //           color: linkHoverColor,
  //         }}>
  //           {label}
  //         </Text>
  //         {children && (
  //           <Icon
  //             as={ChevronDownIcon}
  //             transition={'all .25s ease-in-out'}
  //             transform={isOpen ? 'rotate(180deg)' : ''}
  //             w={6}
  //             h={6}
  //           />
  //         )}
  //       </Flex>
  
  //       <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
  //         <Stack
  //           mt={2}
  //           pl={4}
  //           borderLeft={1}
  //           borderStyle={'solid'}
  //           borderColor={useColorModeValue('gray.200', 'gray.700')}
  //           align={'start'}
  //         >
  //           {children &&
  //             children.map((child, ) => (
  //               <Link
  //                 key={child.label}
  //                 py={2}
  //                 href={child.href}
  //                 rounded={'md'}
  //                 _hover={{
  //                   textDecoration: 'none',
  //                   bg: hoverBgColor, // Change the background color on hover
  //                 }}
  //                 w="100%"
  //               >
  //                 {child.label}
  //               </Link>
                
  //             ))}
  //         </Stack>
  //       </Collapse>
  //     </Stack>
  //   );
  // };
  