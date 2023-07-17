import React, { useEffect, useState } from 'react';
import { Progress } from '@chakra-ui/react';
import { Container, HStack } from '@chakra-ui/react';
import axios from 'axios';
import ShoppingItemCard from '../Components/ShoppingItemCard';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://fakestoreapi.com/products?limit=20'
        );
        // console.log(data);
        setData(data);
        setloading(false);
      } catch (error) {
        console.log('An error occurred:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading === true ? (
        <Progress size="xs" isIndeterminate />
      ) : (
        <Container maxWidth={'container.xl'} my={2}>
          <HStack wrap={'wrap'} justifyContent={'center'} gap={'1.2rem'}>
            {data.map(value => {
              return <ShoppingItemCard item={value} key={value.id} />;
            })}
          </HStack>
        </Container>
      )}
    </>
  );
};

export default Home;
