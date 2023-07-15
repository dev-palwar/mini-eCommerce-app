import { Box, Flex, Icon, IconButton, useColorMode } from '@chakra-ui/react';
import { FaShoppingCart, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: 'gray.200', dark: 'gray.800' };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={4}
      bg={bgColor[colorMode]}
    >
      <Box>
        <Box fontWeight="bold">
          <Link to={'/'}>Looto</Link>
        </Box>
      </Box>
      <Box>
        <IconButton
          aria-label="Toggle Color Mode"
          icon={
            colorMode === 'dark' ? <Icon as={FaSun} /> : <Icon as={FaMoon} />
          }
          onClick={toggleColorMode}
          size="md"
          mr={4}
        />
        <Link to={'/Cart'}>
          <IconButton
            aria-label="Shopping Cart"
            icon={<Icon as={FaShoppingCart} />}
            size="md"
          />
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
