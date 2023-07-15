import React, { useEffect, useState } from 'react';
import { Container, HStack } from '@chakra-ui/react';
import { Box, Image, Text, Badge, Button } from '@chakra-ui/react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://fakestoreapi.com/products?limit=20'
      );
      console.log(data);
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Container maxWidth={'container.xl'} my={2}>
        <HStack wrap={'wrap'} justifyContent={'center'} gap={'1.2rem'}>
          {/* Cards */}
          {data.map(value => {
            return <ShoppingItemCard item={value} key={value.id} />;
          })}
        </HStack>
      </Container>
    </>
  );
};

const ShoppingItemCard = ({ item }) => {
  //   const { title, image, price } = item;

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      display={'flex'}
      flexDirection={'column'}
    >
      <Image
        src={item.image}
        alt={item.title}
        height="200px"
        objectFit="cover"
      />
      <Box p={4}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {item.title}
        </Text>
        <Text fontSize="lg" mb={2}>
          ${item.price}
        </Text>
        <Button colorScheme="blue">Add to Cart</Button>
      </Box>
    </Box>
  );
};

export default Home;
