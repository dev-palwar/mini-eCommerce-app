import {
  Box,
  HStack,
  Heading,
  Stack,
  VStack,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const cart = () => {
  const image =
    'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg';

  return (
    <>
      <Stack>
        <HStack>
          <Box height={'70vh'} width={'1900px'} overflow={'scroll'}>
            <Card image={image} />
          </Box>
          <Box
            border={'2px solid yellow'}
            height={'70vh'}
            width={'50%'}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <VStack spacing={4}>
                <Heading>Subtotal: 120000</Heading>
                <Heading>Shipping: 100</Heading>
                <Heading>Tax: 20</Heading>
                <Heading>Total: 120120</Heading>
              </VStack>
            </Box>
          </Box>
        </HStack>
      </Stack>
    </>
  );
};

const Card = ({ image }) => {
  return (
    <>
      <Box
        p={10}
        margin={2}
        borderRadius={'6px'}
        bgColor={'white'}
        color={'black'}
        fontWeight={'bold'}
      >
        <HStack>
          <Box>
            <VStack alignItems={'baseline'}>
              <Image src={image} maxWidth={'20%'} />
              <h3>Macbook</h3>
              <Text>$1300</Text>
            </VStack>
          </Box>
          <Box p={2}>
            <HStack>
              <Button color={'white'} bgColor={'rgb(29, 29, 29)'} m={2}>
                +
              </Button>
              <Text>0</Text>
              <Button color={'white'} bgColor={'rgb(29, 29, 29)'} m={2}>
                -
              </Button>
            </HStack>
          </Box>
          <Box>
            <Button color={'white'} bgColor={'rgb(29, 29, 29)'}>
              Delete
            </Button>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default cart;
