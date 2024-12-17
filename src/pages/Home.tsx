import React from "react";
import { Container, Stack, Grid } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import ItemGames from '@/components/ItemGames'

const Home: React.FC = () => {
  return (
    <Stack>
      <Navbar />
      <Container bg='white'>
        <Grid templateColumns="repeat(3, minmax(0, 1fr))" gap={2} mt='3'>
          <ItemGames name={'Free fire'} />
          <ItemGames name={'Free fire'} />
          <ItemGames name={'Free fire'} />
          <ItemGames name={'Free fire'} />
        </Grid>
      </Container>
    </Stack>
  );
};

export default Home;
