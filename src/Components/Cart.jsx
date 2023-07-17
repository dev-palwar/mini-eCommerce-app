import {
  Box,
  HStack,
  Heading,
  VStack,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const { cartItems, subTotal, shipping, total, tax } = useSelector(
    state => state.cart
  );

  return (
    <>
      {cartItems.length === 0 ? (
        <Heading p={5} fontWeight={0} opacity={0.5} lineHeight={'2'}>
          No items yet
        </Heading>
      ) : (
        <HStack
          flexDirection={['column', 'row']}
          justifyContent={'space-evenly'}
        >
          <Box height={'370px'} overflow={'scroll'}>
            {cartItems.map(value => {
              return (
                <Card
                  key={value.id}
                  id={value.id}
                  image={value.image}
                  name={value.name}
                  price={value.price}
                  qty={value.quantity}
                />
              );
            })}
          </Box>
          <Box
            // border={'3px solid green'}
            my={'120px'}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <VStack spacing={4}>
                <Heading fontWeight={0}>
                  Subtotal: ${subTotal.toFixed(2)}
                </Heading>
                <Heading fontWeight={0}>Shipping: ${shipping}</Heading>
                <Heading fontWeight={0}>Tax: ${tax.toFixed(2)}</Heading>
                <Heading fontWeight={0}>Total: ${total.toFixed(2)}</Heading>
              </VStack>
            </Box>
          </Box>
        </HStack>
      )}
    </>
  );
};

const Card = ({ image, name, price, qty, id }) => {
  const dispatch = useDispatch();
  const increment = id => {
    dispatch({ type: 'addToCart', payload: { id } });
    dispatch({ type: 'calculateBill' });
  };
  const decrement = id => {
    dispatch({ type: 'decrement', payload: { id } });
    dispatch({ type: 'calculateBill' });
  };

  const deleteHandler = () => {
    dispatch({ type: 'remove', payload: { id } });
    dispatch({ type: 'calculateBill' });
  };

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
        <HStack display={'flex'} flexDirection={['column','row']}>
          <Box>
            <VStack alignItems={'baseline'}>
              <Image src={image} maxWidth={'20%'} />
              <h3>{name}</h3>
              <Text>${price}</Text>
            </VStack>
          </Box>
          <Box p={2}>
            <HStack>
              <Button
                color={'white'}
                bgColor={'rgb(29, 29, 29)'}
                m={1}
                onClick={() => increment(id)}
              >
                +
              </Button>
              <Text>{qty}</Text>
              <Button
                color={'white'}
                bgColor={'rgb(29, 29, 29)'}
                m={1}
                onClick={() => decrement(id)}
              >
                -
              </Button>
            <Button
              color={'white'}
              bgColor={'rgb(29, 29, 29)'}
              onClick={() => deleteHandler(id)}
            >
              Delete
            </Button>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Cart;
