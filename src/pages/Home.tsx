import React from "react";
import { Container, Stack, Grid, Text } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import ItemGames from '@/components/ItemGames'
import { useNavigate } from 'react-router'
import {FreeFire, MobileLegends} from '../images'

const Home: React.FC = () => {

  const navigate = useNavigate();
  // const navigation = useNavigation();

  const handleFilterValue = (filterValue: string) => {
    console.log(`Filter value clicked: ${filterValue}`)
    navigate(`/product/${filterValue}`)
    // console.log('Navigation state=', navigation.state)
  }

  return (
    <Stack>
      <Navbar />
      <Container bg='white'>
        <Text fontWeight='bold' fontSize='2xl'>🔥 Lagi Populer</Text>
        {/* {navigation.state === 'loading' ? (
          <Spinner />
        ) : (
          <Text>Go to New Page</Text>
        )} */}
        <Grid templateColumns="repeat(3, minmax(0, 1fr))" gap={2} mt='3'>
          <ItemGames name={'Mobile Legends A'} image={MobileLegends} handleClick={handleFilterValue} />
          <ItemGames name={'Mobile Legends B'} image={MobileLegends} handleClick={handleFilterValue} />
          <ItemGames name={'Free Fire'} image={FreeFire} handleClick={handleFilterValue} />
        </Grid>
      </Container>
    </Stack>
  );
};

export default Home;
