import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useToast } from '@chakra-ui/react';

const ShoppingItemCard = ({ item }) => {
  const id = item.id;
  const image = item.image;
  const name = item.title;
  const price = item.price;

  const dispatch = useDispatch();
  const handler = options => {
    dispatch({ type: 'addToCart', payload: options });
    dispatch({ type: 'calculateBill' });
  };

  const toast = useToast();

  const handleAddToCart = () => {
    handler({ name, price, image, id });
    toast({
      title: 'Item added to cart.',
      status: 'success',
      duration: 1000,
      isClosable: true,
    });
  };

  return (
    <Box
      width={'24rem'}
      bgColor={'white'}
      color={'black'}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Image src={image} alt={name} height="200px" objectFit="cover" />
      <Box p={4}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {name}
        </Text>
        <Text fontSize="lg" mb={2}>
          ${price}
        </Text>
        <Button bgColor={'rgb(237, 86, 21)'} color={'white'} onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ShoppingItemCard;
